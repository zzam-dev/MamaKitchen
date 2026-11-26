/**
 * Vercel Edge Middleware — Admin Route Protection
 *
 * Runs at Vercel's edge BEFORE any page HTML is served.
 * Intercepts requests to /admin and /dashboard, verifies the session cookie.
 * If the cookie is missing or the HMAC signature is invalid → redirect to /admin-login.
 *
 * Because this runs server-side, the SESSION_SECRET is never exposed to the browser.
 */

export const config = {
  matcher: ['/admin', '/admin/:path*', '/dashboard', '/dashboard/:path*'],
};

const SESSION_PAYLOAD = 'mama_kitchen_admin_session_v1';
const COOKIE_NAME = 'mama_admin_session';

/** Parses a Cookie header string into a key→value map */
function parseCookies(cookieHeader: string): Record<string, string> {
  return Object.fromEntries(
    cookieHeader
      .split(';')
      .map((c) => c.trim().split('='))
      .filter(([k]) => k)
      .map(([k, ...v]) => [k.trim(), v.join('=').trim()])
  );
}

/**
 * Constant-time string comparison to prevent timing-based cookie forgery.
 */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

/**
 * Regenerates the expected HMAC token using SESSION_SECRET.
 * Must match the token generated in api/admin-auth.ts.
 */
async function computeExpectedToken(secret: string): Promise<string> {
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

export default async function middleware(request: Request): Promise<Response | undefined> {
  const cookieHeader = request.headers.get('cookie') ?? '';
  const cookies = parseCookies(cookieHeader);
  const sessionCookie = cookies[COOKIE_NAME];

  // No cookie present — redirect to login page
  if (!sessionCookie) {
    return Response.redirect(new URL('/admin-login', request.url), 302);
  }

  // Use configured secret or derive safely from ADMIN_PASS
  const secret =
    process.env.SESSION_SECRET ||
    (process.env.ADMIN_PASS ? `session_${process.env.ADMIN_PASS}` : 'mama_kitchen_default_session_secret_2026');

  // Verify HMAC — rejects forged cookies
  try {
    const expected = await computeExpectedToken(secret);
    if (!safeEqual(sessionCookie, expected)) {
      return Response.redirect(new URL('/admin-login', request.url), 302);
    }
  } catch {
    return Response.redirect(new URL('/admin-login', request.url), 302);
  }

  // Valid session — allow the request through
  return undefined;
}
