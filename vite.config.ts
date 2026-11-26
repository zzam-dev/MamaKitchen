import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      {
        name: 'dev-admin-auth-mock',
        configureServer(server) {
          server.middlewares.use('/api/admin-auth', async (req, res) => {
            if (req.method === 'POST') {
              let bodyStr = '';
              req.on('data', (chunk) => {
                bodyStr += chunk;
              });
              req.on('end', () => {
                try {
                  const { username, password } = JSON.parse(bodyStr || '{}');
                  const expectedUser = env.ADMIN_USER || 'admin';
                  const expectedPass = env.ADMIN_PASS || 'changeme123';

                  if (username === expectedUser && password === expectedPass) {
                    res.setHeader(
                      'Set-Cookie',
                      'mama_admin_session=dev_valid; Path=/; SameSite=Strict'
                    );
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ success: true }));
                  } else {
                    res.statusCode = 401;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: 'Incorrect username or password' }));
                  }
                } catch {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Invalid JSON' }));
                }
              });
              return;
            }

            if (req.method === 'DELETE') {
              res.setHeader('Set-Cookie', 'mama_admin_session=; Path=/; Max-Age=0');
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
              return;
            }

            res.statusCode = 405;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Method not allowed' }));
          });
        },
      },
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './vitest.setup.mjs',
    },
  };
});
