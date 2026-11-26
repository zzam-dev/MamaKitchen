import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { AppShell, useComputedColorScheme } from '@mantine/core';
import { CartDrawer } from './components/Cart';
import { RequireAdminAuth } from './components/RequireAdminAuth';
import { AdminTopBar, TopBar } from './components/TopBar';
import { AdminLoginPage } from './pages/AdminLogin.page';
import { DashboardPage } from './pages/Dashboard.page';
import { HomePage } from './pages/Home.page';
import { brandTokens } from './theme';

/**
 * Public Customer Storefront Layout.
 * Dedicated to customer browsing, menu items, and ordering with CartDrawer.
 */
function StorefrontLayout() {
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: false });
  const isDark = computedColorScheme === 'dark';

  return (
    <AppShell header={{ height: 56 }}>
      <AppShell.Header
        style={{
          background: isDark ? '#231812' : brandTokens.cream,
          borderBottom: isDark ? 'none' : '1px solid rgba(0, 0, 0, 0.06)',
          boxShadow: isDark ? '0 0 16px rgba(0, 0, 0, 0.6)' : '0 0 12px rgba(130, 85, 55, 0.08)',
          transition: 'background-color 150ms ease, border-color 150ms ease',
        }}
      >
        <TopBar />
      </AppShell.Header>
      <AppShell.Main
        style={{
          background: isDark ? 'rgba(20, 20, 20, 1)' : brandTokens.cream,
          minHeight: '100vh',
          transition: 'background-color 150ms ease',
        }}
      >
        <Outlet />
      </AppShell.Main>
      <CartDrawer />
    </AppShell>
  );
}

/**
 * Dedicated Business Owner / Administrative Layout.
 * Completely separated from customer storefront: has its own header and no customer cart drawer.
 */
function AdminLayout() {
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: false });
  const isDark = computedColorScheme === 'dark';

  return (
    <AppShell header={{ height: 56 }}>
      <AppShell.Header
        style={{
          background: isDark ? 'var(--mantine-color-dark-7)' : '#fff',
          borderBottom: `1px solid ${isDark ? 'var(--mantine-color-dark-4)' : '#e9ecef'}`,
          transition: 'background-color 150ms ease, border-color 150ms ease',
        }}
      >
        <AdminTopBar />
      </AppShell.Header>
      <AppShell.Main
        style={{
          background: isDark ? 'var(--mantine-color-dark-9)' : '#f8f9fa',
          minHeight: '100vh',
          transition: 'background-color 150ms ease',
        }}
      >
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

const router = createBrowserRouter([
  // Public customer menu endpoints
  {
    element: <StorefrontLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/menu',
        element: <HomePage />,
      },
    ],
  },
  // Administrative routes — protected server-side by middleware.ts (Vercel Edge Middleware)
  // and client-side by RequireAdminAuth.
  // /admin-login: publicly accessible login page
  // /admin, /dashboard: requires authenticated session
  {
    element: <AdminLayout />,
    children: [
      {
        path: '/admin-login',
        element: <AdminLoginPage />,
      },
      {
        path: '/admin',
        element: (
          <RequireAdminAuth>
            <DashboardPage />
          </RequireAdminAuth>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <RequireAdminAuth>
            <DashboardPage />
          </RequireAdminAuth>
        ),
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
