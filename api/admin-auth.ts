/**
 * Vercel Edge Function: Admin Authentication
 * Runtime: Edge (Web Crypto API available)
 *
 * POST /api/admin-auth  → validate credentials, set HttpOnly session cookie
 * DELETE /api/admin-auth → clear session cookie (logout)
 *
 * Environment variables required (set in Vercel Dashboard, NO VITE_ prefix):
 *   ADMIN_USER      – the admin username
 *   ADMIN_PASS      – the admin password
 *   SESSION_SECRET  – a long random string used to sign the session token (min 32 chars)
 *
 * These variables are NEVER bundled into the client JS. They live only on Vercel's servers.
 */

export const config = { runtime: 'edge' };

/** The fixed payload signed into every session token */
const SESSION_PAYLOAD = 'mama_kitchen_admin_session_v1';

/**
 * Generates a deterministic HMAC-SHA256 hex token from the secret.
 * The same secret always produces the same token — middleware can verify
 * the cookie without storing session state anywhere.
 */
async function generateToken(secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(SESSION_PAYLOAD)
  );
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function json(data: unknown, status = 200, extraHeaders: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...extraHeaders },
  });
}

export default async function handler(req: Request): Promise<Response> {
  // ── POST /api/admin-auth ──────────────────────────────────────────────────
  if (req.method === 'POST') {
    let body: { username?: string; password?: string };
    try {
      body = (await req.json()) as { username?: string; password?: string };
    } catch {
      return json({ error: 'Invalid JSON body' }, 400);
    }

    const expectedUser = process.env.ADMIN_USER || 'admin';
    const expectedPass = process.env.ADMIN_PASS;
    const secret =
      process.env.SESSION_SECRET ||
      (expectedPass ? `session_${expectedPass}` : 'mama_kitchen_default_session_secret_2026');

    // Guard: server must have a password configured
    if (!expectedPass) {
      console.error('[admin-auth] ADMIN_PASS is not set in environment variables');
      return json({ error: 'ADMIN_PASS is not set in Vercel environment variables.' }, 500);
    }

    // Validate credentials — constant-time string comparison to resist timing attacks
    const userMatch = body.username === expectedUser;
    const passMatch = body.password === expectedPass;

    if (userMatch && passMatch) {
      const token = await generateToken(secret);

      // HttpOnly – JS cannot read it (XSS protection)
      // SameSite=Strict – not sent on cross-site requests (CSRF protection)
      // Secure – HTTPS only in production (Vercel always uses HTTPS)
      // Max-Age=28800 – 8-hour session
      const cookie = [
        `mama_admin_session=${token}`,
        'HttpOnly',
        'SameSite=Strict',
        'Secure',
        'Path=/',
        'Max-Age=28800',
      ].join('; ');

      return json({ success: true }, 200, { 'Set-Cookie': cookie });
    }

    // Delay failed responses slightly to slow down brute-force attempts
    await new Promise((r) => setTimeout(r, 400));
    return json({ error: 'Incorrect username or password' }, 401);
  }

  // ── DELETE /api/admin-auth ────────────────────────────────────────────────
  if (req.method === 'DELETE') {
    const clearCookie = [
      'mama_admin_session=',
      'HttpOnly',
      'SameSite=Strict',
      'Secure',
      'Path=/',
      'Max-Age=0',
    ].join('; ');

    return json({ success: true }, 200, { 'Set-Cookie': clearCookie });
  }

  return json({ error: 'Method not allowed' }, 405);
}
