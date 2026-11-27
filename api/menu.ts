/**
 * Vercel Edge Function: Menu API (/api/menu)
 * Runtime: Edge
 *
 * - GET    /api/menu          → Public: fetch all dishes from Supabase (auto-seeds from dishes.json if empty)
 * - POST   /api/menu          → Admin: upsert one or more dishes
 * - PATCH  /api/menu          → Admin: update fields on a dish by id
 * - DELETE /api/menu?id=123   → Admin: delete a dish by id (or ?reset=true to re-seed defaults)
 */

import { createClient } from '@supabase/supabase-js';
import initialDishes from '../src/data/dishes.json';

export const config = { runtime: 'edge' };

const SESSION_PAYLOAD = 'mama_kitchen_admin_session_v1';
const COOKIE_NAME = 'mama_admin_session';

interface DbDishRow {
  id: number;
  title: string;
  title_ar: string;
  description: string;
  description_ar: string;
  image: string;
  uploadedDataUrl?: string | null;
  category: string;
  sale: boolean;
  available: boolean;
  sizes: Array<{ label: string; price: number; discountedPrice?: number }>;
  perPiecePrice?: number | null;
  perPieceDiscountedPrice?: number | null;
}

interface ClientDish {
  id: number;
  title: string;
  title_ar?: string;
  description: string;
  description_ar?: string;
  image: string;
  uploadedDataUrl?: string;
  category: string;
  sale: boolean;
  available?: boolean;
  sizes: Array<{ label: string; price: number; discountedPrice?: number }>;
  perPiece?: { price: number; discountedPrice?: number };
}

function toDbRow(dish: ClientDish): DbDishRow {
  return {
    id: dish.id,
    title: dish.title,
    title_ar: dish.title_ar ?? '',
    description: dish.description ?? '',
    description_ar: dish.description_ar ?? '',
    image: dish.image ?? 'maincourse',
    uploadedDataUrl: dish.uploadedDataUrl ?? null,
    category: dish.category ?? 'main',
    sale: Boolean(dish.sale),
    available: dish.available !== false,
    sizes: dish.sizes ?? [],
    perPiecePrice: dish.perPiece?.price ?? null,
    perPieceDiscountedPrice: dish.perPiece?.discountedPrice ?? null,
    storage_path: dish.storagePath ?? null,
  };
}

function toClientDish(row: DbDishRow): ClientDish {
  const dish: ClientDish = {
    id: row.id,
    title: row.title,
    title_ar: row.title_ar || undefined,
    description: row.description,
    description_ar: row.description_ar || undefined,
    image: row.image,
    category: row.category,
    sale: row.sale,
    available: row.available,
    sizes: row.sizes ?? [],
    storagePath: row.storage_path ?? undefined,
  };
  if (row.uploadedDataUrl) {
    dish.uploadedDataUrl = row.uploadedDataUrl;
  }
  if (row.perPiecePrice != null && Number(row.perPiecePrice) > 0) {
    dish.perPiece = {
      price: Number(row.perPiecePrice),
      ...(row.perPieceDiscountedPrice != null && Number(row.perPieceDiscountedPrice) > 0
        ? { discountedPrice: Number(row.perPieceDiscountedPrice) }
        : {}),
    };
  }
  return dish;
}

function parseCookies(cookieHeader: string): Record<string, string> {
  return Object.fromEntries(
    cookieHeader
      .split(';')
      .map((c) => c.trim().split('='))
      .filter(([k]) => k)
      .map(([k, ...v]) => [k.trim(), v.join('=').trim()])
  );
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {return false;}
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

async function isAdminAuthorized(req: Request): Promise<boolean> {
  const cookies = parseCookies(req.headers.get('cookie') ?? '');
  const token = cookies[COOKIE_NAME];
  if (!token) {return false;}

  const secret =
    process.env.SESSION_SECRET ||
    (process.env.ADMIN_PASS ? `session_${process.env.ADMIN_PASS}` : 'mama_kitchen_default_session_secret_2026');

  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(SESSION_PAYLOAD));
  const expected = Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  return safeEqual(token, expected);
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export default async function handler(req: Request): Promise<Response> {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return json({ error: 'Supabase environment variables are not configured.' }, 500);
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  // ── GET /api/menu (Public) ────────────────────────────────────────────────
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('dishes')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      return json({ error: error.message }, 500);
    }

    // Auto-seed from src/data/dishes.json on first run if table is empty
    if (!data || data.length === 0) {
      const seedRows = (initialDishes as unknown as ClientDish[]).map(toDbRow);
      const { data: seeded, error: seedError } = await supabase
        .from('dishes')
        .upsert(seedRows, { onConflict: 'id' })
        .select('*')
        .order('id', { ascending: true });

      if (seedError) {
        return json({ error: seedError.message }, 500);
      }
      return json({ dishes: (seeded as DbDishRow[]).map(toClientDish) });
    }

    return json({ dishes: (data as DbDishRow[]).map(toClientDish) });
  }

  // ── Admin-only mutations below ────────────────────────────────────────────
  if (!(await isAdminAuthorized(req))) {
    return json({ error: 'Unauthorized' }, 401);
  }

  // ── POST /api/menu (Upsert dish or array of dishes) ───────────────────────
  if (req.method === 'POST') {
    const body = (await req.json()) as { dish?: ClientDish; dishes?: ClientDish[] };
    const items = body.dishes ?? (body.dish ? [body.dish] : []);
    if (items.length === 0) {
      return json({ error: 'Missing dish payload' }, 400);
    }

    const { error } = await supabase
      .from('dishes')
      .upsert(items.map(toDbRow), { onConflict: 'id' });

    if (error) {
      return json({ error: error.message }, 500);
    }
    return json({ success: true });
  }

  // ── PATCH /api/menu (Partial update by id) ────────────────────────────────
  if (req.method === 'PATCH') {
    const body = (await req.json()) as { id?: number; updated?: Partial<ClientDish> };
    if (!body.id || !body.updated) {
      return json({ error: 'Missing id or updated fields' }, 400);
    }

    const { data: existing, error: fetchError } = await supabase
      .from('dishes')
      .select('*')
      .eq('id', body.id)
      .single();

    if (fetchError || !existing) {
      return json({ error: 'Dish not found' }, 404);
    }

    const merged: ClientDish = {
      ...toClientDish(existing as DbDishRow),
      ...body.updated,
      id: body.id,
    };

    const { error } = await supabase
      .from('dishes')
      .upsert(toDbRow(merged), { onConflict: 'id' });

    if (error) {
      return json({ error: error.message }, 500);
    }
    return json({ success: true });
  }

  // ── DELETE /api/menu (Delete by id or ?reset=true) ────────────────────────
  if (req.method === 'DELETE') {
    const url = new URL(req.url);
    const reset = url.searchParams.get('reset') === 'true';

    if (reset) {
      await supabase.from('dishes').delete().neq('id', -1);
      const seedRows = (initialDishes as unknown as ClientDish[]).map(toDbRow);
      const { error } = await supabase.from('dishes').upsert(seedRows, { onConflict: 'id' });
      if (error) {return json({ error: error.message }, 500);}
      return json({ success: true });
    }

    const idParam = url.searchParams.get('id');
    const id = idParam ? Number(idParam) : NaN;
    if (!Number.isFinite(id)) {
      return json({ error: 'Invalid dish id' }, 400);
    }

    const { error } = await supabase.from('dishes').delete().eq('id', id);
    if (error) {
      return json({ error: error.message }, 500);
    }
    return json({ success: true });
  }

  return json({ error: 'Method not allowed' }, 405);
}
