/**
 * Vercel Edge Function: Image Management (/api/admin/image)
 * Runtime: Edge
 * Handles upload and deletion of dish images in the Supabase Storage bucket "Product Images".
 * All endpoints require admin session cookie (same pattern as /api/admin-auth / /api/menu).
 */

import { createClient } from '@supabase/supabase-js';
import { config } from './admin-auth';

export const config = { runtime: 'edge' };

/** Fixed payload signed into every session token (same as admin-auth) */
const SESSION_PAYLOAD = 'mama_kitchen_admin_session_v1';

/** Helper: verify admin cookie */
async function isAdminAuthorized(req: Request): Promise<boolean> {
  const cookies = req.headers.get('cookie') ?? '';
  const token = Object.fromEntries(
    cookies.split(';').map((c) => c.trim().split('='))
  )[config?.COOKIE_NAME ?? 'mama_admin_session'];

  if (!token) {return false;}

  const secret =
    process.env.SESSION_SECRET ||
    (config?.ADMIN_PASS ? `session_${config.ADMIN_PASS}` : 'mama_kitchen_default_session_secret_2026');

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

  return token === expected;
}

/** Upload dish image to Supabase Storage bucket "Product Images" */
export default async function handler(req: Request): Promise<Response> {
  // ── POST /api/admin/image ────────────────────────────────────────────────
  if (req.method === 'POST') {
    if (!(await isAdminAuthorized(req))) {
      return new Response('Unauthorized', { status: 401 });
    }

    try {
      const formData = await req.formData();
      const file = formData.get('file') as File;
      const productId = formData.get('productId') as string;

      if (!file || !productId) {
        return new Response('Missing file or productId', { status: 400 });
      }

      const ext = file.name.split('.').pop() ?? 'jpg';
      const path = `${productId}.${ext}`;

      const supabaseUrl = process.env.SUPABASE_URL ?? '';
      const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';
      const supabase = createClient(supabaseUrl, supabaseServiceKey);

      // Upload to bucket "Product Images"
      const { error } = await supabase.storage.from('Product Images').upload(path, file, {
        upsert: true,
      });
      if (error) {throw error;}

      // Get public URL
      const { data } = supabase.storage.from('Product Images').getPublicUrl(path);
      const publicUrl = data?.publicUrl ?? '';

      return new Response(
        JSON.stringify({ publicUrl, storagePath: path }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An unknown error occurred';
      return new Response(JSON.stringify({ error: message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  // ── DELETE /api/admin/image?path=… ───────────────────────────────────────
  if (req.method === 'DELETE') {
    if (!(await isAdminAuthorized(req))) {
      return new Response('Unauthorized', { status: 401 });
    }

    try {
      const url = new URL(req.url);
      const path = url.searchParams.get('path') ?? '';

      if (!path) {
        return new Response('Missing path parameter', { status: 400 });
      }

      const supabaseUrl = process.env.SUPABASE_URL ?? '';
      const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';
      const supabase = createClient(supabaseUrl, supabaseServiceKey);

      await supabase.storage.from('Product Images').remove([path]);

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An unknown error occurred';
      return new Response(JSON.stringify({ error: message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  return new Response('Method not allowed', { status: 405 });
}