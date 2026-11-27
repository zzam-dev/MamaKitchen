/**
 * Dedicated API / Service Endpoints for Mama Kitchen.
 * Separates public customer storefront operations from administrative menu management.
 */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseServiceKey);

export interface UpdateProductsRequestBody {
  products: unknown[];
  googleToken: string;
}

export interface GoogleTokenInfo {
  email?: string;
  [key: string]: unknown;
}

export interface ApiRequest {
  method?: string;
  body: UpdateProductsRequestBody;
}

export interface ApiResponse {
  status: (statusCode: number) => ApiResponse;
  json: (data: { success?: boolean; message?: string; error?: string }) => void;
}

export default async function handler(req: ApiRequest, _res: ApiResponse) {
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

// ── Image storage helpers (separate admin endpoint) ──────────────────────────
export const STORAGE_BUCKET = 'Product Images';

export async function uploadProductImage(productId: number, file: File): Promise<string | null> {
  const ext = file.name.split('.').pop() ?? 'jpg';
  const path = `${productId}.${ext}`;
  const { error } = await supabase.storage.from(STORAGE_BUCKET).upload(path, file, { upsert: true });
  if (error) {throw error;}
  const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

export async function deleteProductImage(path: string): Promise<void> {
  await supabase.storage.from(STORAGE_BUCKET).remove([path]);
}