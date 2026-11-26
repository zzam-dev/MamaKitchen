import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * Client-side guard for the administrative panel.
 * Provides instant redirection in local development and client-side navigation
 * if the user has not authenticated through /admin-login.
 *
 * In production on Vercel, edge middleware (middleware.ts) also protects
 * these routes at the server/network level before any HTML is sent.
 */
export function RequireAdminAuth({ children }: { children: React.ReactNode }) {
  const isAuth = typeof window !== 'undefined' && sessionStorage.getItem('mama_admin_session') === '1';

  if (!isAuth) {
    return <Navigate to="/admin-login" replace />;
  }

  return <>{children}</>;
}
