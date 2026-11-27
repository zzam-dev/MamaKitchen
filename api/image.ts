import { createClient } from '@supabase/supabase-js';

export const config = { runtime: 'edge' };

const SESSION_PAYLOAD = 'mama_kitchen_admin_session_v1';
const COOKIE_NAME = 'mama_admin_session';
const STORAGE_BUCKET = 'Product Images';

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

/** Upload / delete dish images in the Supabase Storage bucket "Product Images" */
export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST' && req.method !== 'DELETE') {
    return new Response('Method not allowed', { status: 405 });
  }

  if (!(await isAdminAuthorized(req))) {
    return new Response('Unauthorized', { status: 401 });
  }

  const supabaseUrl = process.env.SUPABASE_URL ?? '';
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  // ── POST: upload ──────────────────────────────────────────────────────────
  if (req.method === 'POST') {
    try {
      const formData = await req.formData();
      const file = formData.get('file') as File | null;
      const productId = formData.get('productId') as string | null;
      if (!file || !productId) {
        return new Response('Missing file or productId', { status: 400 });
      }
      const ext = file.name.split('.').pop() ?? 'jpg';
      const path = `${productId}.${ext}`;
      const { error } = await supabase.storage.from(STORAGE_BUCKET).upload(path, file, {
        upsert: true,
      });
      if (error) {throw error;}
      const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(path);
      return json({ publicUrl: data?.publicUrl ?? '', storagePath: path });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An unknown error occurred';
      return json({ error: message }, 500);
    }
  }

  // ── DELETE: remove ────────────────────────────────────────────────────────
  try {
    const url = new URL(req.url);
    const path = url.searchParams.get('path') ?? '';
    if (!path) {
      return new Response('Missing path parameter', { status: 400 });
    }
    const { error } = await supabase.storage.from(STORAGE_BUCKET).remove([path]);
    if (error) {throw error;}
    return json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'An unknown error occurred';
    return json({ error: message }, 500);
  }
}
