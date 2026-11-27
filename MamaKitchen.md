This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.
The content has been processed where comments have been removed, empty lines have been removed.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: **/node_modules/**, **/dist/**, **/target/**, **/out/**, **/build/**, **/bin/**, **/lib/**, **/lib64/**, **/share/**, **/man/**, **/doc/**, **/info/**, **/html/**, **/pdf/**, **/ps/**, **/dvi/**, **/tex/**, **/log/**, **/aux/**, **/bbl/**, **/blg/**, **/idx/**, **/ilg/**, **/out/**, **/build/**, **/bin/**, **/lib/**, **/lib64/**, **/share/**, **/man/**, **/doc/**, **/info/**, **/html/**, **/pdf/**, **/ps/**, **/dvi/**, **/tex/**, **/log/**, **/aux/**, **/bbl/**, **/blg/**, **/idx/**, **/ilg/**, token.json, credentials.json, .exe, .env*
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Code comments have been removed from supported file types
- Empty lines have been removed from all files
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.github/workflows/npm_test.yml
.gitignore
.prettierrc.mjs
.storybook/main.ts
.storybook/preview.tsx
.storybook/tsconfig.json
.storybook/vite-env.d.ts
.stylelintignore
.stylelintrc.json
api/_lib/supabase.ts
api/admin-auth.ts
api/endpoints.ts
api/image.ts
api/menu.ts
eslint.config.js
index.html
LICENSE
middleware.ts
package.json
postcss.config.cjs
public/favicon.svg
README.md
renovate.json
src/App.tsx
src/archive/Home.page.v1.tsx
src/assets/images/agashi.jpg
src/assets/images/index.ts
src/assets/images/maincourse.webp
src/assets/images/paper-texture.jpg
src/assets/react.svg
src/assets/vite.svg
src/components/AdminGuard.tsx
src/components/Cart/cartAddons.ts
src/components/Cart/CartAddonsShelf.tsx
src/components/Cart/CartCustomerForm.tsx
src/components/Cart/CartDrawer.tsx
src/components/Cart/CartEmptyState.tsx
src/components/Cart/CartFooter.tsx
src/components/Cart/CartItemRow.tsx
src/components/Cart/CartPreferencesSection.tsx
src/components/Cart/index.ts
src/components/ColorSchemeToggle/ColorSchemeToggle.tsx
src/components/DishCard/DishCard.tsx
src/components/DishCard/DishCard.types.ts
src/components/DishCard/DishDetailModal.tsx
src/components/DishCard/DishListItem.tsx
src/components/DishCard/index.ts
src/components/DishCard/PriceTagCapsule.tsx
src/components/DishCard/SaleBadge.tsx
src/components/RequireAdminAuth.tsx
src/components/TopBar/AdminTopBar.tsx
src/components/TopBar/index.ts
src/components/TopBar/TopBar.test.tsx
src/components/TopBar/TopBar.tsx
src/components/Welcome/Welcome.module.css
src/components/Welcome/Welcome.story.tsx
src/components/Welcome/Welcome.test.tsx
src/components/Welcome/Welcome.tsx
src/context/CartContext.tsx
src/context/LanguageContext.tsx
src/context/MenuContext.test.tsx
src/context/MenuContext.tsx
src/data/dishes.json
src/locales/ar.ts
src/locales/en.ts
src/locales/index.ts
src/locales/types.ts
src/main.tsx
src/pages/AdminLogin.page.tsx
src/pages/Dashboard.page.tsx
src/pages/Dashboard/components/DashboardDishCard.tsx
src/pages/Dashboard/components/DashboardDishModal.tsx
src/pages/Dashboard/components/DashboardJsonDrawer.tsx
src/pages/Dashboard/components/DashboardStats.tsx
src/pages/Dashboard/Dashboard.page.tsx
src/pages/Dashboard/dashboard.types.ts
src/pages/Dashboard/index.ts
src/pages/Home.page.tsx
src/Router.tsx
src/styles/neumorphic.ts
src/theme-integration.test.tsx
src/theme.ts
src/utils/orderValidation.test.ts
src/utils/orderValidation.ts
src/vite-env.d.ts
test-utils/index.ts
test-utils/render.tsx
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vercel.json
vite.config.ts
vitest.setup.mjs
```

# Files

## File: .prettierrc.mjs
````javascript
/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'es5',
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '.*styles.css$',
    '',
    'dayjs',
    '^react$',
    '^next$',
    '^next/.*$',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '^@mantine/(.*)$',
    '^@mantinex/(.*)$',
    '^@mantine-tests/(.*)$',
    '^@docs/(.*)$',
    '^@/.*$',
    '^../(?!.*.css$).*$',
    '^./(?!.*.css$).*$',
    '\\.css$',
  ],
  overrides: [
    {
      files: '*.mdx',
      options: {
        printWidth: 70,
      },
    },
  ],
};

export default config;
````

## File: .stylelintignore
````
dist
````

## File: .stylelintrc.json
````json
{
  "extends": ["stylelint-config-standard-scss"],
  "rules": {
    "custom-property-pattern": null,
    "selector-class-pattern": null,
    "scss/no-duplicate-mixins": null,
    "declaration-empty-line-before": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "alpha-value-notation": null,
    "custom-property-empty-line-before": null,
    "property-no-vendor-prefix": null,
    "color-function-notation": null,
    "length-zero-no-unit": null,
    "selector-not-notation": null,
    "no-descending-specificity": null,
    "comment-empty-line-before": null,
    "scss/at-mixin-pattern": null,
    "scss/at-rule-no-unknown": null,
    "value-keyword-case": null,
    "media-feature-range-notation": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global"]
      }
    ]
  }
}
````

## File: postcss.config.cjs
````javascript
module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
      },
    },
  },
};
````

## File: src/components/ColorSchemeToggle/ColorSchemeToggle.tsx
````typescript
import { Button, Group, useMantineColorScheme } from '@mantine/core';
export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  return (
    <Group justify="center" mt="xl">
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
    </Group>
  );
}
````

## File: src/components/Welcome/Welcome.module.css
````css
.title {
  color: light-dark(var(--mantine-color-black), var(--mantine-color-white));
  font-size: rem(100px);
  font-weight: 900;
  letter-spacing: rem(-2px);
  @media (max-width: $mantine-breakpoint-md) {
    font-size: rem(50px);
  }
}
````

## File: src/components/Welcome/Welcome.story.tsx
````typescript
import { Welcome } from './Welcome';
export default {
  title: 'Welcome',
};
export const Usage = () => <Welcome />;
````

## File: src/components/Welcome/Welcome.test.tsx
````typescript
import { render, screen } from '@test-utils';
import { Welcome } from './Welcome';
describe('Welcome component', () => {
  it('has correct Vite guide link', () => {
    render(<Welcome />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/vite/'
    );
  });
});
````

## File: src/components/Welcome/Welcome.tsx
````typescript
import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';
export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Mantine
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Vite project includes a minimal setup, if you want to learn more on Mantine +
        Vite integration follow{' '}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor>
        . To get started edit pages/Home.page.tsx file.
      </Text>
    </>
  );
}
````

## File: src/main.tsx
````typescript
import ReactDOM from 'react-dom/client';
import App from './App';
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
````

## File: src/vite-env.d.ts
````typescript

````

## File: test-utils/index.ts
````typescript
import userEvent from '@testing-library/user-event';
export * from '@testing-library/react';
export { render } from './render';
export { userEvent };
````

## File: vitest.setup.mjs
````javascript
import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
window.HTMLElement.prototype.scrollIntoView = () => {};

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;
````

## File: .storybook/tsconfig.json
````json
{
  "extends": "../tsconfig.app.json",
  "compilerOptions": {
    "moduleResolution": "bundler",
    "types": ["node"],
    "allowImportingTsExtensions": false,
    "verbatimModuleSyntax": false
  },
  "include": ["**/*.ts", "**/*.tsx"]
}
````

## File: .storybook/vite-env.d.ts
````typescript
declare module '*.css' {
  const content: string;
  export default content;
}
declare module '@mantine/core/styles.css';
````

## File: api/_lib/supabase.ts
````typescript
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
export const supabase = createClient(supabaseUrl, supabaseServiceKey);
export const STORAGE_BUCKET = 'Product Images';
export async function uploadProductImage(productId: number, file: File): Promise<string | null> {
  const ext = file.name.split('.').pop() ?? 'jpg';
  const path = `${productId}.${ext}`;
  const { error } = await supabase.storage.from(STORAGE_BUCKET).upload(path, file, { upsert: true });
  if (error) { throw error; }
  const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}
export async function deleteProductImage(path: string): Promise<void> {
  await supabase.storage.from(STORAGE_BUCKET).remove([path]);
}
````

## File: api/admin-auth.ts
````typescript
export const config = { runtime: 'edge' };
const SESSION_PAYLOAD = 'mama_kitchen_admin_session_v1';
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
    if (!expectedPass) {
      console.error('[admin-auth] ADMIN_PASS is not set in environment variables');
      return json({ error: 'ADMIN_PASS is not set in Vercel environment variables.' }, 500);
    }
    const userMatch = body.username === expectedUser;
    const passMatch = body.password === expectedPass;
    if (userMatch && passMatch) {
      const token = await generateToken(secret);
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
    await new Promise((r) => setTimeout(r, 400));
    return json({ error: 'Incorrect username or password' }, 401);
  }
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
````

## File: api/endpoints.ts
````typescript
export const API_ENDPOINTS = {
  PUBLIC_MENU: '/api/menu',
  ADMIN_MENU: '/api/admin/menu',
} as const;
export type ApiEndpoints = typeof API_ENDPOINTS;
````

## File: LICENSE
````
MIT License

Copyright (c) 2026 Luis Damy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````

## File: public/favicon.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 163 163"><path fill="#339AF0" d="M162.162 81.5c0-45.011-36.301-81.5-81.08-81.5C36.301 0 0 36.489 0 81.5 0 126.51 36.301 163 81.081 163s81.081-36.49 81.081-81.5z"/><path fill="#fff" d="M65.983 43.049a6.234 6.234 0 00-.336 6.884 6.14 6.14 0 001.618 1.786c9.444 7.036 14.866 17.794 14.866 29.52 0 11.726-5.422 22.484-14.866 29.52a6.145 6.145 0 00-1.616 1.786 6.21 6.21 0 00-.694 4.693 6.21 6.21 0 001.028 2.186 6.151 6.151 0 006.457 2.319 6.154 6.154 0 002.177-1.035 50.083 50.083 0 007.947-7.39h17.493c3.406 0 6.174-2.772 6.174-6.194s-2.762-6.194-6.174-6.194h-9.655a49.165 49.165 0 004.071-19.69 49.167 49.167 0 00-4.07-19.692h9.66c3.406 0 6.173-2.771 6.173-6.194 0-3.422-2.762-6.193-6.173-6.193H82.574a50.112 50.112 0 00-7.952-7.397 6.15 6.15 0 00-4.578-1.153 6.189 6.189 0 00-4.055 2.438h-.006z"/><path fill="#fff" fill-rule="evenodd" d="M56.236 79.391a9.342 9.342 0 01.632-3.608 9.262 9.262 0 011.967-3.077 9.143 9.143 0 012.994-2.063 9.06 9.06 0 017.103 0 9.145 9.145 0 012.995 2.063 9.262 9.262 0 011.967 3.077 9.339 9.339 0 01-2.125 10.003 9.094 9.094 0 01-6.388 2.63 9.094 9.094 0 01-6.39-2.63 9.3 9.3 0 01-2.755-6.395z" clip-rule="evenodd"/></svg>
````

## File: README.md
````markdown
# Mantine Vite Template

A modern React application built with Mantine UI components, Vite, and TypeScript, managed with Bun.

## Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## Prerequisites

- [Bun](https://bun.sh/) installed on your system

## Getting Started

### Installation

Install all dependencies:

```bash
bun install
```

### Development

Start the development server:

```bash
bun run dev
```

The app will be available at `http://localhost:5173`

## Scripts

### Development & Build

- `bun run dev` – Start development server with hot reload
- `bun run build` – Build production version of the app to `dist/` folder
- `bun run preview` – Locally preview the production build

### Testing

- `bun run test` – Run all tests once
- `bun run test:watch` – Run tests in watch mode (re-runs on file changes)
- `bun run test:ui` – Run tests with Vitest UI interface
- `bun run typecheck` – Check TypeScript types without emitting files

### Code Quality

- `bun run lint` – Run ESLint and Stylelint
- `bun run lint:fix` – Auto-fix ESLint and Stylelint issues
- `bun run format` – Format all files with Prettier
- `bun run format:check` – Check if files are formatted correctly
- `bun run validate` – Run full validation (typecheck + format + lint + test + build)

### Storybook

- `bun run storybook` – Start Storybook dev server at `http://localhost:6006`
- `bun run storybook:build` – Build production Storybook bundle to `storybook-static/`

## Testing the Production Build

To test how your app will behave in production:

```bash
# Build the production version
bun run build

# Preview the built app locally
bun run preview
```

The preview server will start at `http://localhost:4173` (or another available port).

### Alternative: Using a Static Server

You can also serve the `dist/` folder with any static file server:

```bash
# Build first
bun run build

# Serve the dist folder
cd dist
bunx serve
```

## Project Structure

```
vite-template/
├── src/                  # Application source code
│   ├── components/       # React components
│   ├── pages/           # Page components
│   └── assets/          # Images, fonts, etc.
├── public/              # Static files served directly
├── test-utils/          # Testing utilities and setup
├── .storybook/          # Storybook configuration
└── dist/                # Production build output (generated)
```

## Deployment

After running `bun run build`, the `dist/` folder contains your production-ready app. Deploy this folder to any static hosting service:

- **Vercel**: `bunx vercel deploy`
- **Netlify**: `bunx netlify deploy --prod --dir=dist`
- **GitHub Pages**: Push `dist/` folder contents to `gh-pages` branch

## Learn More

- [Mantine Documentation](https://mantine.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Bun Documentation](https://bun.sh/docs)
- [React Documentation](https://react.dev/)
````

## File: renovate.json
````json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "schedule": ["before 5am on sunday"],
  "groupName": "all dependencies",
  "packageRules": [
    {
      "matchPackagePatterns": ["*"],
      "groupName": "all dependencies"
    }
  ],
  "prHourlyLimit": 0,
  "prConcurrentLimit": 0
}
````

## File: src/assets/images/index.ts
````typescript
import agashi from '@/assets/images/agashi.jpg';
import maincourse from '@/assets/images/maincourse.webp';
import paperTexture from '@/assets/images/paper-texture.jpg';
export const dishImages: Record<string, string> = {
  agashi,
  maincourse,
};
export { paperTexture };
````

## File: src/assets/react.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
````

## File: src/assets/vite.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
````

## File: src/components/AdminGuard.tsx
````typescript
export {};
````

## File: src/components/Cart/cartAddons.ts
````typescript
import { dishImages } from '@/assets/images';
export interface SupplementaryAddon {
  id: string;
  dishId: number;
  titleEn: string;
  titleAr: string;
  price: number;
  image: string;
}
export const SUPPLEMENTARY_ADDONS: SupplementaryAddon[] = [
  {
    id: 'supp-kisra',
    dishId: 9001,
    titleEn: 'Sudanese Kisra (4 sheets)',
    titleAr: 'كسرة سودانية طازجة (4 طرقات)',
    price: 25,
    image: dishImages.maincourse,
  },
  {
    id: 'supp-qarasa',
    dishId: 9002,
    titleEn: 'Sudanese Qarasa (2 pcs)',
    titleAr: 'قراصة سودانية بلدي (حبتين)',
    price: 25,
    image: dishImages.maincourse,
  },
  {
    id: 'supp-rice',
    dishId: 9003,
    titleEn: 'Vermicelli Rice (Portion)',
    titleAr: 'أرز بالشعرية (طبق)',
    price: 35,
    image: dishImages.maincourse,
  },
  {
    id: 'supp-shatta',
    dishId: 9004,
    titleEn: 'Shatta with Dakwa & Lemon',
    titleAr: 'شطة بالدكوة والليمون (علبة)',
    price: 15,
    image: dishImages.agashi,
  },
  {
    id: 'supp-powder',
    dishId: 9005,
    titleEn: 'Agashi Spices Powder',
    titleAr: 'بودرة بهارات أقاشي إضافية',
    price: 20,
    image: dishImages.agashi,
  },
  {
    id: 'supp-torshi',
    dishId: 9006,
    titleEn: 'Sudanese Mixed Torshi',
    titleAr: 'طرشي ومخلل سوداني',
    price: 15,
    image: dishImages.maincourse,
  },
];
````

## File: src/components/Cart/CartAddonsShelf.tsx
````typescript
import React from 'react';
import { IconMinus, IconPlus, IconSparkles } from '@tabler/icons-react';
import { ActionIcon, Button, Group, Paper, SimpleGrid, Stack, Text } from '@mantine/core';
import type { CartItem } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens } from '@/styles/neumorphic';
import { SUPPLEMENTARY_ADDONS, type SupplementaryAddon } from './cartAddons';
export interface CartAddonsShelfProps {
  items: CartItem[];
  isDark: boolean;
  onAddItem: (addon: { dishId: number; title: string; sizeLabel: string; unitPrice: number; quantity: number; image: string }) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}
export function CartAddonsShelf({
  items,
  isDark,
  onAddItem,
  onUpdateQuantity,
}: CartAddonsShelfProps) {
  const { t, isArabic } = useLanguage();
  return (
    <Paper
      p="xs"
      radius="md"
      style={{
        backgroundColor: isDark ? 'rgba(38, 27, 23, 0.55)' : 'rgba(255, 248, 240, 0.65)',
        border: isDark ? 'none' : '1px solid rgba(0, 0, 0, 0.06)',
        boxShadow: isDark
          ? '0 0 12px rgba(0,0,0,0.45)'
          : '0 0 10px rgba(105, 68, 44, 0.16), 0 0 4px rgba(255, 255, 255, 0.9)',
      }}
    >
      <Stack gap="xs">
        <Group gap={6} align="center">
          <IconSparkles
            size={16}
            stroke={2}
            style={{ color: isDark ? '#FFE066' : brandTokens.red }}
          />
          <Text
            size="xs"
            fw={800}
            style={{
              color: isDark ? '#FFE066' : brandTokens.red,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            {t.supplementaryOptions}
          </Text>
        </Group>
        <Text size="xs" fw={700} style={{ color: isDark ? '#D4BFA8' : '#7A5235' }}>
          {t.quickAddons}
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={6}>
          {SUPPLEMENTARY_ADDONS.map((addon) => {
            const cartItem = items.find((i) => i.dishId === addon.dishId);
            const isAdded = !!cartItem;
            const count = cartItem?.quantity || 0;
            const title = isArabic ? addon.titleAr : addon.titleEn;
            return (
              <Paper
                key={addon.id}
                p={8}
                radius="md"
                style={{
                  backgroundColor: isAdded
                    ? isDark
                      ? 'rgba(140, 28, 19, 0.32)'
                      : '#FFF3F0'
                    : isDark
                      ? 'rgba(255, 255, 255, 0.04)'
                      : '#FFFFFF',
                  border: isDark
                    ? 'none'
                    : `1px solid ${isAdded ? brandTokens.red : 'rgba(0, 0, 0, 0.08)'}`,
                  boxShadow: isDark
                    ? '0 0 8px rgba(0, 0, 0, 0.4)'
                    : '0 0 3px rgba(107, 70, 45, 0.17), 0 0 3px rgba(255, 255, 255, 0.9)',
                  transition: 'all 150ms ease',
                }}
              >
                <Group justify="space-between" wrap="nowrap" gap="xs">
                  <Stack gap={1} style={{ flex: 1, minWidth: 0 }}>
                    <Text
                      fw={700}
                      size="xs"
                      lineClamp={1}
                      style={{ color: isDark ? '#FFF9F0' : '#2A170A' }}
                    >
                      {title}
                    </Text>
                    <Text
                      fw={800}
                      size="xs"
                      style={{ color: isDark ? '#FFE066' : brandTokens.red }}
                    >
                      {addon.price} {t.egp}
                    </Text>
                  </Stack>
                  {isAdded ? (
                    <Group gap={4} align="center" style={{ flexShrink: 0 }}>
                      <ActionIcon
                        size="xs"
                        variant="default"
                        radius="sm"
                        onClick={() => onUpdateQuantity(cartItem.id, -1)}
                        aria-label="Decrease quantity"
                      >
                        <IconMinus size={10} stroke={2.5} />
                      </ActionIcon>
                      <Text
                        size="xs"
                        fw={800}
                        style={{
                          minWidth: 16,
                          textAlign: 'center',
                          color: isDark ? '#FFE066' : brandTokens.red,
                        }}
                      >
                        {count}
                      </Text>
                      <ActionIcon
                        size="xs"
                        variant="default"
                        radius="sm"
                        onClick={() => onUpdateQuantity(cartItem.id, 1)}
                        aria-label="Increase quantity"
                      >
                        <IconPlus size={10} stroke={2.5} />
                      </ActionIcon>
                    </Group>
                  ) : (
                    <Button
                      size="compact-xs"
                      variant="light"
                      color="brand"
                      radius="sm"
                      onClick={() =>
                        onAddItem({
                          dishId: addon.dishId,
                          title,
                          sizeLabel: isArabic ? 'إضافات' : 'Extra',
                          unitPrice: addon.price,
                          quantity: 1,
                          image: addon.image,
                        })
                      }
                      style={{ fontWeight: 700, flexShrink: 0 }}
                    >
                      {t.addAddon}
                    </Button>
                  )}
                </Group>
              </Paper>
            );
          })}
        </SimpleGrid>
      </Stack>
    </Paper>
  );
}
````

## File: src/components/Cart/CartCustomerForm.tsx
````typescript
import React from 'react';
import { IconAlertCircle, IconBuildingStore, IconTruck } from '@tabler/icons-react';
import {
  Group,
  Paper,
  SegmentedControl,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import type { OrderType } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens } from '@/styles/neumorphic';
export interface CustomerFormState {
  name: string;
  phone: string;
  address: string;
  notes: string;
  orderType: OrderType;
}
export interface CustomerFormErrors {
  name?: string;
  phone?: string;
  address?: string;
}
export interface CustomerFormTouched {
  name?: boolean;
  phone?: boolean;
  address?: boolean;
}
export interface CartCustomerFormProps {
  customer: CustomerFormState;
  errors: CustomerFormErrors;
  touched: CustomerFormTouched;
  showValidationAlert: boolean;
  isDark: boolean;
  onFieldChange: (field: keyof CustomerFormState, value: string) => void;
  onOrderTypeChange: (type: OrderType) => void;
  onBlur: (field: 'name' | 'phone' | 'address') => void;
}
export function CartCustomerForm({
  customer,
  errors,
  touched,
  showValidationAlert,
  isDark,
  onFieldChange,
  onOrderTypeChange,
  onBlur,
}: CartCustomerFormProps) {
  const { t } = useLanguage();
  const isDelivery = customer.orderType === 'delivery';
  return (
    <Stack gap="xs">
      {}
      <Stack gap="xs">
        <Text
          size="xs"
          fw={600}
          style={{
            color: isDark ? '#C9A880' : '#7a5235',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {t.orderTypeLabel}
        </Text>
        <SegmentedControl
          fullWidth
          size="sm"
          radius="md"
          value={customer.orderType}
          onChange={(val) => onOrderTypeChange(val as OrderType)}
          data={[
            {
              value: 'delivery',
              label: (
                <Group gap={6} justify="center" wrap="nowrap">
                  <IconTruck size={15} stroke={1.8} />
                  <span>{t.orderTypeDelivery}</span>
                </Group>
              ),
            },
            {
              value: 'takeout',
              label: (
                <Group gap={6} justify="center" wrap="nowrap">
                  <IconBuildingStore size={15} stroke={1.8} />
                  <span>{t.orderTypeTakeout}</span>
                </Group>
              ),
            },
          ]}
        />
        <Paper
          p="xs"
          radius="md"
          style={{
            backgroundColor: isDelivery
              ? isDark
                ? 'rgba(140,28,19,0.18)'
                : '#fff5f3'
              : isDark
                ? 'rgba(34,139,34,0.15)'
                : '#f3fff5',
            border: `1px solid ${isDelivery ? `${brandTokens.red}44` : '#40c05744'}`,
            transition: 'all 200ms ease',
          }}
        >
          <Group gap={6} align="center">
            {isDelivery ? (
              <IconTruck
                size={14}
                stroke={1.8}
                style={{ color: brandTokens.red, flexShrink: 0 }}
              />
            ) : (
              <IconBuildingStore
                size={14}
                stroke={1.8}
                style={{ color: '#2f9e44', flexShrink: 0 }}
              />
            )}
            <Text
              size="xs"
              fw={600}
              style={{ color: isDelivery ? brandTokens.red : '#2f9e44' }}
            >
              {isDelivery ? t.deliveryBadge : t.takeoutBadge}
            </Text>
          </Group>
        </Paper>
      </Stack>
      {}
      <Stack gap="xs" mt="xs">
        <Text
          size="xs"
          fw={700}
          style={{
            color: isDark ? '#FFE066' : brandTokens.red,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {t.deliveryDetails}
        </Text>
        {showValidationAlert && (
          <Paper
            p="xs"
            radius="md"
            style={{
              backgroundColor: isDark ? 'rgba(232, 60, 60, 0.2)' : '#fff5f5',
              border: '1px solid #fa5252',
            }}
          >
            <Group gap={6} align="center">
              <IconAlertCircle
                size={15}
                stroke={2}
                style={{ color: '#e03131', flexShrink: 0 }}
              />
              <Text size="xs" fw={700} c="red">
                {t.validationNotice}
              </Text>
            </Group>
          </Paper>
        )}
        <TextInput
          label={t.nameLabel}
          withAsterisk
          placeholder={t.namePlaceholder}
          size="xs"
          radius="md"
          value={customer.name}
          error={touched.name ? errors.name : undefined}
          onBlur={() => onBlur('name')}
          onChange={(e) => onFieldChange('name', e.target.value)}
        />
        <TextInput
          label={t.phoneLabel}
          withAsterisk
          placeholder={t.phonePlaceholder}
          size="xs"
          radius="md"
          value={customer.phone}
          error={touched.phone ? errors.phone : undefined}
          onBlur={() => onBlur('phone')}
          onChange={(e) => onFieldChange('phone', e.target.value)}
        />
        {isDelivery && (
          <TextInput
            label={t.addressLabel}
            withAsterisk
            placeholder={t.addressPlaceholder}
            size="xs"
            radius="md"
            value={customer.address}
            error={touched.address ? errors.address : undefined}
            onBlur={() => onBlur('address')}
            onChange={(e) => onFieldChange('address', e.target.value)}
          />
        )}
        <Textarea
          placeholder={isDelivery ? t.notesPlaceholder : t.takeoutAddressPlaceholder}
          size="xs"
          radius="md"
          rows={2}
          value={customer.notes}
          onChange={(e) => onFieldChange('notes', e.target.value)}
        />
      </Stack>
    </Stack>
  );
}
````

## File: src/components/Cart/CartDrawer.tsx
````typescript
import React, { useState } from 'react';
import { IconShoppingCart } from '@tabler/icons-react';
import { Badge, Box, Button, Divider, Drawer, Group, Paper, ScrollArea, Stack, Text, useComputedColorScheme } from '@mantine/core';
import { useCart } from '@/context/CartContext';
import type { OrderType, SupplementaryPreferences } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens } from '@/styles/neumorphic';
import {
  normalizeArabicNumerals,
  validateCustomerAddress,
  validateCustomerName,
  validateCustomerPhone,
  validateOrderDetails,
} from '@/utils/orderValidation';
import { CartAddonsShelf } from './CartAddonsShelf';
import { CartCustomerForm, type CustomerFormErrors, type CustomerFormState, type CustomerFormTouched } from './CartCustomerForm';
import { CartEmptyState } from './CartEmptyState';
import { CartFooter } from './CartFooter';
import { CartItemRow } from './CartItemRow';
import { CartPreferencesSection } from './CartPreferencesSection';
export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    totalCount,
    totalPrice,
    checkoutWhatsApp,
    addItem,
  } = useCart();
  const { t, isArabic } = useLanguage();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: false });
  const isDark = computedColorScheme === 'dark';
  const [customer, setCustomer] = useState<CustomerFormState>({
    name: '',
    phone: '',
    address: '',
    notes: '',
    orderType: 'delivery',
  });
  const [preferences, setPreferences] = useState<SupplementaryPreferences>({
    cutlery: true,
    spiceLevel: 'regular',
    servingStyle: 'separate',
  });
  const [errors, setErrors] = useState<CustomerFormErrors>({});
  const [touched, setTouched] = useState<CustomerFormTouched>({});
  const [showValidationAlert, setShowValidationAlert] = useState(false);
  const handleBlur = (field: 'name' | 'phone' | 'address') => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (field === 'name') {
      setErrors((prev) => ({ ...prev, name: validateCustomerName(customer.name, t) }));
    } else if (field === 'phone') {
      setErrors((prev) => ({ ...prev, phone: validateCustomerPhone(customer.phone, t) }));
    } else if (field === 'address') {
      setErrors((prev) => ({
        ...prev,
        address: customer.orderType === 'delivery' ? validateCustomerAddress(customer.address, customer.orderType, t) : undefined,
      }));
    }
  };
  const handleFieldChange = (field: keyof CustomerFormState, rawValue: string) => {
    const value = field === 'phone' ? normalizeArabicNumerals(rawValue) : rawValue;
    setCustomer((prev) => ({ ...prev, [field]: value }));
    if (touched[field as keyof CustomerFormTouched]) {
      if (field === 'name') {
        setErrors((prev) => ({ ...prev, name: validateCustomerName(value, t) }));
      } else if (field === 'phone') {
        setErrors((prev) => ({ ...prev, phone: validateCustomerPhone(value, t) }));
      } else if (field === 'address') {
        setErrors((prev) => ({
          ...prev,
          address: customer.orderType === 'delivery' ? validateCustomerAddress(value, customer.orderType, t) : undefined,
        }));
      }
    }
  };
  const handleOrderTypeChange = (type: OrderType) => {
    setCustomer((prev) => ({ ...prev, orderType: type }));
    if (type === 'takeout') {
      setErrors((prev) => ({ ...prev, address: undefined }));
    } else if (touched.address) {
      setErrors((prev) => ({ ...prev, address: validateCustomerAddress(customer.address, type, t) }));
    }
  };
  const handleCheckout = () => {
    const validation = validateOrderDetails({ ...customer, t });
    if (!validation.isValid) {
      setErrors({
        name: validation.nameError,
        phone: validation.phoneError,
        address: validation.addressError,
      });
      setTouched({ name: true, phone: true, address: customer.orderType === 'delivery' });
      setShowValidationAlert(true);
      return;
    }
    setShowValidationAlert(false);
    checkoutWhatsApp({
      name: customer.name.trim(),
      phone: customer.phone.trim(),
      address: customer.orderType === 'delivery' ? customer.address.trim() : (isArabic ? 'استلام من المطعم' : 'Takeout'),
      notes: customer.notes.trim(),
      orderType: customer.orderType,
      preferences,
    });
  };
  return (
    <Drawer
      opened={isOpen}
      onClose={closeCart}
      position={isArabic ? 'left' : 'right'}
      size="md"
      title={
        <Group gap="xs">
          <Group
            gap={6}
            align="center"
            fw={800}
            style={{ color: brandTokens.red, fontSize: 'var(--mantine-font-size-lg)' }}
          >
            <IconShoppingCart size={20} stroke={1.8} style={{ flexShrink: 0 }} />
            {t.yourOrder}
          </Group>
          {totalCount > 0 && (
            <Badge color="brand" variant="light" size="sm">
              {totalCount} {totalCount === 1 ? t.item : t.items}
            </Badge>
          )}
        </Group>
      }
      styles={{
        content: {
          background: isDark ? '#20150f' : '#fffaf4',
          borderLeft: isDark ? '1px solid rgba(166, 124, 82, 0.3)' : `1px solid ${brandTokens.gold}33`,
          borderRight: isDark ? '1px solid rgba(166, 124, 82, 0.3)' : `1px solid ${brandTokens.gold}33`,
        },
        header: {
          background: isDark ? '#231812' : '#ffffff',
          borderBottom: isDark ? '1px solid rgba(166, 124, 82, 0.3)' : `1px solid ${brandTokens.gold}33`,
          padding: '16px 20px',
        },
        body: {
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100% - 65px)',
        },
      }}
    >
      {items.length === 0 ? (
        <CartEmptyState isDark={isDark} onExplore={closeCart} />
      ) : (
        <Box style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <ScrollArea style={{ flex: 1 }} p="md">
            <Stack gap="xs">
              <Group justify="space-between" align="center">
                <Text
                  size="xs"
                  fw={600}
                  style={{
                    color: isDark ? '#C9A880' : '#7a5235',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {t.orderItems}
                </Text>
                <Button variant="subtle" color="gray" size="compact-xs" onClick={clearCart}>
                  {t.clearAll}
                </Button>
              </Group>
              {}
              {items.map((item) => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  isDark={isDark}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}
              <Divider my="sm" color={`${brandTokens.gold}33`} />
              {}
              <Paper
                p="xs"
                radius="md"
                style={{
                  backgroundColor: isDark ? 'rgba(38, 27, 23, 0.55)' : 'rgba(255, 248, 240, 0.65)',
                  border: isDark ? 'none' : '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: isDark
                    ? '0 0 12px rgba(0,0,0,0.45)'
                    : '0 0 10px rgba(105, 68, 44, 0.16), 0 0 4px rgba(255, 255, 255, 0.9)',
                }}
              >
                <Stack gap="md">
                  <CartAddonsShelf
                    items={items}
                    isDark={isDark}
                    onAddItem={addItem}
                    onUpdateQuantity={updateQuantity}
                  />
                  <Divider my={4} color={`${brandTokens.gold}22`} />
                  <CartPreferencesSection
                    preferences={preferences}
                    isDark={isDark}
                    onChange={(updated) => setPreferences((prev) => ({ ...prev, ...updated }))}
                  />
                </Stack>
              </Paper>
              <Divider my="sm" color={`${brandTokens.gold}33`} />
              {}
              <CartCustomerForm
                customer={customer}
                errors={errors}
                touched={touched}
                showValidationAlert={showValidationAlert}
                isDark={isDark}
                onFieldChange={handleFieldChange}
                onOrderTypeChange={handleOrderTypeChange}
                onBlur={handleBlur}
              />
            </Stack>
          </ScrollArea>
          {}
          <CartFooter
            totalPrice={totalPrice}
            orderType={customer.orderType}
            isDark={isDark}
            onCheckout={handleCheckout}
          />
        </Box>
      )}
    </Drawer>
  );
}
````

## File: src/components/Cart/CartEmptyState.tsx
````typescript
import React from 'react';
import { IconShoppingCartOff } from '@tabler/icons-react';
import { Box, Button, Stack, Text } from '@mantine/core';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens } from '@/styles/neumorphic';
export function CartEmptyState({
  isDark,
  onExplore,
}: {
  isDark: boolean;
  onExplore: () => void;
}) {
  const { t } = useLanguage();
  return (
    <Stack align="center" justify="center" p="xl" style={{ flex: 1 }} gap="md">
      <Box style={{ color: brandTokens.gold, opacity: 0.65 }}>
        <IconShoppingCartOff size={72} stroke={1} />
      </Box>
      <Text fw={700} size="md" style={{ color: isDark ? '#E8D5C0' : '#5a3a28' }}>
        {t.cartEmptyTitle}
      </Text>
      <Text size="xs" ta="center" maw={260} style={{ color: isDark ? '#C9A880' : '#7a5235' }}>
        {t.cartEmptyDesc}
      </Text>
      <Button variant="light" color="brand" size="sm" radius="md" onClick={onExplore} mt="xs">
        {t.exploreMenu}
      </Button>
    </Stack>
  );
}
````

## File: src/components/Cart/CartFooter.tsx
````typescript
import React from 'react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { Box, Button, Group, Text } from '@mantine/core';
import type { OrderType } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens } from '@/styles/neumorphic';
export interface CartFooterProps {
  totalPrice: number;
  orderType: OrderType;
  isDark: boolean;
  onCheckout: () => void;
}
export function CartFooter({ totalPrice, orderType, isDark, onCheckout }: CartFooterProps) {
  const { t } = useLanguage();
  const isDelivery = orderType === 'delivery';
  return (
    <Box
      p="md"
      style={{
        backgroundColor: isDark ? '#231812' : '#fff8f0',
        borderTop: isDark ? '1px solid rgba(166, 124, 82, 0.3)' : `1px solid ${brandTokens.gold}33`,
      }}
    >
      <Group justify="space-between" align="baseline" mb="sm">
        <Text size="sm" style={{ color: isDark ? '#C9A880' : '#7a5235' }}>
          {t.totalAmount}
        </Text>
        <Text
          fw={900}
          size="xl"
          style={{
            color: isDark ? '#FFE066' : brandTokens.red,
          }}
        >
          {totalPrice} {t.egp}
        </Text>
      </Group>
      <Button
        fullWidth
        size="md"
        radius="xl"
        leftSection={<IconBrandWhatsapp size={20} stroke={2} />}
        onClick={onCheckout}
        style={{
          background: isDark
            ? 'green'
            : `radial-gradient(100% 120% at bottom, #26c93eb8 0%, #40590399 75%)`,
          color: '#ffffff',
          border: '1px solid #40c057',
          boxShadow: '0 4px 14px rgba(43, 138, 62, 0.35)',
          fontWeight: 800,
          height: 48,
          transition: 'transform 150ms ease, box-shadow 150ms ease',
        }}
      >
        {t.orderViaWhatsApp} · {isDelivery ? t.orderTypeDelivery : t.orderTypeTakeout} ·
        (01554487523)
      </Button>
      <Text
        size="xs"
        fw={700}
        style={{ color: isDark ? '#E8D5C0' : '#6b4226' }}
        c={isDark ? undefined : 'dimmed'}
        ta="center"
        mt={6}
      >
        {t.whatsAppSubtext}
      </Text>
    </Box>
  );
}
````

## File: src/components/Cart/CartItemRow.tsx
````typescript
import React from 'react';
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Badge, Box, Group, Image, Stack, Text } from '@mantine/core';
import type { CartItem } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens } from '@/styles/neumorphic';
export interface CartItemRowProps {
  item: CartItem;
  isDark: boolean;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}
export function CartItemRow({
  item,
  isDark,
  onUpdateQuantity,
  onRemove,
}: CartItemRowProps) {
  const { t } = useLanguage();
  return (
    <Box
      p="xs"
      style={{
        borderRadius: 8,
        border: isDark ? 'none' : '1px solid rgba(0, 0, 0, 0.06)',
        backgroundColor: isDark ? '#2a1d16' : '#ffffff',
        boxShadow: isDark
          ? '0 0 10px rgba(0,0,0,0.45)'
          : '0 0 8px rgba(77, 50, 32, 0.11), 0 0 4px rgba(255, 255, 255, 0.9)',
      }}
    >
      <Group justify="space-between" wrap="nowrap" gap="sm">
        {}
        <Image
          src={item.image}
          alt={item.title}
          w={52}
          h={52}
          radius="md"
          style={{ objectFit: 'cover', flexShrink: 0 }}
        />
        {}
        <Stack gap={2} style={{ flex: 1, minWidth: 0 }}>
          <Text
            fw={700}
            size="sm"
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {item.title}
          </Text>
          <Group gap={6}>
            <Badge size="xs" variant="light" color="brand">
              {item.sizeLabel === 'Pc' || item.sizeLabel === 'قطعة'
                ? t.piece
                : `${t.size} ${item.sizeLabel}`}
            </Badge>
            <Text size="xs" style={{ color: isDark ? '#C9A880' : '#7a5235' }}>
              {item.unitPrice} {t.egp}
            </Text>
          </Group>
        </Stack>
        {}
        <Stack gap={4} align="flex-end" style={{ flexShrink: 0 }}>
          <Text
            fw={900}
            size="sm"
            style={{
              color: isDark ? '#FFE066' : brandTokens.red,
            }}
          >
            {item.quantity * item.unitPrice} {t.egp}
          </Text>
          <Group gap={4} align="center">
            <ActionIcon
              size="xs"
              variant="default"
              radius="sm"
              onClick={() => onUpdateQuantity(item.id, -1)}
              aria-label="Decrease quantity"
            >
              <IconMinus size={10} stroke={2.5} />
            </ActionIcon>
            <Text size="xs" fw={700} style={{ minWidth: 16, textAlign: 'center' }}>
              {item.quantity}
            </Text>
            <ActionIcon
              size="xs"
              variant="default"
              radius="sm"
              onClick={() => onUpdateQuantity(item.id, 1)}
              aria-label="Increase quantity"
            >
              <IconPlus size={10} stroke={2.5} />
            </ActionIcon>
            <ActionIcon
              size="xs"
              variant="subtle"
              color="red"
              radius="sm"
              ml={4}
              onClick={() => onRemove(item.id)}
              aria-label="Remove item"
            >
              <IconTrash size={14} stroke={1.8} />
            </ActionIcon>
          </Group>
        </Stack>
      </Group>
    </Box>
  );
}
````

## File: src/components/Cart/CartPreferencesSection.tsx
````typescript
import React from 'react';
import { Box, SegmentedControl, Stack, Switch, Text } from '@mantine/core';
import type { SupplementaryPreferences } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
export interface CartPreferencesSectionProps {
  preferences: SupplementaryPreferences;
  isDark: boolean;
  onChange: (updated: Partial<SupplementaryPreferences>) => void;
}
export function CartPreferencesSection({
  preferences,
  isDark,
  onChange,
}: CartPreferencesSectionProps) {
  const { t } = useLanguage();
  return (
    <Stack gap={6}>
      <Text size="xs" fw={700} style={{ color: isDark ? '#D4BFA8' : '#7A5235' }}>
        {t.preferencesTitle}
      </Text>
      {}
      <Box>
        <Text
          size="xs"
          fw={600}
          mb={3}
          style={{ color: isDark ? '#C9A880' : '#8A6340' }}
        >
          {t.spiceLevelLabel}
        </Text>
        <SegmentedControl
          fullWidth
          size="xs"
          radius="sm"
          value={preferences.spiceLevel}
          onChange={(val) =>
            onChange({
              spiceLevel: val as 'regular' | 'extra' | 'mild',
            })
          }
          data={[
            { value: 'mild', label: t.spiceMild },
            { value: 'regular', label: t.spiceRegular },
            { value: 'extra', label: t.spiceExtra },
          ]}
        />
      </Box>
      {}
      <Box>
        <Text
          size="xs"
          fw={600}
          mb={3}
          style={{ color: isDark ? '#C9A880' : '#8A6340' }}
        >
          {t.servingStyleLabel}
        </Text>
        <SegmentedControl
          fullWidth
          size="xs"
          radius="sm"
          value={preferences.servingStyle || 'separate'}
          onChange={(val) =>
            onChange({
              servingStyle: val as 'separate' | 'mixed',
            })
          }
          data={[
            { value: 'separate', label: t.servingSeparate },
            { value: 'mixed', label: t.servingMixed },
          ]}
        />
      </Box>
      {}
      <Switch
        size="xs"
        color="brand"
        checked={preferences.cutlery}
        onChange={(event) =>
          onChange({
            cutlery: event.currentTarget.checked,
          })
        }
        label={
          <Box>
            <Text
              size="xs"
              fw={600}
              style={{ color: isDark ? '#FFF9F0' : '#2A170A' }}
            >
              {t.cutleryLabel}
            </Text>
            <Text size="10px" style={{ color: isDark ? '#A9927D' : '#8C7260' }}>
              {t.cutlerySubtext}
            </Text>
          </Box>
        }
      />
    </Stack>
  );
}
````

## File: src/components/Cart/index.ts
````typescript
export { CartDrawer } from './CartDrawer';
export { CartEmptyState } from './CartEmptyState';
export { CartItemRow } from './CartItemRow';
export { CartAddonsShelf } from './CartAddonsShelf';
export { CartPreferencesSection } from './CartPreferencesSection';
export { CartCustomerForm } from './CartCustomerForm';
export { CartFooter } from './CartFooter';
export { SUPPLEMENTARY_ADDONS, type SupplementaryAddon } from './cartAddons';
````

## File: src/components/DishCard/DishCard.types.ts
````typescript
export type SizeLabel = 'S' | 'M' | 'L';
export interface DishSize {
  label: SizeLabel;
  price: number;
  discountedPrice?: number;
}
export interface PerPieceOption {
  price: number;
  discountedPrice?: number;
}
export interface DishCardProps {
  id?: number;
  title: string;
  title_ar?: string;
  description: string;
  description_ar?: string;
  image: string;
  uploadedDataUrl?: string;
  sale: boolean;
  sizes: DishSize[];
  perPiece?: PerPieceOption;
  category?: string;
  available?: boolean;
}
````

## File: src/components/DishCard/index.ts
````typescript
export { DishCard } from './DishCard';
export { DishListItem } from './DishListItem';
export { DishDetailModal } from './DishDetailModal';
export { PriceTagCapsule } from './PriceTagCapsule';
export { SaleBadge } from './SaleBadge';
export type { SaleBadgeProps, SaleBadgeSize } from './SaleBadge';
export type { DishCardProps, DishSize, PerPieceOption, SizeLabel } from './DishCard.types';
````

## File: src/components/DishCard/PriceTagCapsule.tsx
````typescript
import React from 'react';
import { Box, Group, Text } from '@mantine/core';
import { useLanguage } from '@/context/LanguageContext';
import { getNeumorphicPriceTagStyle } from '@/styles/neumorphic';
export interface PriceTagCapsuleProps {
  isDark: boolean;
  isOnSale: boolean;
  available?: boolean;
  displayPrice: number | string;
  originalPrice?: number | string | null;
  currencySuffix?: string;
  size?: 'sm' | 'md';
}
export function PriceTagCapsule({
  isDark,
  isOnSale,
  available = true,
  displayPrice,
  originalPrice,
  currencySuffix,
  size = 'sm',
}: PriceTagCapsuleProps) {
  const { t } = useLanguage();
  const suffix = currencySuffix ?? t.egp;
  const showCrossedOut = Boolean(
    available && isOnSale && originalPrice != null && originalPrice !== displayPrice
  );
  return (
    <Box style={getNeumorphicPriceTagStyle(isDark, isOnSale, available)}>
      <Group gap={6} align="baseline" wrap="nowrap">
        {showCrossedOut && (
          <Text
            size="xs"
            fw={700}
            style={{
              color: isDark ? 'rgba(255, 255, 255, 0.45)' : 'rgba(140, 28, 19, 0.55)',
              textDecoration: 'line-through',
              lineHeight: 1.1,
              whiteSpace: 'nowrap',
            }}
          >
            {originalPrice} {suffix}
          </Text>
        )}
        <Text
          fw={900}
          size={size}
          style={{
            color: !available
              ? (isDark ? '#888888' : '#777777')
              : isOnSale
                ? (isDark ? '#FF8787' : '#9B2018')
                : (isDark ? '#FFE066' : '#6B1510'),
            lineHeight: 1.1,
            textDecoration: !available ? 'line-through' : undefined,
            whiteSpace: 'nowrap',
            letterSpacing: '0.02em',
          }}
        >
          {displayPrice} {suffix}
        </Text>
      </Group>
    </Box>
  );
}
````

## File: src/components/DishCard/SaleBadge.tsx
````typescript
import React from 'react';
import { Box, useComputedColorScheme } from '@mantine/core';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens, neumorphicTokens } from '@/styles/neumorphic';
export type SaleBadgeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export const SALE_BADGE_SIZES: Record<
  SaleBadgeSize,
  {
    fontSize: number;
    paddingX: number;
    paddingY: number;
    radius: number;
    top: number;
    offset: number;
  }
> = {
  xs: { fontSize: 9, paddingX: 6, paddingY: 2, radius: 6, top: 8, offset: 8 },
  sm: { fontSize: 10, paddingX: 8, paddingY: 3, radius: 8, top: 10, offset: 10 },
  md: { fontSize: 12, paddingX: 12, paddingY: 4, radius: 8, top: 12, offset: 12 },
  lg: { fontSize: 14, paddingX: 16, paddingY: 6, radius: 10, top: 14, offset: 14 },
  xl: { fontSize: 16, paddingX: 20, paddingY: 8, radius: 12, top: 16, offset: 16 },
};
export interface SaleBadgeProps {
  size?: SaleBadgeSize;
  scale?: number;
  absolute?: boolean;
  variant?: 'sale' | 'dark' | 'filled';
  color?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}
export function SaleBadge({
  size = 'sm',
  scale = 1.2,
  absolute = false,
  variant = 'sale',
  color,
  children,
  style,
  className,
}: SaleBadgeProps) {
  const { t, direction } = useLanguage();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: false });
  const isDark = computedColorScheme === 'dark';
  const isDarkVariant = variant === 'dark' || color === 'dark';
  const base = SALE_BADGE_SIZES[size] || SALE_BADGE_SIZES.sm;
  const multiplier = typeof scale === 'number' && scale > 0 ? scale : 1;
  const fontSize = Math.round(base.fontSize * multiplier);
  const px = Math.round(base.paddingX * multiplier);
  const py = Math.max(2, Math.round(base.paddingY * multiplier));
  const radius = Math.round(base.radius * multiplier);
  const top = Math.round(base.top * multiplier);
  const offset = Math.round(base.offset * multiplier);
  return (
    <Box
      px={px}
      py={py}
      pos={absolute ? 'absolute' : undefined}
      top={absolute ? top : undefined}
      className={className}
      style={{
        [direction === 'rtl' ? 'left' : 'right']: absolute ? offset : undefined,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: absolute ? 5 : 1,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        borderRadius: radius,
        fontSize,
        fontWeight: 800,
        userSelect: 'none',
        lineHeight: 1.2,
        transition: 'transform 150ms ease, box-shadow 150ms ease',
        ...(isDarkVariant
          ? {
              backgroundColor: '#261b17',
              color: '#FDF2F0',
              border: 'none',
              boxShadow: neumorphicTokens.shadows.badge.dark[isDark ? 'dark' : 'light'],
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }
          : {
              background: `radial-gradient(100% 80% at bottom, #e03131 0%, ${brandTokens.red} 75%)`,
              color: '#FFFFFF',
              border: isDark ? 'none' : '1px solid rgba(255, 255, 255, 0.35)',
              boxShadow: neumorphicTokens.shadows.badge.sale[isDark ? 'dark' : 'light'],
              letterSpacing: '0.04em',
            }),
        ...style,
      }}
    >
      {children ?? t.sale}
    </Box>
  );
}
````

## File: src/components/RequireAdminAuth.tsx
````typescript
import React from 'react';
import { Navigate } from 'react-router-dom';
export function RequireAdminAuth({ children }: { children: React.ReactNode }) {
  const isAuth = typeof window !== 'undefined' && sessionStorage.getItem('mama_admin_session') === '1';
  if (!isAuth) {
    return <Navigate to="/admin-login" replace />;
  }
  return <>{children}</>;
}
````

## File: src/components/TopBar/index.ts
````typescript
export { TopBar } from './TopBar';
export { AdminTopBar } from './AdminTopBar';
````

## File: src/components/TopBar/TopBar.tsx
````typescript
import {
  ActionIcon,
  Button,
  Group,
  Indicator,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoon, IconShoppingCart, IconSun, IconToolsKitchen2 } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens } from '@/theme';
import { getNeumorphicControlStyle } from '@/styles/neumorphic';
export function TopBar() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: false });
  const { totalCount, openCart } = useCart();
  const { t, isArabic, toggleLanguage } = useLanguage();
  const navigate = useNavigate();
  const isDark = computedColorScheme === 'dark';
  const handleToggleTheme = () => {
    const nextScheme = isDark ? 'light' : 'dark';
    setColorScheme(nextScheme);
    document.documentElement.setAttribute('data-mantine-color-scheme', nextScheme);
    try {
      localStorage.setItem('mantine-color-scheme-value', nextScheme);
      localStorage.setItem('mama-kitchen-color-scheme', nextScheme);
    } catch {
    }
  };
  return (
    <Group
      h="100%"
      px="md"
      justify="space-between"
      wrap="nowrap"
    >
      <Group gap="sm">
        <Group
          gap={6}
          align="center"
          fw={800}
          style={{ color: brandTokens.red, cursor: 'pointer', fontSize: 'var(--mantine-font-size-lg)', fontWeight: 800 }}
          onClick={() => navigate('/')}
        >
          <IconToolsKitchen2 size={18} stroke={1.8} style={{ color: brandTokens.red, flexShrink: 0 }} />
          {t.brandName}
        </Group>
      </Group>
      {}
      {}
      <Group gap="xs">
        {}
        {}
        <Button
          variant="default"
          size="compact-sm"
          radius="md"
          onClick={toggleLanguage}
          style={{
            ...getNeumorphicControlStyle(isDark),
            fontWeight: 800,
            fontSize: 12,
            minWidth: 46,
            height: 34,
          }}
          aria-label="Switch language / تغيير اللغة"
        >
          {isArabic ? 'EN' : 'عربي'}
        </Button>
        {}
        {}
        <Indicator
          label={totalCount}
          disabled={totalCount === 0}
          size={16}
          offset={4}
          withBorder
          styles={{
            indicator: {
              background: `radial-gradient(100% 80% at bottom, #e03131 0%, ${brandTokens.red} 75%)`,
              border: isDark ? 'none' : '1px solid rgba(255, 255, 255, 0.6)',
              fontWeight: 800,
            },
          }}
        >
          <ActionIcon
            variant="default"
            size="lg"
            radius="md"
            onClick={openCart}
            style={getNeumorphicControlStyle(isDark)}
            aria-label={t.yourOrder}
          >
            <IconShoppingCart size={20} stroke={1.8} />
          </ActionIcon>
        </Indicator>
        {}
        {}
        <ActionIcon
          variant="default"
          size="lg"
          radius="md"
          onClick={handleToggleTheme}
          style={getNeumorphicControlStyle(isDark)}
          aria-label={t.toggleTheme}
          title={isDark ? (isArabic ? 'التبديل إلى الوضع النهاري' : 'Switch to light mode') : (isArabic ? 'التبديل إلى الوضع الليلي' : 'Switch to dark mode')}
        >
          {isDark ? <IconSun size={20} stroke={1.8} /> : <IconMoon size={20} stroke={1.8} />}
        </ActionIcon>
      </Group>
    </Group>
  );
}
````

## File: src/context/MenuContext.test.tsx
````typescript
import { describe, it, expect } from 'vitest';
import { compileDishesToJson, generateSecureDishId, type DishItem } from '@/context/MenuContext';
import initialDishes from '@/data/dishes.json';
describe('compileDishesToJson', () => {
  it('compiles initial dishes into valid server-compatible JSON', () => {
    const jsonStr = compileDishesToJson(initialDishes as unknown as DishItem[]);
    const parsed = JSON.parse(jsonStr);
    expect(Array.isArray(parsed)).toBe(true);
    expect(parsed.length).toBe(initialDishes.length);
    const first = parsed[0];
    expect(first.id).toBe(1);
    expect(first.title).toBe('Agashi Sandwich');
    expect(first.title_ar).toBe('سندوتش الأقاشي');
    expect(first.image).toBe('agashi');
    expect(first.category).toBe('main');
    expect(first.sale).toBe(true);
    expect(Array.isArray(first.sizes)).toBe(true);
    expect(first.sizes[0].price).toBe(75);
    expect(first.sizes[0].discountedPrice).toBe(55);
  });
  it('correctly handles perPiece and unavailable flag', () => {
    const mockDish: DishItem = {
      id: 99,
      title: 'Test Dish',
      description: 'Test description',
      category: 'main',
      image: 'maincourse',
      sale: false,
      available: false,
      sizes: [{ label: 'S', price: 100 }],
      perPiece: { price: 25 },
    };
    const jsonStr = compileDishesToJson([mockDish]);
    const parsed = JSON.parse(jsonStr);
    expect(parsed[0].available).toBe(false);
    expect(parsed[0].perPiece.price).toBe(25);
  });
  it('compiles image property matching product ID when an image is uploaded', () => {
    const secureId = 84920194;
    const uploadedDish: DishItem = {
      id: secureId,
      title: 'Special Kabab',
      description: 'Charcoal grilled Sudanese kabab',
      category: 'main',
      image: `${secureId}.png`,
      uploadedDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
      sale: false,
      sizes: [{ label: 'M', price: 250 }],
    };
    const jsonStr = compileDishesToJson([uploadedDish]);
    const parsed = JSON.parse(jsonStr);
    expect(parsed[0].id).toBe(secureId);
    expect(parsed[0].image).toBe(`${secureId}.png`);
    expect(parsed[0].uploadedDataUrl).toBeUndefined();
  });
});
describe('generateSecureDishId', () => {
  it('generates an 8-digit positive integer and avoids collision with existing IDs', () => {
    const existing = [10000001, 10000002];
    const generated = generateSecureDishId(existing);
    expect(Number.isInteger(generated)).toBe(true);
    expect(generated).toBeGreaterThanOrEqual(10000000);
    expect(generated).toBeLessThanOrEqual(99999999);
    expect(existing.includes(generated)).toBe(false);
  });
  it('generates multiple unique cryptographically secure random IDs', () => {
    const ids = new Set<number>();
    for (let i = 0; i < 50; i++) {
      const id = generateSecureDishId(Array.from(ids));
      expect(ids.has(id)).toBe(false);
      ids.add(id);
    }
    expect(ids.size).toBe(50);
  });
});
````

## File: src/data/dishes.json
````json
[
  {
    "id": 1,
    "title": "Agashi Sandwich",
    "title_ar": "سندوتش الأقاشي",
    "description": "Crispy Agashi chicken fillet in a sub roll, served with lemon, sauce, powder, and onion.",
    "description_ar": "سندوتش أقاشي الدجاج المقرمش في خبز فينو، يُقدم مع ليمون وشطة وبودرة وبصل.",
    "image": "agashi",
    "category": "main",
    "sale": true,
    "sizes": [
      { "label": "S", "price": 75, "discountedPrice": 55 }
    ]
  },
  {
    "id": 2,
    "title": "Macaroni Béchamel",
    "title_ar": "مكرونة بالبشاميل",
    "description": "Oven-baked pasta layered with rich béchamel sauce, a comforting Sudanese home classic.",
    "description_ar": "مكرونة فرن غنية بطبقات البشاميل الكريمي واللحم المفروم على الطريقة السودانية.",
    "image": "maincourse",
    "category": "main",
    "sale": false,
    "available": false,
    "sizes": [
      { "label": "S", "price": 180 },
      { "label": "L", "price": 400 }
    ]
  },
  {
    "id": 3,
    "title": "Potato Tray with Chicken",
    "title_ar": "صينية بطاطس بالفراخ",
    "description": "Oven-roasted potato tray with spiced chicken pieces, slow-baked to golden perfection.",
    "description_ar": "صينية بطاطس في الفرن مع قطع الفراخ المتبلة ومخبوزة لدرجة الاستواء الذهبي.",
    "image": "maincourse",
    "category": "main",
    "sale": false,
    "sizes": [
      { "label": "S", "price": 280 },
      { "label": "M", "price": 350 },
      { "label": "L", "price": 550 }
    ]
  },
  {
    "id": 4,
    "title": "Agashi",
    "title_ar": "أقاشي دجاج",
    "description": "A Sudanese delicacy — spiced marinated chicken with aromatic herbs, roasted to perfection.",
    "description_ar": "أقاشي سوداني أصيل متبل بالبهارات والخلطة الخاصة ومشوي بعناية.",
    "image": "agashi",
    "category": "main",
    "sale": false,
    "sizes": [
      { "label": "S", "price": 180 },
      { "label": "M", "price": 240 },
      { "label": "L", "price": 320 }
    ]
  },
  {
    "id": 5,
    "title": "Mahshi (10/6/4)",
    "title_ar": "محشي (10/6/4)",
    "description": "Stuffed vegetables filled with spiced rice and herbs, slow-cooked in a tomato broth. Available in portions (4/6/10 pcs) or per piece.",
    "description_ar": "تشكيلة خضار محشية بالأرز والخلطة السرية مطبوخة في مرق الطماطم. متاح أطباق (4 / 6 / 10 قطع) أو بالقطعة.",
    "image": "maincourse",
    "category": "main",
    "sale": false,
    "sizes": [
      { "label": "S", "price": 140 },
      { "label": "M", "price": 170 },
      { "label": "L", "price": 200 }
    ],
    "perPiece": {
      "price": 35
    }
  },
  {
    "id": 6,
    "title": "Kofta (10/6/4)",
    "title_ar": "كفتة (10/6/4)",
    "description": "Handmade spiced meat patties grilled over flame, served with fresh sides. Available in portions (4/6/10 pcs) or per piece.",
    "description_ar": "كفتة لحم متبلة مشوية على اللهب بأيدي أمهاتنا. متاح أطباق (4 / 6 / 10 قطع) أو بالقطعة.",
    "image": "maincourse",
    "category": "main",
    "sale": false,
    "sizes": [
      { "label": "S", "price": 145 },
      { "label": "M", "price": 175 },
      { "label": "L", "price": 210 }
    ],
    "perPiece": {
      "price": 38
    }
  },
  {
    "id": 7,
    "title": "Khodhira Stew",
    "title_ar": "طبيخ خضرة",
    "description": "Classic Sudanese green vegetable stew slow-simmered with spices and ghee.",
    "description_ar": "طبيخ خضرة سوداني مسبك بالسمن والتوابل الشرقية الأصيلة.",
    "image": "maincourse",
    "category": "stew",
    "sale": false,
    "sizes": [
      { "label": "S", "price": 120 },
      { "label": "M", "price": 220 },
      { "label": "L", "price": 350 }
    ]
  },
  {
    "id": 8,
    "title": "Okra Stew (Tabeekh / Mafrouka)",
    "title_ar": "بامية طبيخ / مفروكة",
    "description": "Tender okra in a rich meat broth, available either whole or traditional mafrouka.",
    "description_ar": "بامية طازجة في مرق اللحم الغني، متوفرة طبيخ أو مفروكة سودانية حسب الطلب.",
    "image": "maincourse",
    "category": "stew",
    "sale": false,
    "sizes": [
      { "label": "S", "price": 120 },
      { "label": "M", "price": 220 },
      { "label": "L", "price": 350 }
    ]
  },
  {
    "id": 9,
    "title": "Squash Stew",
    "title_ar": "طبيخ قرع",
    "description": "Sweet golden squash cooked down into a warming stew with aromatic spices.",
    "description_ar": "طبيخ قرع عسلي مسبك بنكهة حلوة ومتبلة ومطبوخة بعناية.",
    "image": "maincourse",
    "category": "stew",
    "sale": false,
    "sizes": [
      { "label": "S", "price": 120 },
      { "label": "M", "price": 220 },
      { "label": "L", "price": 350 }
    ]
  },
  {
    "id": 10,
    "title": "Bean Stew",
    "title_ar": "طبيخ فاصوليا",
    "description": "Hearty slow-cooked white beans in a rich tomato sauce, a staple of Sudanese family tables.",
    "description_ar": "طبيخ فاصوليا بيضاء مطبوخة في صلصة الطماطم المتبلة الغنية.",
    "image": "maincourse",
    "category": "stew",
    "sale": false,
    "available": false,
    "sizes": [
      { "label": "S", "price": 120 },
      { "label": "M", "price": 220 },
      { "label": "L", "price": 350 }
    ]
  },
  {
    "id": 11,
    "title": "Um Raqiqa Stew",
    "title_ar": "أم رقيقة",
    "description": "A delicate traditional Sudanese stew prepared with minced meat, onions, and dry okra broth.",
    "description_ar": "ملاح أم رقيقة السوداني التقليدي باللحم المفروم والويكة والبهارات المميزة.",
    "image": "maincourse",
    "category": "stew",
    "sale": false,
    "sizes": [
      { "label": "S", "price": 130 },
      { "label": "M", "price": 240 },
      { "label": "L", "price": 380 }
    ]
  },
  {
    "id": 12,
    "title": "Naimiya Stew",
    "title_ar": "ملاح نعيمية",
    "description": "Classic Sudanese festive red stew with yogurt, onions, and minced meat sauce.",
    "description_ar": "ملاح نعيمية بلدي بالزبادي وصلصة اللحم المسبكة، رفيق الكسرة والقراصة الأول.",
    "image": "maincourse",
    "category": "stew",
    "sale": false,
    "sizes": [
      { "label": "S", "price": 140 },
      { "label": "M", "price": 260 },
      { "label": "L", "price": 390 }
    ]
  },
  {
    "id": 13,
    "title": "Taqliya Stew",
    "title_ar": "ملاح تقلية",
    "description": "A rich fried onion and dry okra stew with minced meat — bold, smoky, and comforting.",
    "description_ar": "ملاح تقلية سودانية باللحم المفروم والبصل المحمر والويكة، طعم لا يُنسى.",
    "image": "maincourse",
    "category": "stew",
    "sale": false,
    "sizes": [
      { "label": "S", "price": 150 },
      { "label": "M", "price": 280 },
      { "label": "L", "price": 400 }
    ]
  },
  {
    "id": 14,
    "title": "Qarasa Dama",
    "title_ar": "قراصة دمعة",
    "description": "Fresh fluffy Qarasa flatbread drenched in a luscious Sudanese meat and onion dama stew.",
    "description_ar": "قراصة سودانية طرية مغطاة بدمعة اللحم والبصل المسبكة والمتبلة.",
    "image": "maincourse",
    "category": "stew",
    "sale": false,
    "sizes": [
      { "label": "S", "price": 160 },
      { "label": "M", "price": 300 },
      { "label": "L", "price": 450 }
    ]
  },
  {
    "id": 15,
    "title": "Black Salad (Eggplant)",
    "title_ar": "سلطة اسود",
    "description": "Smoky Sudanese mashed eggplant salad dressed with peanut paste, lemon, and garlic.",
    "description_ar": "سلطة باذنجان أسود مشوي ومهروس مع الدكوة (زبدة الفول السوداني) والليمون والثوم.",
    "image": "maincourse",
    "category": "salad",
    "sale": false,
    "sizes": [
      { "label": "S", "price": 55 },
      { "label": "L", "price": 150 }
    ]
  },
  {
    "id": 16,
    "title": "Carrot Salad",
    "title_ar": "سلطة جزر",
    "description": "Finely grated fresh carrots tossed with tangy lemon, cumin, and seasoned dressing.",
    "description_ar": "سلطة جزر مبشور طازج متبلة بالليمون والكمون وزيت الزيتون.",
    "image": "maincourse",
    "category": "salad",
    "sale": false,
    "sizes": [
      { "label": "S", "price": 55 },
      { "label": "L", "price": 150 }
    ]
  },
  {
    "id": 17,
    "title": "Fried Salad (Maqali)",
    "title_ar": "سلطة مقالي",
    "description": "Crispy fried eggplant and potato bites tossed in a special tangy and herb sauce.",
    "description_ar": "سلطة مقالي مشكلة من الباذنجان والبطاطس المقرمشة مع تتبيلة خاصة وليمون.",
    "image": "maincourse",
    "category": "salad",
    "sale": false,
    "sizes": [
      { "label": "S", "price": 60 },
      { "label": "L", "price": 180 }
    ]
  },
  {
    "id": 18,
    "title": "White Salad (Yogurt)",
    "title_ar": "سلطة بيضاء",
    "description": "Refreshing creamy yogurt salad with crisp cucumber and fresh mint.",
    "description_ar": "سلطة زبادي بيضاء منعشة مع الخيار المفروم والنعناع والتوابل الهادئة.",
    "image": "maincourse",
    "category": "salad",
    "sale": false,
    "sizes": [
      { "label": "S", "price": 60 },
      { "label": "L", "price": 180 }
    ]
  }
]
````

## File: src/locales/ar.ts
````typescript
import type { TranslationDictionary } from './types';
export const ar: TranslationDictionary = {
  brandName: 'مطبخ مامي',
  subtitle: 'المأكولات السودانية الأصيلة',
  todaysMenu: 'قائمة اليوم',
  gridView: 'عرض البطاقات',
  listView: 'عرض القائمة',
  sale: 'عرض خاص',
  unavailable: 'غير متوفر',
  addToOrder: '+ أضف للطلب',
  addedToOrder: 'تمت الإضافة',
  quantity: 'الكمية',
  perPiece: 'للقطعة',
  perPieceLabel: 'بالقطعة',
  piece: 'قطعة',
  pc: 'قطعة',
  size: 'حجم',
  egp: 'ج.م',
  from: 'من',
  orderItems: 'أصناف الطلب',
  yourOrder: 'سلة الطلب',
  cartEmptyTitle: 'سلتك فارغة',
  cartEmptyDesc: 'اختر الوجبات المفضلة من القائمة واضغط "أضف للطلب" للبدء.',
  exploreMenu: 'تصفح القائمة',
  clearAll: 'مسح الكل',
  item: 'صنف',
  items: 'أصناف',
  deliveryDetails: 'بيانات الطلب والتواصل',
  nameLabel: 'الاسم بالكامل',
  phoneLabel: 'رقم الهاتف للتواصل',
  addressLabel: 'عنوان التوصيل',
  nameErrorEmpty: 'يرجى إدخال الاسم بالكامل',
  nameErrorInvalid: 'الاسم يجب أن يحتوي على أحرف فقط (حرفين على الأقل بدون أرقام أو رموز)',
  phoneErrorEmpty: 'يرجى إدخال رقم الهاتف للتواصل',
  phoneErrorInvalid: 'يرجى إدخال رقم هاتف محمول صحيح (مثال: 010xxxxxxxx أو 015xxxxxxxx)',
  addressErrorEmpty: 'يرجى إدخال عنوان التوصيل بالتفصيل',
  addressErrorInvalid: 'يرجى إدخال عنوان واضح مع اسم الشارع والمنطقة (6 أحرف على الأقل)',
  validationNotice: 'يرجى استكمال وتصحيح الحقول المحددة قبل إرسال الطلب.',
  orderTypeLabel: 'كيف تريد استلام طلبك؟',
  orderTypeDelivery: 'توصيل',
  orderTypeTakeout: 'استلام',
  deliveryBadge: 'توصيل للمنزل',
  takeoutBadge: 'استلام من المطعم',
  namePlaceholder: 'الاسم بالكامل',
  phonePlaceholder: 'رقم الهاتف للتواصل',
  addressPlaceholder: 'العنوان بالتفصيل (الشارع / المنطقة / المعلم)',
  takeoutAddressPlaceholder: 'أي ملاحظات إضافية؟',
  notesPlaceholder: 'أي ملاحظات إضافية أو طلبات خاصة بالتحضير...',
  supplementaryOptions: 'خيارات ومكملات الطلب',
  quickAddons: 'مخبوزات، مقبلات وشطة',
  preferencesTitle: 'تفضيلات تجهيز الوجبة',
  cutleryLabel: 'إضافة أدوات مائدة ومناديل',
  cutlerySubtext: 'وفر البلاستيك لحماية البيئة عند عدم الحاجة',
  spiceLevelLabel: 'مستوى الشطة السودانية',
  spiceRegular: 'عادية',
  spiceExtra: 'حارة زيادة 🔥',
  spiceMild: 'بدون شطة / بارد',
  servingStyleLabel: 'طريقة التعبئة والتقديم',
  servingSeparate: 'الملاح في علبة منفصلة',
  servingMixed: 'الملاح مفرود فوق الكسرة / القراصة',
  addAddon: '+ إضافة',
  addedAddon: 'تمت الإضافة',
  totalAmount: 'إجمالي الطلب:',
  orderViaWhatsApp: 'إرسال الطلب عبر واتساب',
  whatsAppSubtext: 'سيتم فتح واتساب برسالة منظمة بطلبك للتأكيد فوراً',
  viewOrder: 'عرض السلة',
  langToggle: 'English',
  toggleTheme: 'تبديل المظهر',
  dashboard: 'لوحة التحكم',
  menu: 'قائمة الطعام',
  ownerDashboard: 'لوحة تحكم المالك',
  overview: 'نظرة عامة',
  liveOrders: 'الطلبات الحالية',
  menuStock: 'المخزون والوجبات',
  kitchenPrep: 'تجهيزات المطبخ',
  analytics: 'التقارير والإحصائيات',
  todayRevenue: 'مبيعات اليوم',
  activeOrders: 'طلبات نشطة',
  soldPortions: 'وجبات تم بيعها',
  whatsappOrders: 'طلبات الواتساب',
  orderStatus: 'حالة الطلب',
  statusPending: 'قيد الانتظار',
  statusPreparing: 'جاري التحضير',
  statusDelivery: 'في التوصيل',
  statusDelivered: 'تم التوصيل',
  customer: 'العميل',
  phone: 'رقم الهاتف',
  address: 'العنوان',
  details: 'تفاصيل الطلب',
  total: 'الإجمالي',
  actions: 'إجراءات',
  advanceStatus: 'المرحلة التالية',
  chatCustomer: 'محادثة واتساب',
  inStock: 'متوفر للطلب',
  outOfStock: 'غير متوفر (نفذ)',
  batchTracker: 'متابعة قدور الملاحات اليومية',
  breadTracker: 'تجهيز الكسرة والقراصة',
  topDishes: 'الوجبات الأكثر طلباً',
  menuEditor: 'إدارة وتعديل قائمة الطعام',
  menuEditorSubtitle: 'تحكم بالأسعار، الأحجام، التوفر والعروض. مع إمكانية تصدير كود JSON المتوافق مع السيرفر.',
  addNewDish: 'إضافة طبق جديد',
  editDish: 'تعديل الطبق',
  deleteDish: 'حذف',
  duplicateDish: 'تكرار الطبق',
  compiledJson: 'كود JSON المتوافق مع السيرفر (dishes.json)',
  copyJson: 'نسخ كود JSON',
  copied: 'تم النسخ إلى الحافظة!',
  downloadJson: 'تحميل ملف dishes.json',
  resetMenuConfirm: 'هل تريد إعادة تعيين القائمة إلى وضعها الأصلي؟',
  resetToDefault: 'إعادة ضبط للافتراضي',
  searchDishes: 'بحث عن وجبة بالاسم...',
  allCategories: 'كل الأقسام',
  mains: 'وجبات رئيسية',
  stews: 'ملاحات',
  salads: 'سلطات',
  sides: 'مخبوزات وإضافات',
  titleEn: 'اسم الطبق بالإنجليزية',
  titleAr: 'اسم الطبق بالعربية',
  descEn: 'الوصف بالإنجليزية',
  descAr: 'الوصف بالعربية',
  categoryLabel: 'القسم',
  imageKey: 'الصورة',
  sizesConfig: 'الأحجام والأسعار المتوفرة',
  perPieceConfig: 'خيار البيع بالقطعة',
  enablePerPiece: 'تفعيل خيار البيع بالقطعة لهذا الصنف',
  basePrice: 'السعر الأساسي',
  discountPrice: 'سعر العرض / الخصم (اختياري)',
  saveChanges: 'حفظ التعديلات',
  cancel: 'إلغاء',
  totalDishes: 'إجمالي الأصناف',
  onSaleCount: 'في العرض',
  outOfStockCount: 'غير متوفر',
  jsonPreview: 'معاينة كود JSON المباشر',
  hideJson: 'إخفاء كود JSON',
  showJson: 'عرض كود JSON',
  discountPriceError: 'سعر العرض يجب أن يكون أقل من السعر الأصلي',
  maxSalePriceHelp: 'يجب أن يكون أقل من السعر الأصلي',
  viewStorefront: 'زيارة المتجر ↗',
  adminPanel: 'لوحة الإدارة',
  adminBadge: 'لوحة الإدارة',
  productId: 'معرّف المنتج (ID)',
  generateSecureId: 'توليد معرّف آمن',
  secureIdHelp: 'معرّف عشوائي آمن مشفّر بواسطة Web Crypto API',
  uploadImage: 'رفع صورة',
  changeImage: 'تغيير الصورة',
  removeImage: 'إزالة الصورة',
  downloadImage: 'تحميل ملف الصورة',
  imageSource: 'نوع الصورة',
  customUpload: 'رفع صورة مخصصة',
  presetImage: 'صورة جاهزة من النظام',
  pictureIdLabel: 'معرّف الصورة (مطابق لمعرّف المنتج في JSON)',
  pictureIdHelp: 'يتم تسمية ملف الصورة بنفس معرّف المنتج تماماً لملف dishes.json',
};
````

## File: src/locales/en.ts
````typescript
import type { TranslationDictionary } from './types';
export const en: TranslationDictionary = {
  brandName: 'Mama Kitchen',
  subtitle: 'Traditional Sudanese Cuisine',
  todaysMenu: "Today's Menu",
  gridView: 'Grid view',
  listView: 'List view',
  sale: 'Special Offer',
  unavailable: 'Unavailable',
  addToOrder: '+ Add to Order',
  addedToOrder: 'Added to Order',
  quantity: 'Quantity',
  perPiece: 'per piece',
  perPieceLabel: 'Per Piece',
  piece: 'Piece',
  pc: 'Pc',
  size: 'Size',
  egp: 'EGP',
  from: 'from',
  orderItems: 'Order Items',
  yourOrder: 'Your Order',
  cartEmptyTitle: 'Your cart is empty',
  cartEmptyDesc: 'Choose dishes from the menu and click "Add" to start building your order.',
  exploreMenu: 'Explore Menu',
  clearAll: 'Clear all',
  item: 'item',
  items: 'items',
  deliveryDetails: 'Order & Customer Details',
  nameLabel: 'Full Name',
  phoneLabel: 'Phone Number',
  addressLabel: 'Delivery Address',
  nameErrorEmpty: 'Please enter your full name',
  nameErrorInvalid: 'Name must contain letters only (minimum 2 characters)',
  phoneErrorEmpty: 'Please enter your mobile phone number',
  phoneErrorInvalid: 'Please enter a valid mobile number (e.g. 010xxxxxxxx, 015xxxxxxxx)',
  addressErrorEmpty: 'Please enter your delivery address',
  addressErrorInvalid: 'Please enter a complete address with street/area details (minimum 6 characters)',
  validationNotice: 'Please correct the highlighted fields before ordering.',
  orderTypeLabel: 'How would you like your order?',
  orderTypeDelivery: 'Delivery',
  orderTypeTakeout: 'Takeout',
  deliveryBadge: 'Home Delivery',
  takeoutBadge: 'Takeout from Restaurant',
  namePlaceholder: 'Your Name (الاسم)',
  phonePlaceholder: 'Phone Number (رقم الهاتف)',
  addressPlaceholder: 'Delivery Address (العنوان - الشارع / المنطقة)',
  takeoutAddressPlaceholder: 'Any additional notes for pickup?',
  notesPlaceholder: 'Additional notes or special preparation requests...',
  supplementaryOptions: 'Supplementary Options & Add-ons',
  quickAddons: 'Bread, Sides & Sauces',
  preferencesTitle: 'Order Preferences',
  cutleryLabel: 'Include plastic cutlery & napkins',
  cutlerySubtext: 'Save plastic for the environment if not needed',
  spiceLevelLabel: 'Sudanese Shatta / Spice Level',
  spiceRegular: 'Regular',
  spiceExtra: 'Extra Hot 🔥',
  spiceMild: 'Mild / No Spice',
  servingStyleLabel: 'Packaging / Serving Style',
  servingSeparate: 'Stew in separate container',
  servingMixed: 'Stew over Kisra / Qarasa',
  addAddon: '+ Add',
  addedAddon: 'Added',
  totalAmount: 'Total Amount:',
  orderViaWhatsApp: 'Order via WhatsApp',
  whatsAppSubtext: 'Opens WhatsApp with your compiled order ready to send',
  viewOrder: 'View Order',
  langToggle: 'عربي',
  toggleTheme: 'Toggle color scheme',
  dashboard: 'Dashboard',
  menu: 'Menu',
  ownerDashboard: 'Owner Dashboard',
  overview: 'Overview',
  liveOrders: 'Live Orders',
  menuStock: 'Menu & Stock',
  kitchenPrep: 'Kitchen Prep',
  analytics: 'Analytics',
  todayRevenue: "Today's Revenue",
  activeOrders: 'Active Orders',
  soldPortions: 'Portions Sold',
  whatsappOrders: 'WhatsApp Orders',
  orderStatus: 'Status',
  statusPending: 'Pending',
  statusPreparing: 'Preparing',
  statusDelivery: 'In Delivery',
  statusDelivered: 'Delivered',
  customer: 'Customer',
  phone: 'Phone',
  address: 'Address',
  details: 'Details',
  total: 'Total',
  actions: 'Actions',
  advanceStatus: 'Next Status',
  chatCustomer: 'WhatsApp',
  inStock: 'Available',
  outOfStock: 'Sold Out',
  batchTracker: 'Daily Batch Tracker',
  breadTracker: 'Bread & Kisra Production',
  topDishes: 'Top Selling Dishes',
  menuEditor: 'Menu Editor & Compiler',
  menuEditorSubtitle: 'Easily edit, add, or toggle dishes. Live compiles into exact server dishes.json format.',
  addNewDish: 'Add New Dish',
  editDish: 'Edit Dish',
  deleteDish: 'Delete',
  duplicateDish: 'Duplicate',
  compiledJson: 'Compiled Server JSON (dishes.json)',
  copyJson: 'Copy JSON',
  copied: 'Copied to clipboard!',
  downloadJson: 'Download dishes.json',
  resetMenuConfirm: 'Reset to default menu?',
  resetToDefault: 'Reset to Default',
  searchDishes: 'Search dishes by name...',
  allCategories: 'All Categories',
  mains: 'Main Dishes',
  stews: 'Stews (Mullah)',
  salads: 'Salads',
  sides: 'Sides & Bread',
  titleEn: 'English Title',
  titleAr: 'Arabic Title',
  descEn: 'English Description',
  descAr: 'Arabic Description',
  categoryLabel: 'Category',
  imageKey: 'Image',
  sizesConfig: 'Available Sizes & Prices',
  perPieceConfig: 'Per-Piece Option',
  enablePerPiece: 'Enable Per-Piece option',
  basePrice: 'Base Price',
  discountPrice: 'Sale / Discount Price (Optional)',
  saveChanges: 'Save Changes',
  cancel: 'Cancel',
  totalDishes: 'Total Dishes',
  onSaleCount: 'On Sale',
  outOfStockCount: 'Out of Stock',
  jsonPreview: 'Live JSON Preview',
  hideJson: 'Hide JSON',
  showJson: 'Show JSON',
  discountPriceError: 'Sale price must be strictly lower than the original price',
  maxSalePriceHelp: 'Must be lower than base price',
  viewStorefront: 'View Storefront ↗',
  adminPanel: 'Admin Panel',
  adminBadge: 'Admin',
  productId: 'Product ID',
  generateSecureId: 'Generate Secure ID',
  secureIdHelp: 'Cryptographically secure random ID (Web Crypto API)',
  uploadImage: 'Upload Image',
  changeImage: 'Change Image',
  removeImage: 'Remove Image',
  downloadImage: 'Download Image File',
  imageSource: 'Image Source',
  customUpload: 'Upload Custom Photo',
  presetImage: 'Preset Menu Image',
  pictureIdLabel: 'Picture ID (matches Product ID in JSON)',
  pictureIdHelp: 'The image filename is assigned the exact product ID for server dishes.json',
};
````

## File: src/locales/index.ts
````typescript
import { ar } from './ar';
import { en } from './en';
import type { Language, TranslationDictionary } from './types';
export * from './types';
export { en, ar };
export const translations: Record<Language, TranslationDictionary> = {
  en,
  ar,
};
````

## File: src/locales/types.ts
````typescript
export type Language = 'ar' | 'en';
export interface TranslationDictionary {
  brandName: string;
  subtitle: string;
  todaysMenu: string;
  gridView: string;
  listView: string;
  sale: string;
  unavailable: string;
  addToOrder: string;
  addedToOrder: string;
  quantity: string;
  perPiece: string;
  perPieceLabel: string;
  piece: string;
  pc: string;
  size: string;
  egp: string;
  from: string;
  orderItems: string;
  yourOrder: string;
  cartEmptyTitle: string;
  cartEmptyDesc: string;
  exploreMenu: string;
  clearAll: string;
  item: string;
  items: string;
  deliveryDetails: string;
  nameLabel: string;
  phoneLabel: string;
  addressLabel: string;
  nameErrorEmpty: string;
  nameErrorInvalid: string;
  phoneErrorEmpty: string;
  phoneErrorInvalid: string;
  addressErrorEmpty: string;
  addressErrorInvalid: string;
  validationNotice: string;
  orderTypeLabel: string;
  orderTypeDelivery: string;
  orderTypeTakeout: string;
  deliveryBadge: string;
  takeoutBadge: string;
  namePlaceholder: string;
  phonePlaceholder: string;
  addressPlaceholder: string;
  takeoutAddressPlaceholder: string;
  notesPlaceholder: string;
  supplementaryOptions: string;
  quickAddons: string;
  preferencesTitle: string;
  cutleryLabel: string;
  cutlerySubtext: string;
  spiceLevelLabel: string;
  spiceRegular: string;
  spiceExtra: string;
  spiceMild: string;
  servingStyleLabel: string;
  servingSeparate: string;
  servingMixed: string;
  addAddon: string;
  addedAddon: string;
  totalAmount: string;
  orderViaWhatsApp: string;
  whatsAppSubtext: string;
  viewOrder: string;
  langToggle: string;
  toggleTheme: string;
  dashboard: string;
  menu: string;
  ownerDashboard: string;
  overview: string;
  liveOrders: string;
  menuStock: string;
  kitchenPrep: string;
  analytics: string;
  todayRevenue: string;
  activeOrders: string;
  soldPortions: string;
  whatsappOrders: string;
  orderStatus: string;
  statusPending: string;
  statusPreparing: string;
  statusDelivery: string;
  statusDelivered: string;
  customer: string;
  phone: string;
  address: string;
  details: string;
  total: string;
  actions: string;
  advanceStatus: string;
  chatCustomer: string;
  inStock: string;
  outOfStock: string;
  batchTracker: string;
  breadTracker: string;
  topDishes: string;
  menuEditor: string;
  menuEditorSubtitle: string;
  addNewDish: string;
  editDish: string;
  deleteDish: string;
  duplicateDish: string;
  compiledJson: string;
  copyJson: string;
  copied: string;
  downloadJson: string;
  resetMenuConfirm: string;
  resetToDefault: string;
  searchDishes: string;
  allCategories: string;
  mains: string;
  stews: string;
  salads: string;
  sides: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  categoryLabel: string;
  imageKey: string;
  sizesConfig: string;
  perPieceConfig: string;
  enablePerPiece: string;
  basePrice: string;
  discountPrice: string;
  saveChanges: string;
  cancel: string;
  totalDishes: string;
  onSaleCount: string;
  outOfStockCount: string;
  jsonPreview: string;
  hideJson: string;
  showJson: string;
  discountPriceError: string;
  maxSalePriceHelp: string;
  viewStorefront: string;
  adminPanel: string;
  adminBadge: string;
  productId: string;
  generateSecureId: string;
  secureIdHelp: string;
  uploadImage: string;
  changeImage: string;
  removeImage: string;
  downloadImage: string;
  imageSource: string;
  customUpload: string;
  presetImage: string;
  pictureIdLabel: string;
  pictureIdHelp: string;
}
````

## File: src/pages/AdminLogin.page.tsx
````typescript
import { useState } from 'react';
import { IconEye, IconEyeOff, IconLock, IconToolsKitchen2, IconUser } from '@tabler/icons-react';
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
  useComputedColorScheme,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens, neumorphicTokens } from '@/styles/neumorphic';
export function AdminLoginPage() {
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: false });
  const isDark = computedColorScheme === 'dark';
  const { isArabic } = useLanguage();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  /* -------------------------------------------------------------------------
   * Submit credentials to the server-side Edge Function.
   * On success: the server sets an HttpOnly cookie and we navigate to /admin.
   * The page navigates via window.location.href so the browser sends the new
   * cookie on the next request, which the middleware can then verify.
   * -------------------------------------------------------------------------*/
  const handleLogin = async () => {
    if (!username || !password) {
      setError(isArabic ? 'الرجاء ملء جميع الحقول' : 'Please fill in all fields');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/admin-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials: 'same-origin',
      });
      if (response.ok) {
        sessionStorage.setItem('mama_admin_session', '1');
        window.location.href = '/admin';
      } else {
        const data = (await response.json()) as { error?: string };
        if (response.status === 500) {
          setError(isArabic ? 'الخادم غير مهيأ. تواصل مع المطور.' : 'Server is not configured. Contact the developer.');
        } else {
          setError(data.error ?? (isArabic ? 'بيانات خاطئة' : 'Invalid credentials'));
        }
      }
    } catch {
      setError(
        isArabic
          ? 'تعذّر الاتصال بالخادم. تأكد من الاتصال وأعد المحاولة.'
          : 'Could not reach the server. Check your connection and try again.'
      );
    } finally {
      setLoading(false);
    }
  };
  const pageBg = isDark ? '#1a110c' : brandTokens.cream;
  const cardBg = isDark ? neumorphicTokens.surfaces.card.dark : neumorphicTokens.surfaces.card.light;
  const cardShadow = isDark
    ? neumorphicTokens.shadows.card.dark.resting
    : neumorphicTokens.shadows.card.light.resting;
  const textMuted = isDark ? '#C9A880' : '#7a5235';
  const textMain = isDark ? '#FFF9F0' : '#2A170A';
  return (
    <Box
      style={{
        minHeight: '100vh',
        background: pageBg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        transition: 'background-color 150ms ease',
      }}
    >
      {}
      <Stack align="center" gap="xs" mb="xl">
        <Group gap={8} align="center">
          <IconToolsKitchen2 size={32} stroke={1.6} style={{ color: brandTokens.red }} />
          <Title
            order={1}
            style={{ color: brandTokens.red, fontWeight: 900, letterSpacing: '-0.5px' }}
          >
            Mama Kitchen
          </Title>
        </Group>
        <Text
          size="sm"
          fw={500}
          style={{ color: textMuted, letterSpacing: '0.08em', textTransform: 'uppercase' }}
        >
          {isArabic ? 'لوحة تحكم المطعم' : 'Restaurant Admin Panel'}
        </Text>
      </Stack>
      {}
      <Paper
        p="xl"
        radius={neumorphicTokens.radii.modal}
        style={{
          width: '100%',
          maxWidth: 400,
          background: cardBg,
          boxShadow: cardShadow,
          border: isDark ? 'none' : '1px solid rgba(0,0,0,0.04)',
        }}
      >
        {}
        <Stack gap="xs" mb="lg">
          <Group gap={8} align="center">
            <IconLock size={18} stroke={1.8} style={{ color: brandTokens.gold }} />
            <Text fw={800} size="lg" style={{ color: textMain }}>
              {isArabic ? 'تسجيل الدخول' : 'Sign In'}
            </Text>
          </Group>
          <Text size="xs" style={{ color: textMuted }}>
            {isArabic
              ? 'أدخل بيانات الدخول الخاصة بك للمتابعة'
              : 'Enter your credentials to continue'}
          </Text>
        </Stack>
        <Stack gap="md">
          {}
          <TextInput
            label={isArabic ? 'اسم المستخدم' : 'Username'}
            placeholder={isArabic ? 'أدخل اسم المستخدم' : 'Enter username'}
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            leftSection={<IconUser size={16} stroke={1.8} style={{ color: brandTokens.gold }} />}
            dir={isArabic ? 'rtl' : 'ltr'}
            styles={{
              label: { color: textMuted, fontWeight: 600, marginBottom: 4 },
              input: {
                background: isDark ? '#231812' : '#fff',
                border: isDark ? 'none' : '1px solid rgba(0,0,0,0.08)',
                color: textMain,
              },
            }}
          />
          {}
          <TextInput
            label={isArabic ? 'كلمة المرور' : 'Password'}
            placeholder={isArabic ? 'أدخل كلمة المرور' : 'Enter password'}
            type={showPass ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            leftSection={<IconLock size={16} stroke={1.8} style={{ color: brandTokens.gold }} />}
            rightSection={
              <ActionIcon
                variant="subtle"
                size="sm"
                onClick={() => setShowPass((v) => !v)}
                aria-label={showPass ? 'Hide password' : 'Show password'}
                style={{ color: textMuted }}
              >
                {showPass ? <IconEyeOff size={15} stroke={1.8} /> : <IconEye size={15} stroke={1.8} />}
              </ActionIcon>
            }
            dir={isArabic ? 'rtl' : 'ltr'}
            styles={{
              label: { color: textMuted, fontWeight: 600, marginBottom: 4 },
              input: {
                background: isDark ? '#231812' : '#fff',
                border: isDark ? 'none' : '1px solid rgba(0,0,0,0.08)',
                color: textMain,
              },
            }}
          />
          {}
          {error && (
            <Text size="xs" fw={600} style={{ color: '#e03131' }}>
              {error}
            </Text>
          )}
          {}
          <Button
            fullWidth
            size="md"
            radius="md"
            loading={loading}
            onClick={handleLogin}
            style={{
              background: `linear-gradient(135deg, ${brandTokens.red}, #a52020)`,
              border: 'none',
              fontWeight: 800,
              letterSpacing: '0.03em',
              marginTop: 4,
            }}
          >
            {isArabic ? 'دخول' : 'Sign In'}
          </Button>
          {}
          <Center>
            <Button
              variant="subtle"
              size="xs"
              color="gray"
              onClick={() => navigate('/')}
            >
              {isArabic ? '← العودة إلى القائمة' : '← Back to menu'}
            </Button>
          </Center>
        </Stack>
      </Paper>
      {}
      <Center mt="xl">
        <Text size="xs" style={{ color: textMuted, opacity: 0.5 }}>
          {isArabic ? 'مطبخ ماما — منظومة الإدارة' : 'MamaKitchen — Admin System'}
        </Text>
      </Center>
    </Box>
  );
}
````

## File: src/pages/Dashboard.page.tsx
````typescript
export { DashboardPage } from './Dashboard';
export type { DishFormData } from './Dashboard';
````

## File: src/pages/Dashboard/components/DashboardDishCard.tsx
````typescript
import React from 'react';
import { IconCopy, IconPencil, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Badge, Card, Divider, Group, Image, Stack, Switch, Text, Tooltip } from '@mantine/core';
import { dishImages } from '@/assets/images';
import { useLanguage } from '@/context/LanguageContext';
import type { DishItem } from '@/context/MenuContext';
export interface DashboardDishCardProps {
  dish: DishItem;
  onToggleAvailability: (id: number) => void;
  onEdit: (dish: DishItem) => void;
  onDuplicate: (id: number) => void;
  onDelete: (id: number) => void;
}
export function DashboardDishCard({
  dish,
  onToggleAvailability,
  onEdit,
  onDuplicate,
  onDelete,
}: DashboardDishCardProps) {
  const { t, isArabic } = useLanguage();
  const isUnavailable = dish.available === false;
  const displayImage =
    dish.uploadedDataUrl || dishImages[dish.image] || dish.image || dishImages.maincourse;
  return (
    <Card
      withBorder
      radius="lg"
      p="md"
      shadow="xs"
      style={{
        opacity: isUnavailable ? 0.65 : 1,
        transition: 'all 150ms ease',
      }}
    >
      <Group justify="space-between" align="flex-start" wrap="nowrap" gap="sm">
        <Image
          src={displayImage}
          alt={dish.title}
          w={64}
          h={64}
          radius="md"
          style={{ objectFit: 'cover', flexShrink: 0 }}
        />
        <Stack gap={2} style={{ flex: 1, minWidth: 0 }}>
          <Group gap={6} wrap="nowrap" align="center">
            <Badge
              size="xs"
              variant="default"
              radius="sm"
              style={{ fontFamily: 'monospace' }}
            >
              #{dish.id}
            </Badge>
            <Text fw={700} size="sm" lineClamp={1}>
              {isArabic && dish.title_ar ? dish.title_ar : dish.title}
            </Text>
          </Group>
          {isArabic ? (
            <Text size="xs" c="dimmed" lineClamp={1}>
              {dish.title}
            </Text>
          ) : dish.title_ar ? (
            <Text size="xs" c="dimmed" lineClamp={1}>
              {dish.title_ar}
            </Text>
          ) : null}
          <Group gap={4} mt={4}>
            <Badge size="xs" variant="light" color="brand">
              {dish.category}
            </Badge>
            {dish.sale && (
              <Badge size="xs" color="red" variant="filled">
                {t.sale}
              </Badge>
            )}
            {isUnavailable && (
              <Badge size="xs" color="gray" variant="filled">
                {t.unavailable}
              </Badge>
            )}
          </Group>
        </Stack>
      </Group>
      <Divider my="sm" />
      {}
      <Group justify="space-between" align="center">
        <Group gap={4}>
          {(dish.sizes || []).map((s) => (
            <Badge key={s.label} size="sm" variant="outline" color="brand" radius="sm">
              {s.label}:{' '}
              {dish.sale && s.discountedPrice != null ? s.discountedPrice : s.price} {t.egp}
            </Badge>
          ))}
          {dish.perPiece && (
            <Badge size="sm" variant="outline" color="yellow" radius="sm">
              {t.pc}:{' '}
              {dish.sale && dish.perPiece.discountedPrice != null
                ? dish.perPiece.discountedPrice
                : dish.perPiece.price}{' '}
              {t.egp}
            </Badge>
          )}
        </Group>
      </Group>
      <Divider my="sm" />
      {}
      <Group justify="space-between" align="center">
        <Switch
          size="xs"
          color="green"
          label={t.inStock}
          checked={!isUnavailable}
          onChange={() => onToggleAvailability(dish.id)}
        />
        <Group gap={6}>
          <Tooltip label={t.editDish}>
            <ActionIcon
              variant="light"
              color="brand"
              size="md"
              radius="md"
              onClick={() => onEdit(dish)}
              aria-label={t.editDish}
            >
              <IconPencil size={16} stroke={1.8} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label={t.duplicateDish}>
            <ActionIcon
              variant="subtle"
              color="gray"
              size="md"
              radius="md"
              onClick={() => onDuplicate(dish.id)}
              aria-label={t.duplicateDish}
            >
              <IconCopy size={16} stroke={1.8} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label={t.deleteDish}>
            <ActionIcon
              variant="subtle"
              color="red"
              size="md"
              radius="md"
              onClick={() => {
                if (
                  window.confirm(
                    isArabic ? `هل تريد حذف "${dish.title}"؟` : `Delete "${dish.title}"?`
                  )
                ) {
                  onDelete(dish.id);
                }
              }}
              aria-label={t.deleteDish}
            >
              <IconTrash size={16} stroke={1.8} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>
    </Card>
  );
}
````

## File: src/pages/Dashboard/components/DashboardDishModal.tsx
````typescript
import React from 'react';
import {
  IconAlertTriangle,
  IconDice,
  IconDownload,
  IconTrash,
  IconUpload,
} from '@tabler/icons-react';
import {
  Badge,
  Box,
  Button,
  Code,
  Divider,
  FileButton,
  Group,
  Image,
  Modal,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { dishImages } from '@/assets/images';
import type { SizeLabel } from '@/components/DishCard';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens } from '@/styles/neumorphic';
import type { DishFormData } from '../dashboard.types';
export interface DashboardDishModalProps {
  opened: boolean;
  onClose: () => void;
  editingDishId: number | null;
  formData: DishFormData;
  setFormData: React.Dispatch<React.SetStateAction<DishFormData>>;
  onSave: () => void;
  onRandomizeId: () => void;
  onImageUpload: (file: File | null) => void;
  onRemoveImage: () => void;
  onDownloadPicture: () => void;
  sizeErrors: Partial<Record<SizeLabel, string>>;
  perPieceError?: string;
  hasPriceErrors: boolean;
  isDark: boolean;
}
export function DashboardDishModal({
  opened,
  onClose,
  editingDishId,
  formData,
  setFormData,
  onSave,
  onRandomizeId,
  onImageUpload,
  onRemoveImage,
  onDownloadPicture,
  sizeErrors,
  perPieceError,
  hasPriceErrors,
  isDark,
}: DashboardDishModalProps) {
  const { t } = useLanguage();
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<Text fw={700}>{editingDishId ? t.editDish : t.addNewDish}</Text>}
      size="lg"
      radius="md"
    >
      <Stack gap="md">
        {}
        <Paper withBorder p="sm" radius="sm">
          <Group justify="space-between" align="center">
            <div>
              <Text size="xs" fw={700} c="dimmed" tt="uppercase">
                {t.productId}
              </Text>
              <Text fw={800} size="md" c="brand" style={{ fontFamily: 'monospace' }}>
                #{formData.id}
              </Text>
              <Text size="11px" c="dimmed">
                {t.secureIdHelp}
              </Text>
            </div>
            <Button
              variant="light"
              color="brand"
              size="xs"
              radius="md"
              leftSection={<IconDice size={15} stroke={2} />}
              onClick={onRandomizeId}
            >
              {t.generateSecureId}
            </Button>
          </Group>
        </Paper>
        {}
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
          <TextInput
            label={t.titleEn}
            placeholder="e.g. Agashi"
            required
            value={formData.title}
            onChange={(e) => setFormData((p) => ({ ...p, title: e.currentTarget.value }))}
          />
          <TextInput
            label={t.titleAr}
            placeholder="مثال: أقاشي دجاج"
            value={formData.title_ar}
            onChange={(e) => setFormData((p) => ({ ...p, title_ar: e.currentTarget.value }))}
          />
        </SimpleGrid>
        {}
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
          <Textarea
            label={t.descEn}
            placeholder="English description"
            minRows={2}
            value={formData.description}
            onChange={(e) => setFormData((p) => ({ ...p, description: e.currentTarget.value }))}
          />
          <Textarea
            label={t.descAr}
            placeholder="الوصف بالعربية"
            minRows={2}
            value={formData.description_ar}
            onChange={(e) =>
              setFormData((p) => ({ ...p, description_ar: e.currentTarget.value }))
            }
          />
        </SimpleGrid>
        {}
        <Select
          label={t.categoryLabel}
          data={[
            { label: t.mains, value: 'main' },
            { label: t.stews, value: 'stew' },
            { label: t.salads, value: 'salad' },
            { label: t.sides, value: 'side' },
          ]}
          value={formData.category}
          onChange={(val) => setFormData((p) => ({ ...p, category: val || 'main' }))}
        />
        {}
        <Paper withBorder p="sm" radius="md">
          <Group justify="space-between" align="center" mb="xs">
            <Text size="xs" fw={700} c="dimmed" tt="uppercase">
              {t.imageKey}
            </Text>
            {formData.uploadedDataUrl ? (
              <Badge color="green" variant="light" size="sm">
                {t.customUpload}
              </Badge>
            ) : (
              <Badge color="gray" variant="light" size="sm">
                {t.presetImage}
              </Badge>
            )}
          </Group>
          <Group align="flex-start" gap="md" wrap="nowrap">
            <Image
              src={
                formData.uploadedDataUrl || dishImages[formData.image] || dishImages.maincourse
              }
              alt={formData.title || 'Dish preview'}
              w={84}
              h={84}
              radius="md"
              style={{
                objectFit: 'cover',
                flexShrink: 0,
                border: `1px solid ${brandTokens.gold}44`,
              }}
            />
            <Stack gap="xs" style={{ flex: 1, minWidth: 0 }}>
              <Box>
                <Group gap={6} align="center">
                  <Text size="xs" fw={700}>
                    {t.pictureIdLabel}:
                  </Text>
                  <Code color="brand" style={{ fontWeight: 800 }}>
                    {formData.image}
                  </Code>
                </Group>
                <Text size="11px" c="dimmed" mt={2}>
                  {t.pictureIdHelp}
                </Text>
              </Box>
              <Group gap="xs" wrap="wrap">
                <FileButton
                  onChange={onImageUpload}
                  accept="image/png,image/jpeg,image/webp,image/svg+xml"
                >
                  {(props) => (
                    <Button
                      {...props}
                      size="xs"
                      variant="filled"
                      color="brand"
                      radius="md"
                      leftSection={<IconUpload size={14} stroke={2} />}
                    >
                      {formData.uploadedDataUrl ? t.changeImage : t.uploadImage}
                    </Button>
                  )}
                </FileButton>
                {formData.uploadedDataUrl && (
                  <>
                    <Button
                      size="xs"
                      variant="default"
                      radius="md"
                      leftSection={<IconDownload size={14} stroke={2} />}
                      onClick={onDownloadPicture}
                    >
                      {t.downloadImage}
                    </Button>
                    <Button
                      size="xs"
                      variant="subtle"
                      color="red"
                      radius="md"
                      leftSection={<IconTrash size={14} stroke={1.8} />}
                      onClick={onRemoveImage}
                    >
                      {t.removeImage}
                    </Button>
                  </>
                )}
              </Group>
              {!formData.uploadedDataUrl && (
                <Select
                  size="xs"
                  label={t.presetImage}
                  data={[
                    { label: 'agashi (سندوتش/أقاشي)', value: 'agashi' },
                    { label: 'maincourse (صواني وملاحات)', value: 'maincourse' },
                  ]}
                  value={dishImages[formData.image] ? formData.image : 'maincourse'}
                  onChange={(val) => setFormData((p) => ({ ...p, image: val || 'maincourse' }))}
                />
              )}
            </Stack>
          </Group>
        </Paper>
        {}
        <Group gap="xl" mt="xs">
          <Switch
            label={t.inStock}
            checked={formData.available}
            color="green"
            onChange={(e) => setFormData((p) => ({ ...p, available: e.currentTarget.checked }))}
          />
          <Switch
            label={t.sale}
            checked={formData.sale}
            color="red"
            onChange={(e) => setFormData((p) => ({ ...p, sale: e.currentTarget.checked }))}
          />
        </Group>
        <Divider label={t.sizesConfig} labelPosition="center" />
        {}
        <Stack gap="xs">
          {(['S', 'M', 'L'] as SizeLabel[]).map((lbl) => {
            const cfg = formData.sizes[lbl] || { enabled: false, price: 100 };
            return (
              <Group key={lbl} justify="space-between" align="center" wrap="nowrap">
                <Switch
                  label={`${t.size} ${lbl}`}
                  checked={cfg.enabled}
                  onChange={(e) =>
                    setFormData((p) => ({
                      ...p,
                      sizes: {
                        ...p.sizes,
                        [lbl]: { ...cfg, enabled: e.currentTarget.checked },
                      },
                    }))
                  }
                  style={{ minWidth: 90 }}
                />
                {cfg.enabled && (
                  <Group gap="sm" style={{ flex: 1 }} align="flex-start">
                    <NumberInput
                      placeholder={t.basePrice}
                      label={t.basePrice}
                      min={0}
                      value={cfg.price}
                      onChange={(v) =>
                        setFormData((p) => ({
                          ...p,
                          sizes: {
                            ...p.sizes,
                            [lbl]: { ...cfg, price: Number(v) || 0 },
                          },
                        }))
                      }
                      style={{ flex: 1 }}
                    />
                    {formData.sale && (
                      <NumberInput
                        placeholder={`${t.discountPrice} (< ${cfg.price})`}
                        label={t.discountPrice}
                        description={`${t.maxSalePriceHelp}: < ${cfg.price} ${t.egp}`}
                        min={0}
                        max={Math.max(0, (Number(cfg.price) || 0) - 1)}
                        value={cfg.discountedPrice ?? ''}
                        error={sizeErrors[lbl]}
                        onChange={(v) =>
                          setFormData((p) => ({
                            ...p,
                            sizes: {
                              ...p.sizes,
                              [lbl]: {
                                ...cfg,
                                discountedPrice: v !== '' ? Number(v) : undefined,
                              },
                            },
                          }))
                        }
                        style={{ flex: 1 }}
                      />
                    )}
                  </Group>
                )}
              </Group>
            );
          })}
        </Stack>
        <Divider label={t.perPieceConfig} labelPosition="center" />
        {/* Per Piece Option */}
        <Switch
          label={t.enablePerPiece}
          checked={formData.hasPerPiece}
          onChange={(e) => setFormData((p) => ({ ...p, hasPerPiece: e.currentTarget.checked }))}
        />
        {formData.hasPerPiece && (
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
            <NumberInput
              label={`${t.perPieceLabel} - ${t.basePrice}`}
              min={0}
              value={formData.perPiecePrice}
              onChange={(v) => setFormData((p) => ({ ...p, perPiecePrice: Number(v) || 0 }))}
            />
            {formData.sale && (
              <NumberInput
                label={`${t.perPieceLabel} - ${t.discountPrice}`}
                description={`${t.maxSalePriceHelp}: < ${formData.perPiecePrice} ${t.egp}`}
                min={0}
                max={Math.max(0, (Number(formData.perPiecePrice) || 0) - 1)}
                value={formData.perPieceDiscounted ?? ''}
                error={perPieceError}
                onChange={(v) =>
                  setFormData((p) => ({
                    ...p,
                    perPieceDiscounted: v !== '' ? Number(v) : undefined,
                  }))
                }
              />
            )}
          </SimpleGrid>
        )}
        {hasPriceErrors && (
          <Paper
            withBorder
            p="xs"
            radius="md"
            style={{
              backgroundColor: isDark ? 'rgba(232, 60, 60, 0.15)' : '#fff5f5',
              borderColor: '#fa5252',
            }}
          >
            <Group
              gap={4}
              align="center"
              fw={700}
              style={{
                color: 'var(--mantine-color-red-6)',
                fontSize: 'var(--mantine-font-size-xs)',
              }}
            >
              <IconAlertTriangle size={14} stroke={2} />
              {t.discountPriceError}
            </Group>
          </Paper>
        )}
        {}
        <Group justify="flex-end" mt="md">
          <Button variant="default" onClick={onClose}>
            {t.cancel}
          </Button>
          <Button
            color="brand"
            onClick={onSave}
            disabled={hasPriceErrors || !formData.title.trim()}
          >
            {t.saveChanges}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
````

## File: src/pages/Dashboard/components/DashboardJsonDrawer.tsx
````typescript
import React from 'react';
import { IconCheck, IconCode, IconCopy, IconDownload } from '@tabler/icons-react';
import { Badge, Box, Button, Code, Collapse, Group, Paper, Text, ThemeIcon } from '@mantine/core';
import { useLanguage } from '@/context/LanguageContext';
export interface DashboardJsonDrawerProps {
  show: boolean;
  isDark: boolean;
  compiledJson: string;
  adminMenuEndpoint: string;
  totalDishes: number;
  copied: boolean;
  onCopy: () => void;
  onDownload: () => void;
}
export function DashboardJsonDrawer({
  show,
  isDark,
  compiledJson,
  adminMenuEndpoint,
  totalDishes,
  copied,
  onCopy,
  onDownload,
}: DashboardJsonDrawerProps) {
  const { t } = useLanguage();
  return (
    <Collapse in={show}>
      <Paper
        withBorder
        p="md"
        radius="lg"
        style={{
          backgroundColor: isDark ? 'var(--mantine-color-dark-8)' : '#2b231d',
          color: '#F9EDD8',
        }}
      >
        <Group justify="space-between" align="center" mb="xs">
          <Group gap="xs">
            <ThemeIcon color="brand" variant="light" size="sm">
              <IconCode size={14} stroke={2} />
            </ThemeIcon>
            <Text fw={700} size="sm" c="white">
              {t.compiledJson}
            </Text>
            <Badge size="xs" color="gray" variant="filled">
              Target: {adminMenuEndpoint} • {totalDishes} items •{' '}
              {(new TextEncoder().encode(compiledJson).length / 1024).toFixed(1)} KB
            </Badge>
          </Group>
          <Group gap="xs">
            <Button
              size="xs"
              variant="light"
              color="brand"
              leftSection={
                copied ? <IconCheck size={14} stroke={2.5} /> : <IconCopy size={14} stroke={2} />
              }
              onClick={onCopy}
            >
              {copied ? t.copied : t.copyJson}
            </Button>
            <Button
              size="xs"
              variant="white"
              color="dark"
              leftSection={<IconDownload size={14} stroke={2} />}
              onClick={onDownload}
            >
              {t.downloadJson}
            </Button>
          </Group>
        </Group>
        <Box
          style={{
            maxHeight: 320,
            overflowY: 'auto',
            borderRadius: 6,
            background: '#1a1410',
            padding: 12,
          }}
        >
          <Code
            block
            style={{
              background: 'transparent',
              color: '#e3d2c0',
              fontSize: 12,
              lineHeight: 1.45,
              fontFamily: 'monospace',
            }}
          >
            {compiledJson}
          </Code>
        </Box>
      </Paper>
    </Collapse>
  );
}
````

## File: src/pages/Dashboard/components/DashboardStats.tsx
````typescript
import React from 'react';
import { Paper, SimpleGrid, Text } from '@mantine/core';
import { useLanguage } from '@/context/LanguageContext';
export interface DashboardStatsProps {
  totalDishes: number;
  inStockCount: number;
  outOfStockCount: number;
  onSaleCount: number;
  isDark: boolean;
}
export function DashboardStats({
  totalDishes,
  inStockCount,
  outOfStockCount,
  onSaleCount,
  isDark,
}: DashboardStatsProps) {
  const { t } = useLanguage();
  return (
    <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="md">
      <Paper withBorder p="md" radius="lg">
        <Text size="xs" fw={700} tt="uppercase" style={{ color: isDark ? '#C9A880' : '#7a5235' }}>
          {t.totalDishes}
        </Text>
        <Text fw={800} size="xl" mt={4} c="brand">
          {totalDishes}
        </Text>
      </Paper>
      <Paper withBorder p="md" radius="lg">
        <Text size="xs" fw={700} tt="uppercase" style={{ color: isDark ? '#C9A880' : '#7a5235' }}>
          {t.inStock}
        </Text>
        <Text fw={800} size="xl" mt={4} c="green">
          {inStockCount}
        </Text>
      </Paper>
      <Paper withBorder p="md" radius="lg">
        <Text size="xs" fw={700} tt="uppercase" style={{ color: isDark ? '#C9A880' : '#7a5235' }}>
          {t.outOfStockCount}
        </Text>
        <Text fw={800} size="xl" mt={4} c={outOfStockCount > 0 ? 'red' : 'dimmed'}>
          {outOfStockCount}
        </Text>
      </Paper>
      <Paper withBorder p="md" radius="lg">
        <Text size="xs" fw={700} tt="uppercase" style={{ color: isDark ? '#C9A880' : '#7a5235' }}>
          {t.onSaleCount}
        </Text>
        <Text fw={800} size="xl" mt={4} c="brand">
          {onSaleCount}
        </Text>
      </Paper>
    </SimpleGrid>
  );
}
````

## File: src/pages/Dashboard/index.ts
````typescript
export { DashboardPage } from './Dashboard.page';
export * from './dashboard.types';
export { DashboardDishCard } from './components/DashboardDishCard';
export { DashboardDishModal } from './components/DashboardDishModal';
export { DashboardJsonDrawer } from './components/DashboardJsonDrawer';
export { DashboardStats } from './components/DashboardStats';
````

## File: src/pages/Home.page.tsx
````typescript
import { useState } from 'react';
import { IconLayoutGrid, IconList, IconShoppingCart } from '@tabler/icons-react';
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  Tooltip,
  useComputedColorScheme,
} from '@mantine/core';
import { dishImages, paperTexture } from '@/assets/images';
import { DishCard, DishListItem } from '@/components/DishCard';
import type { DishSize } from '@/components/DishCard';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { useMenu } from '@/context/MenuContext';
import { getNeumorphicControlStyle, neumorphicTokens } from '@/styles/neumorphic';
import { brandTokens } from '@/theme';
const CARD_MIN_WIDTH = 160;
const GRID_MAX_WIDTH = 1200;
type ViewMode = 'grid' | 'list';
export function HomePage() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const { totalCount, totalPrice, openCart } = useCart();
  const { t } = useLanguage();
  const { dishes } = useMenu();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: false });
  const isDark = computedColorScheme === 'dark';
  return (
    <Stack gap="xl" p="xl" pb={totalCount > 0 ? 80 : 'xl'} align="center">
      <Group w="100%" maw={GRID_MAX_WIDTH} justify="space-between" align="center">
        <Title order={2}>{t.todaysMenu}</Title>
        {}
        {}
        <Group gap={6}>
          <Tooltip label={t.gridView} withArrow>
            <ActionIcon
              variant={viewMode === 'grid' ? 'filled' : 'default'}
              size="lg"
              radius="md"
              onClick={() => setViewMode('grid')}
              aria-label={t.gridView}
              style={getNeumorphicControlStyle(isDark, viewMode === 'grid')}
            >
              <IconLayoutGrid size={18} stroke={1.8} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label={t.listView} withArrow>
            <ActionIcon
              variant={viewMode === 'list' ? 'filled' : 'default'}
              size="lg"
              radius="md"
              onClick={() => setViewMode('list')}
              aria-label={t.listView}
              style={getNeumorphicControlStyle(isDark, viewMode === 'list')}
            >
              <IconList size={18} stroke={1.8} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>
      {}
      {viewMode === 'grid' ? (
        <Box
          w="100%"
          maw={GRID_MAX_WIDTH}
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fill, minmax(${CARD_MIN_WIDTH}px, 1fr))`,
            gap: 'var(--mantine-spacing-lg)',
          }}
        >
          {dishes.map((dish) => (
            <DishCard
              key={dish.id}
              id={dish.id}
              title={dish.title}
              title_ar={dish.title_ar}
              description={dish.description}
              description_ar={dish.description_ar}
              image={
                dish.uploadedDataUrl ||
                dishImages[dish.image] ||
                dish.image ||
                dishImages.maincourse
              }
              sale={dish.sale}
              sizes={dish.sizes as DishSize[]}
              perPiece={dish.perPiece}
              available={dish.available}
            />
          ))}
        </Box>
      ) : (
        <Paper
          w="100%"
          maw={GRID_MAX_WIDTH}
          radius="lg"
          p="sm"
          style={{
            backgroundImage: `url(${paperTexture})`,
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat',
            backgroundColor: isDark ? '#23150d' : '#c49a6c',
            backgroundBlendMode: 'multiply',
            border: neumorphicTokens.borders.subtle[isDark ? 'dark' : 'light'],
            boxShadow: neumorphicTokens.shadows.card[isDark ? 'dark' : 'light'].resting,
            transition: 'background-color 150ms ease, border-color 150ms ease',
          }}
        >
          <Stack gap={0}>
            {dishes.map((dish) => (
              <DishListItem
                key={dish.id}
                id={dish.id}
                title={dish.title}
                title_ar={dish.title_ar}
                description={dish.description}
                description_ar={dish.description_ar}
                image={
                  dish.uploadedDataUrl ||
                  dishImages[dish.image] ||
                  dish.image ||
                  dishImages.maincourse
                }
                sale={dish.sale}
                sizes={dish.sizes as DishSize[]}
                perPiece={dish.perPiece}
                available={dish.available}
              />
            ))}
          </Stack>
        </Paper>
      )}
      {}
      {}
      {totalCount > 0 && (
        <Box
          pos="fixed"
          bottom={16}
          left="50%"
          style={{
            transform: 'translateX(-50%)',
            zIndex: 99,
            width: 'calc(100% - 128px)',
            maxWidth: 420,
          }}
        >
          <Button
            fullWidth
            size="lg"
            radius="xl"
            onClick={openCart}
            style={{
              backdropFilter: 'blur(10px)',
              background: isDark
                ? `radial-gradient(120% 120% at bottom, #e03131cc 0%, ${brandTokens.red}55 75%)`
                : `radial-gradient(100% 120% at bottom, #c92626ee 0%, ${brandTokens.red}99 75%)`,
              border: isDark
                ? '1px solid rgba(113, 113, 113, 0.4)'
                : '1px solid rgba(255, 255, 255, 0.35)',
              boxShadow: isDark
                ? '0 6px 20px rgba(27, 0, 0, 0.4), 0 2px 6px rgba(0, 0, 0, 0.5)'
                : '0 6px 20px rgba(56, 12, 8, 0.75)',
              height: 48,
              padding: '0 16px',
              transition: 'transform 150ms ease, box-shadow 150ms ease',
            }}
          >
            <Group justify="space-between" w="100%" align="center" wrap="nowrap">
              {}
              <Group gap={8} align="center" wrap="nowrap">
                <Badge
                  color="white"
                  c="brand"
                  variant="filled"
                  size="md"
                  radius="xl"
                  style={{ fontWeight: 800 }}
                >
                  {totalCount} {totalCount === 1 ? t.item : t.items}
                </Badge>
                <Text
                  fw={900}
                  size="md"
                  style={{
                    color: '#FFE066',
                    letterSpacing: '0.02em',
                  }}
                >
                  {totalPrice} {t.egp}
                </Text>
              </Group>
              {}
              <Group gap={6} align="center" wrap="nowrap">
                <Text fw={800} size="sm" style={{ color: '#FFFFFF' }}>
                  {t.viewOrder}
                </Text>
                <IconShoppingCart size={18} stroke={2.2} style={{ color: '#FFFFFF' }} />
              </Group>
            </Group>
          </Button>
        </Box>
      )}
    </Stack>
  );
}
````

## File: src/styles/neumorphic.ts
````typescript
import React from 'react';
export const brandTokens = {
  cream: '#F9EDD8',
  red: '#8C1C13',
  gold: '#A67C52',
  creamDark: '#2a1f14',
} as const;
export const neumorphicTokens = {
  shadows: {
    card: {
      light: {
        resting:
          '0 0 2px rgba(130, 85, 55, 0.4), 0 0 18px rgba(130, 85, 55, 0.3), 0 0 10px rgba(255, 255, 255, 0.3)',
        hover: '0 0 28px rgba(130, 85, 55, 0.2), 0 0 55px rgba(130, 85, 55, 0.1)',
      },
      dark: {
        resting: '0 0 2px rgba(38, 15, 0, 1), 0 0 18px rgba(0, 0, 0, 0.42)',
        hover: '0 0 28px rgba(15, 8, 5, 1), 0 0 55px rgba(0, 0, 0, 0.1)',
      },
    },
    modal: {
      light: '0 0 35px rgba(130, 85, 55, 0.18), 0 0 70px rgba(130, 85, 55, 0.08)',
      dark: '0 0 50px rgba(0, 0, 0, 0.9), 0 0 100px rgba(0, 0, 0, 0.6)',
    },
    control: {
      light: {
        resting: '0 0 4px rgba(141, 95, 61, 0.4), 0 0 4px rgba(255, 255, 255, 0.77)',
        active: '0 0 12px rgba(140, 28, 19, 0.25)',
      },
      dark: {
        resting: '0 0 10px rgba(0, 0, 0, 0.06)',
        active: '0 0 14px rgba(224, 49, 49, 0.09)',
      },
    },
    chip: {
      light: {
        resting: '0 0 8px rgba(130, 85, 55, 0.08), 0 0 4px rgba(255, 255, 255, 0.9)',
        selected: '0 0 14px rgba(140, 28, 19, 0.25)',
      },
      dark: {
        resting: '0 0 10px rgba(0, 0, 0, 0.5)',
        selected: '0 0 14px rgba(224, 49, 49, 0.11)',
      },
    },
    priceTag: {
      light: '0 0 8px rgba(130, 85, 55, 0.08), 0 0 4px rgba(255, 255, 255, 0.9)',
      dark: '0 0 2px rgba(0, 0, 0, 0.33)',
    },
    image: {
      light: '0 0 18px rgba(130, 85, 55, 0.12), 0 0 8px rgba(255, 255, 255, 0.8)',
      dark: '0 0 20px rgba(0, 0, 0, 0.7)',
    },
    stepper: {
      light: '0 0 8px rgba(82, 54, 35, 1), 0 0 4px rgba(255, 255, 255, 0.8)',
      dark: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
    },
    badge: {
      sale: {
        light: '0 0 8px rgba(140, 28, 19, 0.35)',
        dark: '0 0 10px rgba(224, 49, 49, 0.45)',
      },
      dark: {
        light: '0 0 14px rgba(0, 0, 0, 0.5)',
        dark: '0 0 14px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  surfaces: {
    card: {
      light: '#ffffff',
      dark: '#1b100fff',
    },
    control: {
      light: '#ffffff',
      dark: '#2e2019',
    },
    chip: {
      light: {
        normal: '#FFF9F0',
        selected: brandTokens.red,
        sale: '#FFF0F0',
      },
      dark: {
        normal: '#2c1e17',
        selected: brandTokens.red,
        sale: 'rgba(232, 60, 60, 0.22)',
      },
    },
    stepper: {
      light: 'rgba(140, 27, 19, 1)',
      dark: 'rgba(0, 0, 0, 0.35)',
    },
  },
  borders: {
    subtle: {
      light: '1px solid rgba(0, 0, 0, 0.03)',
      dark: 'none',
    },
    control: {
      light: '1px solid rgba(0, 0, 0, 0.08)',
      dark: 'none',
    },
    selected: {
      light: `1px solid ${brandTokens.red}`,
      dark: 'none',
    },
    sale: {
      light: `1px solid ${brandTokens.red}`,
      dark: 'none',
    },
    none: 'none',
  },
  radii: {
    card: 16,
    modal: 20,
    control: 8,
    chip: 8,
    badge: 8,
  },
} as const;
export function getNeumorphicCardStyle(
  isDark: boolean,
  hovered = false,
  available = true
): React.CSSProperties {
  const mode = isDark ? 'dark' : 'light';
  return {
    position: 'relative',
    overflow: 'hidden',
    cursor: available ? 'pointer' : 'not-allowed',
    filter: available ? undefined : 'grayscale(0.85)',
    opacity: available ? 1 : 0.65,
    background: neumorphicTokens.surfaces.card[mode],
    border: neumorphicTokens.borders.subtle[mode],
    boxShadow:
      hovered && available
        ? neumorphicTokens.shadows.card[mode].hover
        : neumorphicTokens.shadows.card[mode].resting,
    transform: hovered && available ? 'translateY(-6px)' : 'translateY(0)',
    transition:
      'transform 180ms ease, box-shadow 180ms ease, filter 150ms ease, opacity 150ms ease',
  };
}
export function getNeumorphicPriceTagStyle(
  isDark: boolean,
  isOnSale = false,
  available = true
): React.CSSProperties {
  const mode = isDark ? 'dark' : 'light';
  return {
    padding: '4px 10px',
    borderRadius: neumorphicTokens.radii.chip,
    backgroundColor: !available
      ? isDark
        ? '#2d1d14ff'
        : '#e0cfbe'
      : isOnSale
        ? neumorphicTokens.surfaces.chip[mode].sale
        : neumorphicTokens.surfaces.chip[mode].normal,
    border: !available
      ? 'none'
      : isOnSale
        ? neumorphicTokens.borders.sale[mode]
        : neumorphicTokens.borders.subtle[mode],
    boxShadow: !available ? undefined : neumorphicTokens.shadows.priceTag[mode],
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    transition: 'all 120ms ease',
  };
}
export function getNeumorphicChipStyle(isDark: boolean, isSelected = false): React.CSSProperties {
  const mode = isDark ? 'dark' : 'light';
  return {
    padding: '8px 14px',
    borderRadius: neumorphicTokens.radii.chip,
    cursor: 'pointer',
    background: isSelected
      ? neumorphicTokens.surfaces.chip[mode].selected
      : neumorphicTokens.surfaces.chip[mode].normal,
    border: isSelected
      ? neumorphicTokens.borders.selected[mode]
      : neumorphicTokens.borders.control[mode],
    boxShadow: isSelected
      ? neumorphicTokens.shadows.chip[mode].selected
      : neumorphicTokens.shadows.chip[mode].resting,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    transition: 'all 120ms ease',
    userSelect: 'none',
  };
}
export function getNeumorphicControlStyle(isDark: boolean, isActive = false): React.CSSProperties {
  const mode = isDark ? 'dark' : 'light';
  return {
    backgroundColor: isActive ? brandTokens.red : neumorphicTokens.surfaces.control[mode],
    border: isActive ? 'none' : neumorphicTokens.borders.control[mode],
    boxShadow: isActive
      ? neumorphicTokens.shadows.control[mode].active
      : neumorphicTokens.shadows.control[mode].resting,
    color: isActive ? '#ffffff' : isDark ? '#FFE066' : brandTokens.red,
    transition: 'background-color 150ms ease, border-color 150ms ease, box-shadow 150ms ease',
  };
}
export function getNeumorphicStepperContainerStyle(isDark: boolean): React.CSSProperties {
  const mode = isDark ? 'dark' : 'light';
  return {
    backgroundColor: neumorphicTokens.surfaces.stepper[mode],
    borderRadius: neumorphicTokens.radii.control,
    border: neumorphicTokens.borders.subtle[mode],
    boxShadow: neumorphicTokens.shadows.stepper[mode],
  };
}
export function getNeumorphicModalStyles(isDark: boolean) {
  const mode = isDark ? 'dark' : 'light';
  return {
    content: {
      background: neumorphicTokens.surfaces.card[mode],
      border: neumorphicTokens.borders.subtle[mode],
      boxShadow: neumorphicTokens.shadows.modal[mode],
    },
    header: {
      background: 'transparent',
      borderBottom: isDark ? 'none' : neumorphicTokens.borders.subtle.light,
      padding: '16px 20px',
    },
    body: {
      padding: '20px',
    },
  };
}
````

## File: src/theme.ts
````typescript
import { createTheme, type MantineColorsTuple } from '@mantine/core';
const brandRed: MantineColorsTuple = [
  '#FDF2F0',
  '#F5D5CF',
  '#E8A89E',
  '#D97B6D',
  '#C94E3E',
  '#B83020',
  '#9B2018',
  '#8C1C13',
  '#6B1510',
  '#4A0F0B',
];
const brandGold: MantineColorsTuple = [
  '#FDF8F0',
  '#F5E8D0',
  '#E8D0A8',
  '#D4B07A',
  '#C49A6C',
  '#A67C52',
  '#8A6340',
  '#6E4D30',
  '#523820',
  '#362314',
];
export const theme = createTheme({
  colors: {
    brand: brandRed,
    gold: brandGold,
  },
  primaryColor: 'brand',
  defaultRadius: 'md',
});
export * from '@/styles/neumorphic';
````

## File: src/utils/orderValidation.test.ts
````typescript
import { describe, expect, it } from 'vitest';
import {
  NAME_REGEX,
  PHONE_REGEX,
  ADDRESS_REGEX,
  ADDRESS_HAS_LETTERS_REGEX,
  normalizeArabicNumerals,
  validateCustomerName,
  validateCustomerPhone,
  validateCustomerAddress,
  validateOrderDetails,
} from './orderValidation';
const mockTranslations = {
  nameErrorEmpty: 'Name cannot be empty',
  nameErrorInvalid: 'Invalid name format',
  phoneErrorEmpty: 'Phone cannot be empty',
  phoneErrorInvalid: 'Invalid phone format',
  addressErrorEmpty: 'Address cannot be empty',
  addressErrorInvalid: 'Invalid address format',
};
describe('orderValidation - Strict Regex & Arabic Letters/Numerals Validation', () => {
  describe('normalizeArabicNumerals', () => {
    it('converts Eastern Arabic-Indic numerals (٠-٩) to standard Western digits (0-9)', () => {
      expect(normalizeArabicNumerals('٠١٥٥٤٤٨٧٥٢٣')).toBe('01554487523');
      expect(normalizeArabicNumerals('٠١٠١٢٣٤٥٦٧٨')).toBe('01012345678');
      expect(normalizeArabicNumerals('+٢٠١٥٥٤٤٨٧٥٢٣')).toBe('+201554487523');
    });
    it('converts Persian/Extended Arabic numerals (۰-۹) to standard Western digits (0-9)', () => {
      expect(normalizeArabicNumerals('۰۱۲۳۴۵۶۷۸۹')).toBe('0123456789');
    });
    it('preserves text and already Western digits', () => {
      expect(normalizeArabicNumerals('01554487523')).toBe('01554487523');
      expect(normalizeArabicNumerals('شارع 15 عمارة 4')).toBe('شارع 15 عمارة 4');
    });
  });
  describe('NAME_REGEX with Arabic & Latin letters', () => {
    it('accepts valid Arabic names with all letter forms and spaces', () => {
      expect(NAME_REGEX.test('طارق عبد المحمود')).toBe(true);
      expect(NAME_REGEX.test('سارة عمر')).toBe(true);
      expect(NAME_REGEX.test('فاطمة الزهراء')).toBe(true);
      expect(NAME_REGEX.test('عبد الرحمن')).toBe(true);
      expect(NAME_REGEX.test('آية')).toBe(true);
      expect(NAME_REGEX.test('إسماعيل')).toBe(true);
    });
    it('accepts valid English/Latin names', () => {
      expect(NAME_REGEX.test('John Doe')).toBe(true);
      expect(NAME_REGEX.test("O'Connor")).toBe(true);
      expect(NAME_REGEX.test('Jean-Pierre')).toBe(true);
      expect(NAME_REGEX.test('Ali')).toBe(true);
    });
    it('strictly rejects names with Western or Arabic numerals', () => {
      expect(NAME_REGEX.test('Tariq123')).toBe(false);
      expect(NAME_REGEX.test('طارق١٢٣')).toBe(false);
      expect(NAME_REGEX.test('123456')).toBe(false);
      expect(NAME_REGEX.test('١٢٣٤٥٦')).toBe(false);
      expect(NAME_REGEX.test('!@#$%^')).toBe(false);
      expect(NAME_REGEX.test('A')).toBe(false);
      expect(NAME_REGEX.test('')).toBe(false);
    });
  });
  describe('PHONE_REGEX & validateCustomerPhone with Arabic & Western digits', () => {
    it('accepts valid Egyptian 11-digit mobile numbers with Western digits', () => {
      expect(PHONE_REGEX.test('01554487523')).toBe(true);
      expect(PHONE_REGEX.test('01012345678')).toBe(true);
      expect(PHONE_REGEX.test('01198765432')).toBe(true);
      expect(PHONE_REGEX.test('01234567890')).toBe(true);
    });
    it('accepts Egyptian phone numbers typed in Arabic numerals (٠١٥٥٤٤٨٧٥٢٣)', () => {
      expect(validateCustomerPhone('٠١٥٥٤٤٨٧٥٢٣', mockTranslations)).toBeUndefined();
      expect(validateCustomerPhone('٠١٠١٢٣٤٥٦٧٨', mockTranslations)).toBeUndefined();
      expect(validateCustomerPhone('+٢٠١٥٥٤٤٨٧٥٢٣', mockTranslations)).toBeUndefined();
      expect(validateCustomerPhone('٠٠٢٠١٠١٢٣٤٥٦٧٨', mockTranslations)).toBeUndefined();
    });
    it('accepts Sudanese mobile numbers in Western and Arabic numerals', () => {
      expect(PHONE_REGEX.test('0912345678')).toBe(true);
      expect(PHONE_REGEX.test('0123456789')).toBe(true);
      expect(PHONE_REGEX.test('+249912345678')).toBe(true);
      expect(validateCustomerPhone('٠٩١٢٣٤٥٦٧٨', mockTranslations)).toBeUndefined();
    });
    it('rejects invalid numbers whether Western or Arabic numerals', () => {
      expect(validateCustomerPhone('١٢٣٤٥', mockTranslations)).toBe(mockTranslations.phoneErrorInvalid);
      expect(validateCustomerPhone('01312345678', mockTranslations)).toBe(mockTranslations.phoneErrorInvalid);
      expect(validateCustomerPhone('٠١٣١٢٣٤٥٦٧٨', mockTranslations)).toBe(mockTranslations.phoneErrorInvalid);
      expect(validateCustomerPhone('01412345678', mockTranslations)).toBe(mockTranslations.phoneErrorInvalid);
      expect(validateCustomerPhone('0155448752', mockTranslations)).toBe(mockTranslations.phoneErrorInvalid);
      expect(validateCustomerPhone('٠١٥٥٤٤٨٧٥٢', mockTranslations)).toBe(mockTranslations.phoneErrorInvalid);
      expect(validateCustomerPhone('', mockTranslations)).toBe(mockTranslations.phoneErrorEmpty);
    });
  });
  describe('ADDRESS_REGEX with Arabic letters and numerals', () => {
    it('accepts addresses containing Arabic letters, Arabic numbers (٠-٩), and Arabic comma (،)', () => {
      const arabicAddress = 'شارع التحرير، الدقي، عمارة ١٥، شقة ٤';
      expect(ADDRESS_REGEX.test(arabicAddress)).toBe(true);
      expect(ADDRESS_HAS_LETTERS_REGEX.test(arabicAddress)).toBe(true);
      expect(validateCustomerAddress(arabicAddress, 'delivery', mockTranslations)).toBeUndefined();
    });
    it('accepts addresses with Western numbers and Arabic letters', () => {
      const mixedAddress = 'مدينة نصر - الحي السابع - عمارة 14 - شقة 2';
      expect(ADDRESS_REGEX.test(mixedAddress)).toBe(true);
      expect(ADDRESS_HAS_LETTERS_REGEX.test(mixedAddress)).toBe(true);
      expect(validateCustomerAddress(mixedAddress, 'delivery', mockTranslations)).toBeUndefined();
    });
    it('rejects addresses composed entirely of numbers without letters', () => {
      expect(validateCustomerAddress('١٢٣٤٥٦٧٨', 'delivery', mockTranslations)).toBe(mockTranslations.addressErrorInvalid);
      expect(validateCustomerAddress('12345678', 'delivery', mockTranslations)).toBe(mockTranslations.addressErrorInvalid);
    });
  });
  describe('validateOrderDetails complete checkout', () => {
    it('validates a complete order entered fully in Arabic (Arabic letters & Arabic numerals)', () => {
      const result = validateOrderDetails({
        name: 'طارق عبد المحمود',
        phone: '٠١٥٥٤٤٨٧٥٢٣',
        address: 'مدينة نصر، الحي السابع، عمارة ١٤، شقة ٢',
        orderType: 'delivery',
        t: mockTranslations,
      });
      expect(result.isValid).toBe(true);
      expect(result.nameError).toBeUndefined();
      expect(result.phoneError).toBeUndefined();
      expect(result.addressError).toBeUndefined();
    });
  });
});
````

## File: tsconfig.app.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client", "@testing-library/jest-dom", "vitest/globals"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,

    /* Path mapping */
    "paths": {
      "@/*": ["./src/*"],
      "@test-utils": ["./test-utils"]
    }
  },
  "include": ["src", "test-utils", ".storybook"]
}
````

## File: tsconfig.node.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
````

## File: vercel.json
````json
{
  "rewrites": [
    {
      "source": "/((?!api/|assets/|src/|@.*|node_modules/|.*\\..*).*)",
      "destination": "/index.html"
    }
  ]
}
````

## File: .github/workflows/npm_test.yml
````yaml
name: npm test
on:
  pull_request:
    branches:
      - '**'
concurrency:
  group: ${{ github.workflow }}-${{ github.event.number || github.sha }}
  cancel-in-progress: true
jobs:
  test_pull_request:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - uses: actions/setup-node@v6
        with:
          node-version-file: '.nvmrc'
          cache: 'yarn'
          cache-dependency-path: '**/yarn.lock'
      - name: Install dependencies
        run: yarn
      - name: Run build
        run: npm run build
      - name: Run tests
        run: npm test
````

## File: api/image.ts
````typescript
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
````

## File: index.html
````html
<!doctype html>
<html lang="en" data-mantine-color-scheme="light">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mama Kitchen | مطبخ ماما</title>
    <script>
      try {
        var s = localStorage.getItem('mantine-color-scheme-value') || localStorage.getItem('mama-kitchen-color-scheme') || 'light';
        if (s === 'dark' || s === 'light' || s === 'auto') {
          document.documentElement.setAttribute('data-mantine-color-scheme', s);
        }
      } catch (e) {}
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
````

## File: middleware.ts
````typescript
export const config = {
  matcher: ['/admin', '/admin/:path*', '/dashboard', '/dashboard/:path*'],
};
const SESSION_PAYLOAD = 'mama_kitchen_admin_session_v1';
const COOKIE_NAME = 'mama_admin_session';
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
  const secret =
    process.env.SESSION_SECRET ||
    (process.env.ADMIN_PASS ? `session_${process.env.ADMIN_PASS}` : 'mama_kitchen_default_session_secret_2026');
  try {
    const expected = await computeExpectedToken(secret);
    if (!safeEqual(sessionCookie, expected)) {
      return Response.redirect(new URL('/admin-login', request.url), 302);
    }
  } catch {
    return Response.redirect(new URL('/admin-login', request.url), 302);
  }
  return undefined;
}
````

## File: src/App.tsx
````typescript
import '@mantine/core/styles.css';
import { MantineColorScheme, MantineColorSchemeManager, MantineProvider } from '@mantine/core';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import { MenuProvider } from './context/MenuContext';
import { Router } from './Router';
import { theme } from './theme';
export function createUnifiedColorSchemeManager(): MantineColorSchemeManager {
  return {
    get: (defaultValue: MantineColorScheme) => {
      if (typeof window === 'undefined') {return defaultValue;}
      try {
        const val =
          localStorage.getItem('mantine-color-scheme-value') ||
          localStorage.getItem('mama-kitchen-color-scheme');
        if (val === 'dark' || val === 'light' || val === 'auto') {return val;}
        return defaultValue;
      } catch {
        return defaultValue;
      }
    },
    set: (value: MantineColorScheme) => {
      try {
        localStorage.setItem('mantine-color-scheme-value', value);
        localStorage.setItem('mama-kitchen-color-scheme', value);
      } catch {
      }
    },
    subscribe: (onUpdate: (colorScheme: MantineColorScheme) => void) => {
      const listener = (e: StorageEvent) => {
        if (e.key === 'mantine-color-scheme-value' || e.key === 'mama-kitchen-color-scheme') {
          if (e.newValue === 'dark' || e.newValue === 'light' || e.newValue === 'auto') {
            onUpdate(e.newValue);
          }
        }
      };
      window.addEventListener('storage', listener);
      return () => window.removeEventListener('storage', listener);
    },
    unsubscribe: () => {},
    clear: () => {
      try {
        localStorage.removeItem('mantine-color-scheme-value');
        localStorage.removeItem('mama-kitchen-color-scheme');
      } catch {
      }
    },
  };
}
const colorSchemeManager = createUnifiedColorSchemeManager();
export default function App() {
  return (
    <MantineProvider
      theme={theme}
      colorSchemeManager={colorSchemeManager}
      defaultColorScheme="light"
    >
      <LanguageProvider>
        <MenuProvider>
          <CartProvider>
            <Router />
          </CartProvider>
        </MenuProvider>
      </LanguageProvider>
    </MantineProvider>
  );
}
````

## File: src/archive/Home.page.v1.tsx
````typescript
import { Badge, Card, CardSection, Group, Image, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import image from '@/assets/images/agashi.jpg';
export function HomePage() {
  const { hovered, ref } = useHover();
  return (
    <>
      <Card w={280} shadow="sm" withBorder radius="lg" ref={ref}>
        <CardSection>
          <Image height={160} src={image} alt="Norway" />
        </CardSection>
        <Group justify="space-between" align="center" mt="md" mb="xs">
          <Group gap="xs" align="center">
            <Text fw={600}>Agashi</Text>
            <Badge color="red">Sale</Badge>
          </Group>
          <Group gap={6} align="baseline">
            <Text fw={700} size="sm">
              55 EGP
            </Text>
            <Text td="line-through" c="dimmed" size="xs">
              75 EGP
            </Text>
          </Group>
        </Group>
        <Text size="sm" c="dimmed">
          A Sudanese delicacy made with the hands of its mothers
        </Text>
      </Card>
    </>
  );
}
````

## File: src/components/DishCard/DishCard.tsx
````typescript
import React, { useState } from 'react';
import { IconCheck } from '@tabler/icons-react';
import {
  Box,
  Button,
  Card,
  Group,
  Image,
  Stack,
  Text,
  Transition,
  useComputedColorScheme,
} from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens, getNeumorphicCardStyle } from '@/styles/neumorphic';
import type { DishCardProps, DishSize, SizeLabel } from './DishCard.types';
import { DishDetailModal } from './DishDetailModal';
import { PriceTagCapsule } from './PriceTagCapsule';
import { SaleBadge } from './SaleBadge';
export function DishCard({
  id,
  title,
  title_ar,
  description,
  description_ar,
  image,
  sale,
  sizes,
  perPiece,
  available = true,
}: DishCardProps) {
  const { hovered, ref } = useHover();
  const { addItem } = useCart();
  const { t, isArabic } = useLanguage();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: false });
  const isDark = computedColorScheme === 'dark';
  const [modalOpen, setModalOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const safeSizes = sizes && sizes.length > 0 ? sizes : [{ label: 'S' as SizeLabel, price: 0 }];
  const defaultSize = safeSizes[0];
  const currentTitle = isArabic && title_ar ? title_ar : title;
  const secondaryTitle = isArabic ? title : title_ar;
  const currentDesc = isArabic && description_ar ? description_ar : description;
  const isSale = Boolean(sale && (defaultSize?.discountedPrice != null || perPiece?.discountedPrice != null));
  const displayPrice = isSale && defaultSize?.discountedPrice != null
    ? defaultSize.discountedPrice
    : defaultSize.price;
  const originalPrice = isSale && defaultSize?.discountedPrice != null
    ? defaultSize.price
    : null;
  const handleQuickAddToCart = (e?: React.MouseEvent) => {
    if (e) {e.stopPropagation();}
    if (!available) {return;}
    addItem({
      dishId: id ?? Math.floor(Math.random() * 100000),
      title: currentTitle,
      sizeLabel: defaultSize.label,
      unitPrice: displayPrice,
      quantity: 1,
      image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };
  const handleModalAddToCart = (selection: { sizeLabel: string; unitPrice: number; quantity: number }) => {
    if (!available) {return;}
    addItem({
      dishId: id ?? Math.floor(Math.random() * 100000),
      title: currentTitle,
      sizeLabel: selection.sizeLabel,
      unitPrice: selection.unitPrice,
      quantity: selection.quantity,
      image,
    });
  };
  return (
    <>
      <Card
        ref={ref}
        radius="lg"
        p={0}
        withBorder={false}
        onClick={() => available && setModalOpen(true)}
        style={getNeumorphicCardStyle(isDark, hovered, available)}
      >
        {}
        {!available && (
          <Box
            pos="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            style={{
              zIndex: 10,
              backgroundColor: 'rgba(28, 20, 16, 0.55)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'inherit',
              pointerEvents: 'auto',
              cursor: 'not-allowed',
            }}
          >
            <SaleBadge variant="dark" size="md">
              {t.unavailable}
            </SaleBadge>
          </Box>
        )}
        {}
        <Box pos="relative">
          <Image
            src={image}
            alt={currentTitle}
            height={135}
            style={{ objectFit: 'cover', display: 'block', width: '100%' }}
          />
          <Transition mounted={sale && hovered} transition="fade" duration={200}>
            {(styles) => (
              <Box
                pos="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                style={{ ...styles, background: 'rgba(0,0,0,0.18)' }}
              />
            )}
          </Transition>
          {sale && <SaleBadge absolute />}
        </Box>
        {}
        <Stack gap={6} p="xs" pt="sm">
          <Text fw={700} size="sm" lh={1.2} lineClamp={1}>
            {currentTitle}
          </Text>
          <Text
            size="xs"
            lineClamp={2}
            style={{ color: isDark ? '#D4BFA8' : '#5a3a28', minHeight: 32 }}
          >
            {currentDesc}
          </Text>
          <Group justify="space-between" align="center" mt={4}>
            <PriceTagCapsule
              isDark={isDark}
              isOnSale={isSale}
              available={available}
              displayPrice={displayPrice}
              originalPrice={originalPrice}
            />
            {available && (
              <Button
                size="xs"
                radius="md"
                leftSection={added ? <IconCheck size={14} stroke={2.5} /> : undefined}
                onClick={handleQuickAddToCart}
                style={{
                  fontWeight: 800,
                  transition: 'background-color 150ms ease, border-color 150ms ease, color 150ms ease',
                  backgroundColor: added ? '#2f9e44' : isDark ? '#2e2019' : '#FFF3F0',
                  color: added ? '#FFFFFF' : brandTokens.red,
                  border: `1px solid ${
                    added ? '#40c057' : isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)'
                  }`,
                  boxShadow: added
                    ? '0 2px 8px rgba(47, 158, 68, 0.3)'
                    : '0 1px 3px rgba(0,0,0,0.05)',
                }}
              >
                {added ? t.addedToOrder : t.addToOrder}
              </Button>
            )}
          </Group>
        </Stack>
      </Card>
      {}
      <DishDetailModal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title={currentTitle}
        secondaryTitle={secondaryTitle}
        description={currentDesc}
        image={image}
        sale={Boolean(sale)}
        sizes={safeSizes}
        perPiece={perPiece}
        isDark={isDark}
        onAddToCart={handleModalAddToCart}
      />
    </>
  );
}
````

## File: src/components/DishCard/DishDetailModal.tsx
````typescript
import React, { useState } from 'react';
import { IconCheck, IconMinus, IconPlus, IconShoppingCart } from '@tabler/icons-react';
import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Group,
  Image,
  Modal,
  Stack,
  Text,
} from '@mantine/core';
import { useLanguage } from '@/context/LanguageContext';
import {
  brandTokens,
  getNeumorphicChipStyle,
  getNeumorphicControlStyle,
  getNeumorphicModalStyles,
  getNeumorphicStepperContainerStyle,
  neumorphicTokens,
} from '@/styles/neumorphic';
import type { DishSize, PerPieceOption, SizeLabel } from './DishCard.types';
import { SaleBadge } from './SaleBadge';
const ALL_SIZES: SizeLabel[] = ['S', 'M', 'L'];
export interface DishDetailModalProps {
  opened: boolean;
  onClose: () => void;
  title: string;
  secondaryTitle?: string;
  description: string;
  image: string;
  sale: boolean;
  sizes: DishSize[];
  perPiece?: PerPieceOption;
  isDark: boolean;
  onAddToCart: (selection: { sizeLabel: string; unitPrice: number; quantity: number }) => void;
}
export function DishDetailModal({
  opened,
  onClose,
  title,
  secondaryTitle,
  description,
  image,
  sale,
  sizes,
  perPiece,
  isDark,
  onAddToCart,
}: DishDetailModalProps) {
  const { t, isArabic } = useLanguage();
  const safeSizes = sizes && sizes.length > 0 ? sizes : [{ label: 'S' as SizeLabel, price: 0 }];
  const [selectedType, setSelectedType] = useState<'size' | 'piece'>('size');
  const [selectedSize, setSelectedSize] = useState<DishSize>(safeSizes[0]);
  const [pieceQty, setPieceQty] = useState<number>(1);
  const [added, setAdded] = useState(false);
  const isPieceMode = selectedType === 'piece' && !!perPiece;
  const isSizeSale = Boolean(sale && selectedSize?.discountedPrice != null);
  const isPieceSale = Boolean(sale && perPiece?.discountedPrice != null);
  const isOnSale = isPieceMode ? isPieceSale : isSizeSale;
  const originalUnitPrice = isPieceMode
    ? (perPiece?.price ?? 0)
    : (selectedSize?.price ?? 0);
  const unitPrice = isPieceMode
    ? isPieceSale
      ? perPiece.discountedPrice!
      : perPiece.price
    : selectedSize
      ? isSizeSale
        ? selectedSize.discountedPrice!
        : selectedSize.price
      : 0;
  const displayPrice = isPieceMode ? unitPrice * pieceQty : unitPrice;
  const originalDisplayPrice = isPieceMode ? originalUnitPrice * pieceQty : originalUnitPrice;
  const handleAdd = () => {
    onAddToCart({
      sizeLabel: isPieceMode ? (isArabic ? 'قطعة' : 'Pc') : selectedSize.label,
      unitPrice,
      quantity: isPieceMode ? pieceQty : 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="lg"
      radius="lg"
      centered
      title={
        <Group gap="xs" align="center" wrap="nowrap">
          <Text fw={800} size="lg" style={{ color: isDark ? '#FFF9F0' : '#2A170A' }}>
            {title}
          </Text>
          {sale && <SaleBadge />}
        </Group>
      }
      styles={getNeumorphicModalStyles(isDark)}
    >
      <Stack gap="md">
        {}
        <Box
          pos="relative"
          style={{
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: neumorphicTokens.shadows.image[isDark ? 'dark' : 'light'],
          }}
        >
          <Image
            src={image}
            alt={title}
            height={240}
            style={{ objectFit: 'cover', width: '100%', display: 'block' }}
          />
          {sale && <SaleBadge absolute size="md" />}
        </Box>
        {}
        {secondaryTitle && (
          <Text
            size="xs"
            fw={700}
            style={{ color: isDark ? '#C9A880' : '#8A6340', marginTop: -6 }}
          >
            {secondaryTitle}
          </Text>
        )}
        {}
        <Text
          size="sm"
          style={{
            color: isDark ? '#FDF2F0' : '#2A170A',
            fontWeight: 500,
            lineHeight: 1.7,
          }}
        >
          {description}
        </Text>
        <Divider color={`${brandTokens.gold}33`} />
        {}
        <Stack gap={6}>
          <Text
            size="xs"
            fw={700}
            tt="uppercase"
            style={{ color: isDark ? '#C9A880' : '#7A5235', letterSpacing: '0.04em' }}
          >
            {t.sizesConfig || t.size}
          </Text>
          <Group gap={8} wrap="wrap">
            {ALL_SIZES.map((label) => {
              const sizeObj = sizes.find((s) => s.label === label);
              if (!sizeObj) {return null;}
              const isSelected = selectedType === 'size' && selectedSize.label === label;
              const hasDiscount = Boolean(sale && sizeObj.discountedPrice != null);
              const displayP = hasDiscount ? sizeObj.discountedPrice! : sizeObj.price;
              return (
                <Box
                  key={label}
                  onClick={() => {
                    setSelectedSize(sizeObj);
                    setSelectedType('size');
                  }}
                  style={getNeumorphicChipStyle(isDark, isSelected)}
                >
                  <Text
                    fw={900}
                    size="sm"
                    style={{
                      color: isSelected ? '#FFFFFF' : isDark ? '#E8A89E' : brandTokens.red,
                    }}
                  >
                    {label}
                  </Text>
                  <Group gap={4} align="baseline" wrap="nowrap">
                    {hasDiscount && (
                      <Text
                        size="xs"
                        fw={700}
                        style={{
                          color: isSelected
                            ? 'rgba(255, 255, 255, 0.75)'
                            : isDark
                              ? 'rgba(255, 255, 255, 0.45)'
                              : 'rgba(140, 28, 19, 0.55)',
                          textDecoration: 'line-through',
                        }}
                      >
                        {sizeObj.price}
                      </Text>
                    )}
                    <Text
                      fw={800}
                      size="sm"
                      style={{
                        color: isSelected ? '#FFE066' : isDark ? '#FFE066' : '#7A1C14',
                      }}
                    >
                      {displayP} {t.egp}
                    </Text>
                  </Group>
                </Box>
              );
            })}
            {perPiece && (
              <Box
                onClick={() => setSelectedType('piece')}
                style={getNeumorphicChipStyle(isDark, isPieceMode)}
              >
                <Text
                  fw={900}
                  size="sm"
                  style={{
                    color: isPieceMode ? '#FFFFFF' : isDark ? '#E8A89E' : brandTokens.red,
                  }}
                >
                  {t.perPieceLabel}
                </Text>
                <Group gap={4} align="baseline" wrap="nowrap">
                  {sale && perPiece.discountedPrice != null && (
                    <Text
                      size="xs"
                      fw={700}
                      style={{
                        color: isPieceMode
                          ? 'rgba(255, 255, 255, 0.75)'
                          : isDark
                            ? 'rgba(255, 255, 255, 0.45)'
                            : 'rgba(140, 28, 19, 0.55)',
                        textDecoration: 'line-through',
                      }}
                    >
                      {perPiece.price}
                    </Text>
                  )}
                  <Text
                    fw={800}
                    size="sm"
                    style={{
                      color: isPieceMode ? '#FFE066' : isDark ? '#FFE066' : '#7A1C14',
                    }}
                  >
                    {sale && perPiece.discountedPrice != null
                      ? perPiece.discountedPrice
                      : perPiece.price}{' '}
                    {t.egp}
                  </Text>
                </Group>
              </Box>
            )}
          </Group>
        </Stack>
        {}
        {isPieceMode && perPiece && (
          <Group
            justify="space-between"
            align="center"
            p="sm"
            style={getNeumorphicStepperContainerStyle(isDark)}
          >
            <Text size="sm" fw={700} style={{ color: isDark ? '#D4BFA8' : '#5A3A28' }}>
              {t.quantity}:
            </Text>
            <Group gap={8} align="center">
              <ActionIcon
                size="md"
                variant="default"
                radius="md"
                style={getNeumorphicControlStyle(isDark)}
                onClick={() => setPieceQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                <IconMinus size={14} stroke={2.5} />
              </ActionIcon>
              <Text
                size="sm"
                fw={900}
                style={{
                  minWidth: 26,
                  textAlign: 'center',
                  color: isDark ? '#FFE066' : brandTokens.red,
                }}
              >
                {pieceQty}
              </Text>
              <ActionIcon
                size="md"
                variant="default"
                radius="md"
                style={getNeumorphicControlStyle(isDark)}
                onClick={() => setPieceQty((q) => q + 1)}
                aria-label="Increase quantity"
              >
                <IconPlus size={14} stroke={2.5} />
              </ActionIcon>
              <Text
                size="sm"
                fw={900}
                style={{
                  color: isDark ? '#FFE066' : '#7A1C14',
                  backgroundColor: isDark
                    ? 'rgba(255, 224, 102, 0.15)'
                    : 'rgba(140, 28, 19, 0.08)',
                  padding: '2px 8px',
                  borderRadius: 6,
                  border: isDark ? 'none' : '1px solid rgba(140, 28, 19, 0.15)',
                  boxShadow: isDark
                    ? '0 0 6px rgba(0, 0, 0, 0.35)'
                    : '0 0 6px rgba(130, 85, 55, 0.06), 0 0 4px rgba(255, 255, 255, 0.8)',
                  marginLeft: 6,
                }}
              >
                {t.totalAmount} {unitPrice * pieceQty} {t.egp}
              </Text>
            </Group>
          </Group>
        )}
        <Divider color={isDark ? 'rgba(255, 255, 255, 0.04)' : `${brandTokens.gold}33`} />
        {}
        <Group justify="space-between" align="center" wrap="nowrap">
          <div>
            <Text size="xs" fw={600} style={{ color: isDark ? '#C9A880' : '#7A5235' }}>
              {t.totalAmount}
            </Text>
            <Group gap={6} align="baseline">
              <Text
                fw={900}
                size="xl"
                style={{
                  color: isOnSale
                    ? isDark
                      ? '#FF8787'
                      : '#9B2018'
                    : isDark
                      ? '#FFE066'
                      : '#6B1510',
                  lineHeight: 1.1,
                }}
              >
                {displayPrice} {t.egp}
              </Text>
              {isOnSale && originalDisplayPrice > displayPrice && (
                <Text
                  size="xs"
                  fw={600}
                  style={{
                    color: isDark ? '#A9927D' : '#8C7260',
                    textDecoration: 'line-through',
                  }}
                >
                  {originalDisplayPrice} {t.egp}
                </Text>
              )}
            </Group>
          </div>
          <Button
            size="md"
            radius="xl"
            leftSection={
              added ? (
                <IconCheck size={18} stroke={2.5} />
              ) : (
                <IconShoppingCart size={18} stroke={2} />
              )
            }
            onClick={handleAdd}
            style={{
              fontWeight: 800,
              minWidth: 160,
              backgroundColor: added ? '#2f9e44' : brandTokens.red,
              color: '#ffffff',
              boxShadow: added
                ? '0 4px 14px rgba(47, 158, 68, 0.4)'
                : '0 4px 14px rgba(140, 28, 19, 0.35)',
              border: 'none',
              transition: 'background-color 150ms ease, transform 100ms ease, box-shadow 150ms ease',
            }}
          >
            {added ? t.addedToOrder : t.addToOrder}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
````

## File: src/components/DishCard/DishListItem.tsx
````typescript
import { Box, Button, Collapse, Group, Image, Stack, Text, useComputedColorScheme } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { IconChevronDown, IconMinus, IconPlus } from '@tabler/icons-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens } from '@/theme';
import {
  getNeumorphicPriceTagStyle,
  getNeumorphicChipStyle,
  getNeumorphicControlStyle,
  neumorphicTokens,
} from '@/styles/neumorphic';
import { SaleBadge } from './SaleBadge';
import { PriceTagCapsule } from './PriceTagCapsule';
import type { DishCardProps, DishSize, SizeLabel } from './DishCard.types';
const ALL_SIZES: SizeLabel[] = ['S', 'M', 'L'];
function SizeButton({
  label,
  size,
  selected,
  sale,
  isDark,
  onClick,
}: {
  label: SizeLabel;
  size?: DishSize;
  selected: boolean;
  sale: boolean;
  isDark: boolean;
  onClick: () => void;
}) {
  const available = !!size;
  const hasDiscount = Boolean(sale && size?.discountedPrice != null);
  const displayPrice = hasDiscount ? size!.discountedPrice : size?.price;
  return (
    <Box
      onClick={available ? onClick : undefined}
      style={{
        ...getNeumorphicChipStyle(isDark, selected),
        padding: '4px 10px',
        borderRadius: 6,
        gap: 6,
        cursor: available ? 'pointer' : 'default',
        opacity: available ? 1 : 0.35,
      }}
    >
      <Text
        size="xs"
        fw={900}
        style={{ color: selected ? '#FFFFFF' : isDark ? '#E8A89E' : brandTokens.red }}
      >
        {label}
      </Text>
      {available && (
        <Group gap={4} align="baseline" wrap="nowrap">
          {hasDiscount && (
            <Text
              size="10px"
              fw={700}
              style={{
                color: selected
                  ? 'rgba(255, 255, 255, 0.75)'
                  : isDark
                    ? 'rgba(255, 255, 255, 0.45)'
                    : 'rgba(107, 21, 16, 0.55)',
                textDecoration: 'line-through',
              }}
            >
              {size.price}
            </Text>
          )}
          <Text
            size="xs"
            fw={800}
            style={{
              color: selected
                ? '#FFE066'
                : isDark
                  ? '#FFE066'
                  : '#7A1C14',
              letterSpacing: '0.02em',
            }}
          >
            {displayPrice} EGP
          </Text>
        </Group>
      )}
    </Box>
  );
}
export function DishListItem({
  id,
  title,
  title_ar,
  description,
  description_ar,
  image,
  sale,
  sizes,
  perPiece,
  available = true,
}: DishCardProps) {
  const { hovered, ref } = useHover();
  const { addItem } = useCart();
  const { t, isArabic } = useLanguage();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: false });
  const isDark = computedColorScheme === 'dark';
  const safeSizes = sizes && sizes.length > 0 ? sizes : [{ label: 'S' as SizeLabel, price: 0 }];
  const [expanded, setExpanded] = useState(false);
  const [selectedType, setSelectedType] = useState<'size' | 'piece'>('size');
  const [selectedSize, setSelectedSize] = useState<DishSize>(safeSizes[0]);
  const [pieceQty, setPieceQty] = useState<number>(1);
  const [added, setAdded] = useState(false);
  const currentTitle = isArabic && title_ar ? title_ar : title;
  const currentDesc = isArabic && description_ar ? description_ar : description;
  const isPieceMode = selectedType === 'piece' && !!perPiece;
  const minPrice = Math.min(
    ...safeSizes.map((s) => s.discountedPrice ?? s.price),
    perPiece ? (sale && perPiece.discountedPrice != null ? perPiece.discountedPrice : perPiece.price) : Infinity
  );
  const maxPrice = Math.max(...safeSizes.map((s) => s.price));
  const isSingleSize = safeSizes.length === 1 && !perPiece;
  const isOnSale = Boolean(sale);
  const priceLabel = isSingleSize
    ? `${safeSizes[0].discountedPrice ?? safeSizes[0].price} ${t.egp}`
    : `${minPrice === Infinity ? 0 : minPrice}–${maxPrice === -Infinity ? 0 : maxPrice} ${t.egp}`;
  const originalPriceLabel = isSingleSize && sale && safeSizes[0].discountedPrice != null
    ? `${safeSizes[0].price} ${t.egp}`
    : null;
  const currentPieceTotal = (perPiece
    ? (sale && perPiece.discountedPrice != null ? perPiece.discountedPrice : perPiece.price)
    : 0) * pieceQty;
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!available) {return;}
    const unitPrice = isPieceMode
      ? (sale && perPiece?.discountedPrice != null ? perPiece.discountedPrice : perPiece?.price ?? 0)
      : (sale && selectedSize.discountedPrice != null ? selectedSize.discountedPrice : selectedSize.price);
    addItem({
      dishId: id ?? Math.floor(Math.random() * 100000),
      title: currentTitle,
      sizeLabel: isPieceMode ? (isArabic ? 'قطعة' : 'Pc') : selectedSize.label,
      unitPrice,
      quantity: isPieceMode ? pieceQty : 1,
      image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };
  return (
    <Box
      ref={ref}
      py="sm"
      px="sm"
      pos="relative"
      onClick={() => available && setExpanded((v) => !v)}
      style={{
        cursor: available ? 'pointer' : 'not-allowed',
        borderBottom: isDark ? 'none' : '1px solid rgba(0, 0, 0, 0.06)',
        transition:
          'background 180ms ease, border-radius 180ms ease, box-shadow 180ms ease, filter 150ms ease, opacity 150ms ease, transform 180ms ease',
        transform: hovered && available && !expanded ? 'translateY(-2px)' : 'none',
        borderRadius: expanded && available ? 12 : 8,
        filter: available ? undefined : 'grayscale(0.85)',
        opacity: available ? 1 : 0.55,
        background: expanded && available
          ? (isDark ? 'rgba(255, 255, 255, 0.06)' : '#ffffff')
          : hovered && available
            ? (isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.75)')
            : 'transparent',
        boxShadow: expanded && available
          ? (isDark ? '0 0 24px rgba(0,0,0,0.5)' : '0 0 20px rgba(130, 85, 55, 0.12), 0 0 8px rgba(255, 255, 255, 0.8)')
          : hovered && available
            ? (isDark ? '0 0 16px rgba(0,0,0,0.35)' : '0 0 14px rgba(130, 85, 55, 0.08), 0 0 6px rgba(255, 255, 255, 0.6)')
            : undefined,
      }}
    >
      {}
      {!available && (
        <Box
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          style={{
            zIndex: 2,
            backgroundColor: 'rgba(28, 20, 16, 0.15)',
            borderRadius: 'inherit',
            pointerEvents: 'none',
          }}
        />
      )}
      {}
      <Group justify="space-between" wrap="nowrap" gap="xs">
        <Group gap="xs" wrap="nowrap" style={{ flex: 1, minWidth: 0 }}>
          <Text
            fw={700}
            size="sm"
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              textDecoration: !available ? 'line-through' : undefined,
              color: isDark ? '#FFF9F0' : '#2A170A',
              flexShrink: 1,
              minWidth: 0,
            }}
          >
            {currentTitle}
          </Text>
          {available && isOnSale && <SaleBadge />}
          {!available && (
            <SaleBadge variant="dark" size="xs">
              {t.unavailable}
            </SaleBadge>
          )}
        </Group>
        {}
        <Group gap={8} wrap="nowrap" align="center" style={{ flexShrink: 0 }}>
          <PriceTagCapsule
            isDark={isDark}
            isOnSale={isOnSale}
            available={available}
            displayPrice={priceLabel}
            originalPrice={originalPriceLabel}
            currencySuffix=""
          />
          {available && (
            <IconChevronDown
              size={18}
              stroke={2.2}
              style={{
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 200ms ease, color 150ms ease',
                color: expanded
                  ? (isDark ? '#FFE066' : brandTokens.red)
                  : (isDark ? '#D4BFA8' : '#5A3A28'),
                flexShrink: 0,
              }}
            />
          )}
        </Group>
      </Group>
      {/* Expandable details */}
      <Collapse in={expanded}>
        <Stack gap="sm" mt="sm" onClick={(e) => e.stopPropagation()}>
          <Group gap="sm" align="flex-start" wrap="nowrap">
            <Image
              src={image}
              alt={currentTitle}
              w={104}
              h={76}
              radius="md"
              style={{
                objectFit: 'cover',
                flexShrink: 0,
                border: isDark ? 'none' : '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: isDark
                  ? '0 0 14px rgba(0,0,0,0.6)'
                  : '0 0 10px rgba(130, 85, 55, 0.1), 0 0 4px rgba(255, 255, 255, 0.8)',
              }}
            />
            <Stack gap={4} style={{ flex: 1, minWidth: 0 }}>
              {available && isOnSale && (
                <Box mb={2}>
                  <SaleBadge />
                </Box>
              )}
              <Text
                size="xs"
                style={{
                  color: isDark ? '#FDF2F0' : '#2A170A',
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                {currentDesc}
              </Text>
            </Stack>
          </Group>
          {}
          <Group gap={6} wrap="wrap">
            {ALL_SIZES.map((label) => {
              const sizeObj = sizes.find((s) => s.label === label);
              return (
                <SizeButton
                  key={label}
                  label={label}
                  size={sizeObj}
                  selected={selectedType === 'size' && selectedSize.label === label}
                  sale={sale}
                  isDark={isDark}
                  onClick={() => {
                    if (sizeObj) {
                      setSelectedSize(sizeObj);
                      setSelectedType('size');
                    }
                  }}
                />
              );
            })}
            {perPiece && (
              <Box
                onClick={() => setSelectedType('piece')}
                style={{
                  ...getNeumorphicChipStyle(isDark, selectedType === 'piece'),
                  padding: '4px 10px',
                  borderRadius: 6,
                  gap: 6,
                }}
              >
                <Text
                  size="xs"
                  fw={900}
                  style={{ color: selectedType === 'piece' ? '#FFFFFF' : isDark ? '#E8A89E' : brandTokens.red }}
                >
                  {t.perPieceLabel}
                </Text>
                <Group gap={4} align="baseline" wrap="nowrap">
                  {sale && perPiece.discountedPrice != null && (
                    <Text
                      size="10px"
                      fw={700}
                      style={{
                        color: selectedType === 'piece'
                          ? 'rgba(255, 255, 255, 0.75)'
                          : isDark
                            ? 'rgba(255, 255, 255, 0.45)'
                            : 'rgba(140, 28, 19, 0.55)',
                        textDecoration: 'line-through',
                      }}
                    >
                      {perPiece.price}
                    </Text>
                  )}
                  <Text
                    size="xs"
                    fw={800}
                    style={{
                      color: selectedType === 'piece'
                        ? '#FFE066'
                        : isDark
                          ? '#FFE066'
                          : '#7A1C14',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {perPiece.discountedPrice != null && sale ? perPiece.discountedPrice : perPiece.price} {t.egp}
                  </Text>
                </Group>
              </Box>
            )}
          </Group>
          {}
          {isPieceMode && perPiece && (
            <Group gap="sm" align="center" pt={2}>
              <Text size="xs" fw={600} style={{ color: isDark ? '#D4BFA8' : '#5A3A28' }}>
                {t.quantity}:
              </Text>
              <Group gap={6} align="center">
                <Box
                  onClick={(e) => {
                    e.stopPropagation();
                    setPieceQty((q) => Math.max(1, q - 1));
                  }}
                  style={{
                    ...getNeumorphicControlStyle(isDark),
                    width: 24,
                    height: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 6,
                    cursor: pieceQty > 1 ? 'pointer' : 'default',
                    userSelect: 'none',
                    opacity: pieceQty > 1 ? 1 : 0.35,
                  }}
                >
                  <IconMinus size={12} stroke={2.5} />
                </Box>
                <Text size="xs" fw={800} style={{ minWidth: 20, textAlign: 'center', color: isDark ? '#FFE066' : brandTokens.red }}>
                  {pieceQty}
                </Text>
                <Box
                  onClick={(e) => {
                    e.stopPropagation();
                    setPieceQty((q) => q + 1);
                  }}
                  style={{
                    ...getNeumorphicControlStyle(isDark),
                    width: 24,
                    height: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 6,
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <IconPlus size={12} stroke={2.5} />
                </Box>
                <Text
                  size="xs"
                  fw={900}
                  style={{
                    color: isDark ? '#FFE066' : '#7A1C14',
                    backgroundColor: isDark ? 'rgba(255, 224, 102, 0.15)' : 'rgba(140, 28, 19, 0.08)',
                    padding: '2px 8px',
                    borderRadius: 6,
                    border: isDark ? 'none' : '1px solid rgba(140, 28, 19, 0.15)',
                    boxShadow: isDark
                      ? '0 0 6px rgba(0, 0, 0, 0.35)'
                      : '0 0 6px rgba(130, 85, 55, 0.06), 0 0 4px rgba(255, 255, 255, 0.8)',
                    marginLeft: 6,
                  }}
                >
                  {t.totalAmount} {currentPieceTotal} {t.egp}
                </Text>
              </Group>
            </Group>
          )}
          {}
          {available && (
            <Group justify="flex-end" pt={4}>
              <Button
                size="xs"
                radius="md"
                onClick={handleAddToCart}
                style={{
                  fontWeight: 800,
                  transition: 'background-color 150ms ease, border-color 150ms ease, color 150ms ease',
                  backgroundColor: added ? '#2f9e44' : brandTokens.red,
                  color: '#FFFFFF',
                  boxShadow: added
                    ? '0 2px 8px rgba(47, 158, 68, 0.3)'
                    : '0 2px 8px rgba(140, 28, 19, 0.3)',
                }}
              >
                {added ? t.addedToOrder : t.addToOrder}
              </Button>
            </Group>
          )}
        </Stack>
      </Collapse>
    </Box>
  );
}
````

## File: src/components/TopBar/AdminTopBar.tsx
````typescript
import {
  ActionIcon,
  Badge,
  Button,
  Group,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconExternalLink, IconLogout, IconMoon, IconSun, IconToolsKitchen2 } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens } from '@/theme';
export function AdminTopBar() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: false });
  const { t, isArabic, toggleLanguage } = useLanguage();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      sessionStorage.removeItem('mama_admin_session');
      await fetch('/api/admin-auth', { method: 'DELETE', credentials: 'same-origin' });
    } catch {
    }
    window.location.href = '/admin-login';
  };
  const isDark = computedColorScheme === 'dark';
  const handleToggleTheme = () => {
    const nextScheme = isDark ? 'light' : 'dark';
    setColorScheme(nextScheme);
    document.documentElement.setAttribute('data-mantine-color-scheme', nextScheme);
    try {
      localStorage.setItem('mantine-color-scheme-value', nextScheme);
      localStorage.setItem('mama-kitchen-color-scheme', nextScheme);
    } catch {
    }
  };
  return (
    <Group
      h="100%"
      px="md"
      justify="space-between"
      wrap="nowrap"
    >
      <Group gap="sm" align="center">
        <Group
          gap={6}
          align="center"
          fw={800}
          style={{ color: brandTokens.red, cursor: 'pointer', fontSize: 'var(--mantine-font-size-lg)' }}
          onClick={() => navigate('/admin')}
        >
          <IconToolsKitchen2 size={18} stroke={1.8} style={{ color: brandTokens.red, flexShrink: 0 }} />
          {t.brandName}
        </Group>
        <Badge
          color="brand"
          variant="filled"
          size="sm"
          radius="sm"
        >
          {t.adminBadge}
        </Badge>
      </Group>
      <Group gap="xs">
        {}
        <Button
          variant="light"
          color="brand"
          size="compact-sm"
          radius="md"
          rightSection={<IconExternalLink size={14} stroke={2} />}
          onClick={() => navigate('/')}
        >
          {t.viewStorefront}
        </Button>
        {}
        <Button
          variant="default"
          size="compact-sm"
          radius="md"
          onClick={toggleLanguage}
          style={{
            fontWeight: 800,
            fontSize: 12,
            minWidth: 46,
            height: 30,
          }}
          aria-label="Switch language / تغيير اللغة"
        >
          {isArabic ? 'EN' : 'عربي'}
        </Button>
        <ActionIcon
          variant="subtle"
          color="brand"
          size="lg"
          radius="md"
          onClick={handleToggleTheme}
          aria-label={t.toggleTheme}
          title={isDark ? (isArabic ? 'التبديل إلى الوضع النهاري' : 'Switch to light mode') : (isArabic ? 'التبديل إلى الوضع الليلي' : 'Switch to dark mode')}
        >
          {isDark ? <IconSun size={20} stroke={1.8} /> : <IconMoon size={20} stroke={1.8} />}
        </ActionIcon>
        {}
        <ActionIcon
          variant="subtle"
          color="red"
          size="lg"
          radius="md"
          onClick={handleLogout}
          aria-label={isArabic ? 'تسجيل الخروج' : 'Sign out'}
          title={isArabic ? 'تسجيل الخروج' : 'Sign out'}
        >
          <IconLogout size={20} stroke={1.8} />
        </ActionIcon>
      </Group>
    </Group>
  );
}
````

## File: src/components/TopBar/TopBar.test.tsx
````typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { MantineProvider } from '@mantine/core';
import { MemoryRouter } from 'react-router-dom';
import { TopBar } from './TopBar';
import { CartProvider } from '@/context/CartContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { theme } from '@/theme';
describe('TopBar Theme Toggle', () => {
  beforeEach(() => {
    const store: Record<string, string> = {};
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: (k: string) => store[k] ?? null,
        setItem: (k: string, v: string) => {
          store[k] = v;
        },
        removeItem: (k: string) => {
          delete store[k];
        },
        clear: () => {
          for (const k in store) {delete store[k];}
        },
      },
      writable: true,
    });
  });
  it('toggles color scheme attribute and icon seamlessly', () => {
    render(
      <MantineProvider theme={theme} defaultColorScheme="light">
        <LanguageProvider>
          <CartProvider>
            <MemoryRouter>
              <TopBar />
            </MemoryRouter>
          </CartProvider>
        </LanguageProvider>
      </MantineProvider>
    );
    const toggleButton = screen.getByRole('button', { name: /Toggle color scheme|تبديل المظهر/i });
    expect(toggleButton).toBeDefined();
    expect(document.documentElement.getAttribute('data-mantine-color-scheme')).toBe('light');
    fireEvent.click(toggleButton);
    expect(document.documentElement.getAttribute('data-mantine-color-scheme')).toBe('dark');
    fireEvent.click(toggleButton);
    expect(document.documentElement.getAttribute('data-mantine-color-scheme')).toBe('light');
  });
});
````

## File: src/context/CartContext.tsx
````typescript
import React, { createContext, useContext, useEffect, useState } from 'react';
export interface CartItem {
  id: string;
  dishId: number;
  title: string;
  sizeLabel: string;
  unitPrice: number;
  quantity: number;
  image: string;
}
export type OrderType = 'delivery' | 'takeout';
export interface SupplementaryPreferences {
  cutlery: boolean;
  spiceLevel: 'regular' | 'extra' | 'mild';
  servingStyle?: 'separate' | 'mixed';
}
export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  notes: string;
  orderType: OrderType;
  preferences?: SupplementaryPreferences;
}
interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, 'id'>) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
  checkoutWhatsApp: (customer: CustomerDetails) => void;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
const CART_STORAGE_KEY = 'mama-kitchen-cart';
const WHATSAPP_PHONE = '201554487523';
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items]);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);
  const addItem = (newItem: Omit<CartItem, 'id'>) => {
    const id = `${newItem.dishId}-${newItem.sizeLabel}`;
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + newItem.quantity } : i
        );
      }
      return [...prev, { ...newItem, id }];
    });
  };
  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };
  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  const clearCart = () => {
    setItems([]);
  };
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const checkoutWhatsApp = (customer: CustomerDetails) => {
    if (items.length === 0) {return;}
    const lines: string[] = [
      '🍽️ *طلب جديد من Mama Kitchen - مطبخ مامي*',
      '━━━━━━━━━━━━━━━━━━━━',
    ];
    const orderTypeLabel = customer.orderType === 'takeout' ? '🏃 *استلام من المطعم (Takeout)*' : '🛵 *توصيل للمنزل (Delivery)*';
    lines.push(orderTypeLabel);
    items.forEach((item, index) => {
      const sizeDisplay = item.sizeLabel === 'Pc' ? 'قطعة' : `حجم ${item.sizeLabel}`;
      lines.push(
        `${index + 1}. *${item.title}* (${sizeDisplay})` +
        `\n   • الكمية: ${item.quantity} × ${item.unitPrice} ج.م = *${item.quantity * item.unitPrice} ج.م*`
      );
    });
    lines.push('━━━━━━━━━━━━━━━━━━━━');
    lines.push(`💰 *الإجمالي الكلي:* ${totalPrice} ج.م`);
    lines.push('━━━━━━━━━━━━━━━━━━━━');
    if (customer.name.trim()) {
      lines.push(`👤 *الاسم:* ${customer.name.trim()}`);
    }
    if (customer.phone.trim()) {
      lines.push(`📞 *رقم الهاتف:* ${customer.phone.trim()}`);
    }
    if (customer.address.trim()) {
      lines.push(`📍 *العنوان:* ${customer.address.trim()}`);
    } else if (customer.orderType === 'delivery') {
      lines.push(`📍 *العنوان:* (لم يُدخل — سيتم التواصل لتحديده)`);
    }
    if (customer.preferences) {
      const spiceMap: Record<string, string> = {
        regular: 'شطة عادية',
        extra: 'حارة زيادة 🔥',
        mild: 'بدون شطة (بارد)',
      };
      const servingMap: Record<string, string> = {
        separate: 'الملاح في علب منفصلة',
        mixed: 'مفرود فوق الكسرة / القراصة',
      };
      lines.push('⚙️ *خيارات وتفضيلات إضافية:*');
      lines.push(`   • مستوى الشطة: ${spiceMap[customer.preferences.spiceLevel] || 'عادية'}`);
      if (customer.preferences.servingStyle) {
        lines.push(`   • طريقة التقديم: ${servingMap[customer.preferences.servingStyle]}`);
      }
      lines.push(
        `   • أدوات المائدة: ${customer.preferences.cutlery ? 'نعم (ملاعق ومناديل)' : 'لا داعي (صديق للبيئة 🌱)'}`
      );
    }
    if (customer.notes.trim()) {
      lines.push(`📝 *ملاحظات إضافية:* ${customer.notes.trim()}`);
    }
    lines.push('\nشكراً لكم! أرجو تأكيد الطلب وسعر التوصيل 🙏');
    const message = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        totalCount,
        totalPrice,
        checkoutWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
````

## File: src/context/LanguageContext.tsx
````typescript
import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations, type Language, type TranslationDictionary } from '@/locales';
export type { Language, TranslationDictionary };
export { translations };
export type Translations = TranslationDictionary;
interface LanguageContextType {
  language: Language;
  direction: 'rtl' | 'ltr';
  isArabic: boolean;
  t: TranslationDictionary;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const LANG_STORAGE_KEY = 'mama-kitchen-lang';
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === 'ar' || saved === 'en') {return saved;}
      return 'ar';
    } catch {
      return 'ar';
    }
  });
  const direction = language === 'ar' ? 'rtl' : 'ltr';
  useEffect(() => {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, language);
    } catch (e) {
      console.error('Failed to save language', e);
    }
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [language, direction]);
  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };
  const value: LanguageContextType = {
    language,
    direction,
    isArabic: language === 'ar',
    t: translations[language],
    toggleLanguage,
    setLanguage,
  };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
````

## File: src/pages/Dashboard/Dashboard.page.tsx
````typescript
import React, { useState } from 'react';
import {
  IconCheck,
  IconCode,
  IconCopy,
  IconDownload,
  IconPlus,
  IconToolsKitchen2,
} from '@tabler/icons-react';
import {
  Badge,
  Button,
  Group,
  Paper,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
  useComputedColorScheme,
} from '@mantine/core';
import type { DishSize, SizeLabel } from '@/components/DishCard';
import { useLanguage } from '@/context/LanguageContext';
import { useMenu, type DishItem } from '@/context/MenuContext';
import { brandTokens } from '@/styles/neumorphic';
import { DEFAULT_FORM, type DishFormData } from './dashboard.types';
import { DashboardDishCard } from './components/DashboardDishCard';
import { DashboardDishModal } from './components/DashboardDishModal';
import { DashboardJsonDrawer } from './components/DashboardJsonDrawer';
import { DashboardStats } from './components/DashboardStats';
export function DashboardPage() {
  const { t, isArabic } = useLanguage();
  const {
    dishes,
    endpoints,
    toggleAvailability,
    updateDish,
    addDish,
    deleteDish,
    duplicateDish,
    generateSecureId,
    resetMenu,
    compileServerJson,
    uploadImage,
    deleteImage,
  } = useMenu();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: false });
  const isDark = computedColorScheme === 'dark';
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showJsonPreview, setShowJsonPreview] = useState(false);
  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingDishId, setEditingDishId] = useState<number | null>(null);
  const [formData, setFormData] = useState<DishFormData>(DEFAULT_FORM);
  const compiledJson = compileServerJson();
  const handleCopyJson = () => {
    navigator.clipboard.writeText(compiledJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const handleDownloadJson = () => {
    const blob = new Blob([compiledJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dishes.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  const handleOpenAdd = () => {
    setEditingDishId(null);
    const newId = generateSecureId();
    setFormData({
      ...DEFAULT_FORM,
      id: newId,
      image: `${newId}.jpg`,
      imageExtension: 'jpg',
    });
    setModalOpen(true);
  };
  const handleOpenEdit = (dish: DishItem) => {
    setEditingDishId(dish.id);
    const sObj = (dish.sizes || []).find((s) => s.label === 'S');
    const mObj = (dish.sizes || []).find((s) => s.label === 'M');
    const lObj = (dish.sizes || []).find((s) => s.label === 'L');
    let ext = 'jpg';
    if (dish.image && dish.image.includes('.')) {
      ext = dish.image.split('.').pop() || 'jpg';
    }
    setFormData({
      id: dish.id,
      title: dish.title,
      title_ar: dish.title_ar || '',
      description: dish.description,
      description_ar: dish.description_ar || '',
      category: dish.category || 'main',
      image: dish.image || 'maincourse',
      uploadedDataUrl: dish.uploadedDataUrl,
      imageExtension: ext,
      sale: Boolean(dish.sale),
      available: dish.available !== false,
      sizes: {
        S: {
          enabled: !!sObj,
          price: sObj ? sObj.price : 150,
          discountedPrice: sObj?.discountedPrice,
        },
        M: {
          enabled: !!mObj,
          price: mObj ? mObj.price : 220,
          discountedPrice: mObj?.discountedPrice,
        },
        L: {
          enabled: !!lObj,
          price: lObj ? lObj.price : 320,
          discountedPrice: lObj?.discountedPrice,
        },
      },
      hasPerPiece: !!dish.perPiece,
      perPiecePrice: dish.perPiece ? dish.perPiece.price : 35,
      perPieceDiscounted: dish.perPiece?.discountedPrice,
    });
    setModalOpen(true);
  };
  const handleRandomizeId = () => {
    const newId = generateSecureId();
    setFormData((prev) => {
      let newImage = prev.image;
      if (
        prev.uploadedDataUrl ||
        (prev.image && (prev.image.includes('.') || prev.image === String(prev.id)))
      ) {
        const ext =
          prev.imageExtension || (prev.image.includes('.') ? prev.image.split('.').pop() : 'jpg');
        newImage = `${newId}.${ext}`;
      }
      return {
        ...prev,
        id: newId,
        image: newImage,
      };
    });
  };
  const handleImageUpload = (file: File | null) => {
    if (!file) {return;}
    uploadImage(formData.id ?? generateSecureId(), file).catch(() => {
    });
  };
  const handleRemoveImage = async () => {
    if (!formData.id) {return;}
    await deleteImage(formData.id);
    setFormData((prev) => ({
      ...prev,
      image: 'maincourse',
      uploadedDataUrl: undefined,
    }));
  };
  const handleDownloadPicture = () => {
    if (!formData.uploadedDataUrl) {return;}
    const filename = formData.image || `${formData.id || 'dish'}.jpg`;
    const a = document.createElement('a');
    a.href = formData.uploadedDataUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  const sizeErrors: Partial<Record<SizeLabel, string>> = {};
  if (formData.sale) {
    (['S', 'M', 'L'] as SizeLabel[]).forEach((lbl) => {
      const cfg = formData.sizes[lbl];
      if (
        cfg?.enabled &&
        cfg.discountedPrice != null &&
        Number(cfg.discountedPrice) >= Number(cfg.price)
      ) {
        sizeErrors[lbl] = `${t.discountPriceError} (< ${cfg.price} ${t.egp})`;
      }
    });
  }
  const perPieceError =
    formData.sale &&
    formData.hasPerPiece &&
    formData.perPieceDiscounted != null &&
    Number(formData.perPieceDiscounted) >= Number(formData.perPiecePrice)
      ? `${t.discountPriceError} (< ${formData.perPiecePrice} ${t.egp})`
      : undefined;
  const hasPriceErrors = Object.keys(sizeErrors).length > 0 || !!perPieceError;
  const handleSaveDish = () => {
    if (!formData.title.trim() || hasPriceErrors) {return;}
    const sizes: DishSize[] = [];
    (['S', 'M', 'L'] as SizeLabel[]).forEach((lbl) => {
      const cfg = formData.sizes[lbl];
      if (cfg?.enabled) {
        sizes.push({
          label: lbl,
          price: Number(cfg.price) || 0,
          discountedPrice:
            formData.sale && cfg.discountedPrice != null ? Number(cfg.discountedPrice) : undefined,
        });
      }
    });
    if (sizes.length === 0) {
      sizes.push({ label: 'S', price: 100 });
    }
    const finalId = formData.id ?? generateSecureId();
    const dishPayload: DishItem = {
      id: finalId,
      title: formData.title.trim(),
      title_ar: formData.title_ar.trim() || undefined,
      description: formData.description.trim(),
      description_ar: formData.description_ar.trim() || undefined,
      category: formData.category,
      image: formData.image || 'maincourse',
      uploadedDataUrl: formData.uploadedDataUrl,
      sale: formData.sale,
      available: formData.available,
      sizes,
      perPiece: formData.hasPerPiece
        ? {
            price: Number(formData.perPiecePrice) || 0,
            discountedPrice:
              formData.sale && formData.perPieceDiscounted != null
                ? Number(formData.perPieceDiscounted)
                : undefined,
          }
        : undefined,
    };
    if (editingDishId != null) {
      updateDish(editingDishId, dishPayload);
    } else {
      addDish(dishPayload);
    }
    setModalOpen(false);
  };
  const filteredDishes = dishes.filter((dish) => {
    const matchesSearch =
      dish.title.toLowerCase().includes(search.toLowerCase()) ||
      (dish.title_ar && dish.title_ar.includes(search)) ||
      String(dish.id).includes(search);
    const matchesCategory = categoryFilter === 'all' || dish.category === categoryFilter;
    let matchesStatus = true;
    if (statusFilter === 'available') {matchesStatus = dish.available !== false;}
    if (statusFilter === 'unavailable') {matchesStatus = dish.available === false;}
    if (statusFilter === 'sale') {matchesStatus = Boolean(dish.sale);}
    return matchesSearch && matchesCategory && matchesStatus;
  });
  const onSaleCount = dishes.filter((d) => d.sale).length;
  const outOfStockCount = dishes.filter((d) => d.available === false).length;
  return (
    <Stack gap="xl" p="xl" maw={1200} mx="auto" w="100%">
      {}
      <Group justify="space-between" align="flex-start" wrap="wrap" gap="md">
        <div>
          <Group gap="xs" align="center">
            <Title order={2} style={{ color: isDark ? '#E8A89E' : brandTokens.red }}>
              <Group gap={8} align="center" style={{ display: 'inline-flex' }}>
                <IconToolsKitchen2 size={26} stroke={1.8} style={{ flexShrink: 0 }} />
                {t.menuEditor}
              </Group>
            </Title>
            <Badge color="brand" variant="light" size="sm" radius="sm">
              API: {endpoints.ADMIN_MENU}
            </Badge>
          </Group>
          <Text size="sm" c="dimmed" mt={4} maw={600}>
            {t.menuEditorSubtitle}
          </Text>
        </div>
        <Group gap="xs" wrap="wrap">
          <Button
            leftSection={<IconPlus size={16} stroke={2.5} />}
            color="brand"
            radius="md"
            onClick={handleOpenAdd}
          >
            {t.addNewDish}
          </Button>
          <Button
            variant={showJsonPreview ? 'filled' : 'light'}
            color="brand"
            radius="md"
            leftSection={<IconCode size={16} stroke={2} />}
            onClick={() => setShowJsonPreview((v) => !v)}
          >
            {showJsonPreview ? t.hideJson : t.showJson}
          </Button>
          <Button
            variant="default"
            radius="md"
            leftSection={
              copied ? <IconCheck size={16} stroke={2.5} /> : <IconCopy size={16} stroke={2} />
            }
            onClick={handleCopyJson}
            color={copied ? 'green' : undefined}
          >
            {copied ? t.copied : t.copyJson}
          </Button>
          <Button
            variant="default"
            radius="md"
            leftSection={<IconDownload size={16} stroke={2} />}
            onClick={handleDownloadJson}
          >
            {t.downloadJson}
          </Button>
          <Button
            variant="subtle"
            color="gray"
            size="sm"
            onClick={() => {
              if (
                window.confirm(
                  isArabic ? 'هل تريد إعادة ضبط القائمة للافتراضي؟' : 'Reset to default menu?'
                )
              ) {
                resetMenu();
              }
            }}
          >
            {t.resetToDefault}
          </Button>
        </Group>
      </Group>
      {}
      <DashboardStats
        totalDishes={dishes.length}
        inStockCount={dishes.length - outOfStockCount}
        outOfStockCount={outOfStockCount}
        onSaleCount={onSaleCount}
        isDark={isDark}
      />
      {}
      <DashboardJsonDrawer
        show={showJsonPreview}
        isDark={isDark}
        compiledJson={compiledJson}
        adminMenuEndpoint={endpoints.ADMIN_MENU}
        totalDishes={dishes.length}
        copied={copied}
        onCopy={handleCopyJson}
        onDownload={handleDownloadJson}
      />
      {}
      <Paper withBorder p="md" radius="lg">
        <Group justify="space-between" wrap="wrap" gap="md">
          <TextInput
            placeholder={t.searchDishes}
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            style={{ flex: 1, minWidth: 220 }}
            radius="md"
          />
          <Group gap="xs" wrap="wrap">
            <SegmentedControl
              size="xs"
              radius="md"
              value={categoryFilter}
              onChange={setCategoryFilter}
              data={[
                { label: t.allCategories, value: 'all' },
                { label: t.mains, value: 'main' },
                { label: t.stews, value: 'stew' },
                { label: t.salads, value: 'salad' },
                { label: t.sides, value: 'side' },
              ]}
            />
            <SegmentedControl
              size="xs"
              radius="md"
              value={statusFilter}
              onChange={setStatusFilter}
              data={[
                { label: isArabic ? 'الكل' : 'All', value: 'all' },
                { label: t.inStock, value: 'available' },
                { label: t.outOfStock, value: 'unavailable' },
                { label: t.sale, value: 'sale' },
              ]}
            />
          </Group>
        </Group>
      </Paper>
      {}
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
        {filteredDishes.map((dish) => (
          <DashboardDishCard
            key={dish.id}
            dish={dish}
            onToggleAvailability={toggleAvailability}
            onEdit={handleOpenEdit}
            onDuplicate={duplicateDish}
            onDelete={deleteDish}
          />
        ))}
      </SimpleGrid>
      {}
      <DashboardDishModal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        editingDishId={editingDishId}
        formData={formData}
        setFormData={setFormData}
        onSave={handleSaveDish}
        onRandomizeId={handleRandomizeId}
        onImageUpload={handleImageUpload}
        onRemoveImage={handleRemoveImage}
        onDownloadPicture={handleDownloadPicture}
        sizeErrors={sizeErrors}
        perPieceError={perPieceError}
        hasPriceErrors={hasPriceErrors}
        isDark={isDark}
      />
    </Stack>
  );
}
````

## File: src/pages/Dashboard/dashboard.types.ts
````typescript
import type { SizeLabel } from '@/components/DishCard';
export interface SizeConfig {
  enabled: boolean;
  price: number;
  discountedPrice?: number;
}
export interface DishFormData {
  id?: number;
  title: string;
  title_ar: string;
  description: string;
  description_ar: string;
  category: string;
  image: string;
  uploadedDataUrl?: string;
  imageExtension?: string;
  storagePath?: string;
  sale: boolean;
  available: boolean;
  sizes: {
    S?: SizeConfig;
    M?: SizeConfig;
    L?: SizeConfig;
  };
  hasPerPiece: boolean;
  perPiecePrice: number;
  perPieceDiscounted?: number;
}
export const DEFAULT_FORM: DishFormData = {
  title: '',
  title_ar: '',
  description: '',
  description_ar: '',
  category: 'main',
  image: 'maincourse',
  sale: false,
  available: true,
  sizes: {
    S: { enabled: true, price: 150 },
    M: { enabled: false, price: 200 },
    L: { enabled: false, price: 280 },
  },
  hasPerPiece: false,
  perPiecePrice: 35,
};
````

## File: src/Router.tsx
````typescript
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { AppShell, useComputedColorScheme } from '@mantine/core';
import { CartDrawer } from './components/Cart';
import { RequireAdminAuth } from './components/RequireAdminAuth';
import { AdminTopBar, TopBar } from './components/TopBar';
import { AdminLoginPage } from './pages/AdminLogin.page';
import { DashboardPage } from './pages/Dashboard.page';
import { HomePage } from './pages/Home.page';
import { brandTokens } from './theme';
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
````

## File: src/theme-integration.test.tsx
````typescript
import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import App from './App';
import { AdminTopBar } from './components/TopBar/AdminTopBar';
import { MantineProvider } from '@mantine/core';
import { LanguageProvider } from './context/LanguageContext';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme';
import { createUnifiedColorSchemeManager } from './App';
describe('Theme System Integration', () => {
  let store: Record<string, string> = {};
  beforeEach(() => {
    store = {};
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: (k: string) => store[k] ?? null,
        setItem: (k: string, v: string) => {
          store[k] = v;
        },
        removeItem: (k: string) => {
          delete store[k];
        },
        clear: () => {
          for (const k in store) {delete store[k];}
        },
      },
      writable: true,
    });
    document.documentElement.removeAttribute('data-mantine-color-scheme');
  });
  it('loads dark mode when stored in mantine-color-scheme-value', () => {
    store['mantine-color-scheme-value'] = 'dark';
    render(<App />);
    expect(document.documentElement.getAttribute('data-mantine-color-scheme')).toBe('dark');
  });
  it('loads dark mode when stored in mama-kitchen-color-scheme', () => {
    store['mama-kitchen-color-scheme'] = 'dark';
    render(<App />);
    expect(document.documentElement.getAttribute('data-mantine-color-scheme')).toBe('dark');
  });
  it('cycles from light to dark and back to light cleanly on storefront TopBar', () => {
    render(<App />);
    const themeBtn = screen.getByRole('button', { name: /Toggle color scheme|تبديل المظهر/i });
    act(() => {
      fireEvent.click(themeBtn);
    });
    expect(document.documentElement.getAttribute('data-mantine-color-scheme')).toBe('dark');
    expect(store['mantine-color-scheme-value']).toBe('dark');
    expect(store['mama-kitchen-color-scheme']).toBe('dark');
    act(() => {
      fireEvent.click(themeBtn);
    });
    expect(document.documentElement.getAttribute('data-mantine-color-scheme')).toBe('light');
    expect(store['mantine-color-scheme-value']).toBe('light');
    expect(store['mama-kitchen-color-scheme']).toBe('light');
  });
  it('toggles theme properly in AdminTopBar and synchronizes both storage keys', () => {
    render(
      <MantineProvider theme={theme} colorSchemeManager={createUnifiedColorSchemeManager()} defaultColorScheme="light">
        <LanguageProvider>
          <BrowserRouter>
            <AdminTopBar />
          </BrowserRouter>
        </LanguageProvider>
      </MantineProvider>
    );
    const themeBtn = screen.getByRole('button', { name: /Toggle color scheme|تبديل المظهر/i });
    act(() => {
      fireEvent.click(themeBtn);
    });
    expect(document.documentElement.getAttribute('data-mantine-color-scheme')).toBe('dark');
    expect(store['mantine-color-scheme-value']).toBe('dark');
    expect(store['mama-kitchen-color-scheme']).toBe('dark');
    act(() => {
      fireEvent.click(themeBtn);
    });
    expect(document.documentElement.getAttribute('data-mantine-color-scheme')).toBe('light');
    expect(store['mantine-color-scheme-value']).toBe('light');
    expect(store['mama-kitchen-color-scheme']).toBe('light');
  });
});
````

## File: src/utils/orderValidation.ts
````typescript
export const ARABIC_LETTERS = '\u0621-\u064A\u064B-\u065F\u0671-\u06D3';
export const ARABIC_NUMERALS = '\u0660-\u0669\u06F0-\u06F9';
export function normalizeArabicNumerals(input: string): string {
  if (!input) {return '';}
  return input
    .replace(/[\u0660-\u0669]/g, (c) => String(c.charCodeAt(0) - 0x0660))
    .replace(/[\u06F0-\u06F9]/g, (c) => String(c.charCodeAt(0) - 0x06F0));
}
// Name regex: Arabic and Latin letters, spaces, hyphens, apostrophes (2 to 60 characters).
// Numbers (both Western 0-9 and Arabic ٠-٩) and punctuation are strictly disallowed.
export const NAME_REGEX = new RegExp(
  `^[${ARABIC_LETTERS}A-Za-z][${ARABIC_LETTERS}A-Za-z\\s'-]{1,59}$`
);
// Phone regex (operates on normalized digits):
// Egyptian mobiles: 01[0125]xxxxxxxx (11 digits), or with +20 / 0020 prefix
// Sudanese mobiles: 09xxxxxxxx or 01[012]xxxxxxx (10 digits), or with +249 / 00249 prefix
export const PHONE_REGEX =
  /^(?:(?:(?:\+20|0020)?0?1[0125]\d{8})|(?:(?:\+249|00249)?(?:0?9\d{8}|0?1[012]\d{7})))$/;
// Delivery Address regex:
// 6 to 150 characters, letters (Arabic & English), numbers (Arabic ٠-٩ & Western 0-9), spaces,
// and address punctuation (including Arabic comma ، \u060C, periods, slashes, hyphens, hashes)
export const ADDRESS_REGEX = new RegExp(
  `^[${ARABIC_LETTERS}A-Za-z0-9${ARABIC_NUMERALS}\\s,،./#\\-–]{6,150}$`
);
// Address must contain at least 2 actual letters (Arabic or English), not just digits
export const ADDRESS_HAS_LETTERS_REGEX = new RegExp(`[${ARABIC_LETTERS}A-Za-z]{2,}`);
export interface ValidationResult {
  isValid: boolean;
  nameError?: string;
  phoneError?: string;
  addressError?: string;
}
export interface ValidateOrderParams {
  name: string;
  phone: string;
  address: string;
  orderType: 'delivery' | 'takeout';
  t: {
    nameErrorEmpty: string;
    nameErrorInvalid: string;
    phoneErrorEmpty: string;
    phoneErrorInvalid: string;
    addressErrorEmpty: string;
    addressErrorInvalid: string;
  };
}
export function validateCustomerName(
  name: string,
  t: { nameErrorEmpty: string; nameErrorInvalid: string }
): string | undefined {
  const trimmed = name.trim();
  if (!trimmed) {
    return t.nameErrorEmpty;
  }
  if (!NAME_REGEX.test(trimmed)) {
    return t.nameErrorInvalid;
  }
  return undefined;
}
export function validateCustomerPhone(
  phone: string,
  t: { phoneErrorEmpty: string; phoneErrorInvalid: string }
): string | undefined {
  const normalized = normalizeArabicNumerals(phone).replace(/[\s\-()]/g, '');
  if (!normalized) {
    return t.phoneErrorEmpty;
  }
  if (!PHONE_REGEX.test(normalized)) {
    return t.phoneErrorInvalid;
  }
  return undefined;
}
export function validateCustomerAddress(
  address: string,
  orderType: 'delivery' | 'takeout',
  t: { addressErrorEmpty: string; addressErrorInvalid: string }
): string | undefined {
  if (orderType === 'takeout') {
    return undefined;
  }
  const trimmed = address.trim();
  if (!trimmed) {
    return t.addressErrorEmpty;
  }
  if (!ADDRESS_REGEX.test(trimmed) || !ADDRESS_HAS_LETTERS_REGEX.test(trimmed)) {
    return t.addressErrorInvalid;
  }
  return undefined;
}
export function validateOrderDetails(params: ValidateOrderParams): ValidationResult {
  const nameError = validateCustomerName(params.name, params.t);
  const phoneError = validateCustomerPhone(params.phone, params.t);
  const addressError = validateCustomerAddress(params.address, params.orderType, params.t);
  const isValid = !nameError && !phoneError && !addressError;
  return {
    isValid,
    nameError,
    phoneError,
    addressError,
  };
}
````

## File: vite.config.ts
````typescript
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
````

## File: .gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Dependencies
node_modules

# Build outputs
dist
dist-ssr
storybook-static

# Environment files
*.local

# Bun
bun.lockb

# Cache
.eslintcache
.stylelintcache
node_modules/.tmp

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
# Local env secrets
.env.local
.env.*.local
.vercel
.env*

TODOs.md
````

## File: .storybook/main.ts
````typescript
import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true,
    enableCrashReports: false,
  },
  stories: ['../src/**/*.mdx', '../src/**/*.story.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-themes'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
export default config;
````

## File: api/menu.ts
````typescript
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
  storage_path?: string | null;
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
  storagePath?: string | null;
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
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('dishes')
      .select('*')
      .order('id', { ascending: true });
    if (error) {
      return json({ error: error.message }, 500);
    }
    return json({ dishes: ((data ?? []) as DbDishRow[]).map(toClientDish) });
  }
  if (!(await isAdminAuthorized(req))) {
    return json({ error: 'Unauthorized' }, 401);
  }
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
````

## File: test-utils/render.tsx
````typescript
import type { ReactNode } from 'react';
import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { theme } from '@/theme';
export function render(ui: ReactNode) {
  return testingLibraryRender(ui, {
    wrapper: ({ children }: { children: ReactNode }) => (
      <MantineProvider theme={theme}>{children}</MantineProvider>
    ),
  });
}
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "types": ["node", "@testing-library/jest-dom", "vitest/globals"],
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": ["./src/*"],
      "@test-utils": ["./test-utils"]
    }
  },
  "include": [
    "src",
    "test-utils",
    ".storybook/main.ts",
    ".storybook/preview.tsx",
    "api/endpoints.ts"
  ]
}
````

## File: eslint.config.js
````javascript
import mantine from 'eslint-config-mantine';
export default [
  ...mantine,
  {
    ignores: [
      'dist',
      'storybook-static',
      'vite.config.ts',
      'vitest.setup.mjs',
      '**/*.{mjs,cjs,js,d.ts,d.mts}',
    ],
  },
  {
    files: ['**/*.story.tsx'],
    rules: {
      'no-console': 'off',
    },
  },
];
````

## File: src/context/MenuContext.tsx
````typescript
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { DishCardProps } from '@/components/DishCard';
import initialDishes from '@/data/dishes.json';
import { API_ENDPOINTS, type ApiEndpoints } from '../../api/endpoints';
export interface DishItem extends DishCardProps {
  id: number;
  category: string;
  storagePath?: string | null;
}
export function generateSecureDishId(existingIds: number[] = []): number {
  const existingSet = new Set(existingIds);
  const buffer = new Uint32Array(1);
  let id = 0;
  do {
    if (typeof window !== 'undefined' && window.crypto?.getRandomValues) {
      window.crypto.getRandomValues(buffer);
      id = 10000000 + (buffer[0] % 90000000);
    } else {
      id = Math.floor(10000000 + Math.random() * 90000000);
    }
  } while (existingSet.has(id));
  return id;
}
export function compileDishesToJson(dishes: DishItem[]): string {
  const cleanList = dishes.map((dish) => {
    const item: Record<string, any> = {
      id: dish.id,
      title: dish.title.trim(),
    };
    if (dish.title_ar && dish.title_ar.trim()) {
      item.title_ar = dish.title_ar.trim();
    }
    item.description = (dish.description || '').trim();
    if (dish.description_ar && dish.description_ar.trim()) {
      item.description_ar = dish.description_ar.trim();
    }
    item.image = dish.image || 'maincourse';
    item.category = dish.category || 'main';
    item.sale = Boolean(dish.sale);
    if (dish.available === false) {
      item.available = false;
    }
    item.sizes = (dish.sizes || []).map((s) => {
      const sizeObj: Record<string, any> = {
        label: s.label,
        price: Number(s.price),
      };
      if (dish.sale && s.discountedPrice != null && Number(s.discountedPrice) > 0) {
        sizeObj.discountedPrice = Number(s.discountedPrice);
      }
      return sizeObj;
    });
    if (dish.perPiece && Number(dish.perPiece.price) > 0) {
      const pieceObj: Record<string, any> = {
        price: Number(dish.perPiece.price),
      };
      if (
        dish.sale &&
        dish.perPiece.discountedPrice != null &&
        Number(dish.perPiece.discountedPrice) > 0
      ) {
        pieceObj.discountedPrice = Number(dish.perPiece.discountedPrice);
      }
      item.perPiece = pieceObj;
    }
    return item;
  });
  return JSON.stringify(cleanList, null, 2);
}
interface MenuContextType {
  dishes: DishItem[];
  loading: boolean;
  endpoints: ApiEndpoints;
  toggleAvailability: (id: number) => void;
  toggleSale: (id: number) => void;
  updateDish: (id: number, updated: Partial<DishItem>) => void;
  addDish: (newDish: Omit<DishItem, 'id'> & { id?: number }) => number;
  deleteDish: (id: number) => void;
  duplicateDish: (id: number) => number;
  generateSecureId: () => number;
  resetMenu: () => void;
  compileServerJson: () => string;
  uploadImage: (id: number, file: File) => Promise<void>;
  deleteImage: (id: number) => Promise<void>;
}
const MenuContext = createContext<MenuContextType | undefined>(undefined);
const LEGACY_MENU_STORAGE_KEY = 'mama-kitchen-menu-state-v1';
export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [dishes, setDishes] = useState<DishItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      localStorage.removeItem(LEGACY_MENU_STORAGE_KEY);
    } catch {
    }
  }, []);
  useEffect(() => {
    let cancelled = false;
    fetch(API_ENDPOINTS.PUBLIC_MENU)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { dishes?: DishItem[] } | null) => {
        if (!cancelled && data?.dishes && Array.isArray(data.dishes)) {
          setDishes(data.dishes);
        }
      })
      .catch((err) => console.error('Failed to load menu:', err))
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);
  const syncRequest = (method: 'POST' | 'PATCH' | 'DELETE', body?: unknown, query = '') => {
    fetch(`${API_ENDPOINTS.PUBLIC_MENU}${query}`, {
      method,
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
      credentials: 'same-origin',
    }).catch((err) => console.error('Failed to sync menu change:', err));
  };
  const toggleAvailability = (id: number) => {
    const target = dishes.find((d) => d.id === id);
    const nextAvailable = target?.available === false;
    setDishes((prev) =>
      prev.map((dish) => (dish.id === id ? { ...dish, available: nextAvailable } : dish))
    );
    syncRequest('PATCH', { id, updated: { available: nextAvailable } });
  };
  const toggleSale = (id: number) => {
    const target = dishes.find((d) => d.id === id);
    const nextSale = !target?.sale;
    setDishes((prev) => prev.map((dish) => (dish.id === id ? { ...dish, sale: nextSale } : dish)));
    syncRequest('PATCH', { id, updated: { sale: nextSale } });
  };
  const updateDish = (id: number, updated: Partial<DishItem>) => {
    setDishes((prev) => prev.map((dish) => (dish.id === id ? { ...dish, ...updated } : dish)));
    syncRequest('PATCH', { id, updated });
  };
  const uploadImage = async (id: number, file: File): Promise<void> => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('productId', String(id));
      const response = await fetch('/api/admin/image', {
        method: 'POST',
        body: formData,
        credentials: 'same-origin',
      });
      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || `Upload failed (${response.status})`);
      }
      const { publicUrl, storagePath } = (await response.json()) as {
        publicUrl: string;
        storagePath: string;
      };
      setDishes((prev) =>
        prev.map((dish) =>
          dish.id === id
            ? {
                ...dish,
                image: storagePath,
                uploadedDataUrl: publicUrl,
                storagePath,
              }
            : dish
        )
      );
      syncRequest('PATCH', {
        id,
        updated: { image: storagePath, uploadedDataUrl: publicUrl, storagePath },
      });
    } catch (err) {
      console.error('Failed to upload image:', err);
    }
  };
  const deleteImage = async (id: number): Promise<void> => {
    try {
      const dish = dishes.find((d) => d.id === id);
      if (!dish?.storagePath) {
        return;
      }
      await fetch(`/api/admin/image?path=${encodeURIComponent(dish.storagePath)}`, {
        method: 'DELETE',
        credentials: 'same-origin',
      });
      setDishes((prev) =>
        prev.map((d) =>
          d.id === id
            ? { ...d, uploadedDataUrl: undefined, image: 'maincourse', storagePath: null }
            : d
        )
      );
      syncRequest('PATCH', {
        id,
        updated: { image: 'maincourse', uploadedDataUrl: null, storagePath: null },
      });
    } catch (err) {
      console.error('Failed to delete image:', err);
    }
  };
  const addDish = (newDish: Omit<DishItem, 'id'> & { id?: number }): number => {
    const id = newDish.id ?? generateSecureDishId(dishes.map((d) => d.id));
    const dishWithId: DishItem = {
      ...newDish,
      id,
    };
    setDishes((prev) => [dishWithId, ...prev]);
    syncRequest('POST', { dish: dishWithId });
    return id;
  };
  const deleteDish = (id: number) => {
    setDishes((prev) => prev.filter((d) => d.id !== id));
    syncRequest('DELETE', undefined, `?id=${id}`);
  };
  const duplicateDish = (id: number): number => {
    const target = dishes.find((d) => d.id === id);
    if (!target) {
      return -1;
    }
    const nextId = generateSecureDishId(dishes.map((d) => d.id));
    let newImage = target.image;
    if (
      target.image &&
      (target.image.startsWith(`${target.id}.`) || target.image === String(target.id))
    ) {
      const ext = target.image.includes('.') ? target.image.split('.').pop() : 'jpg';
      newImage = `${nextId}.${ext}`;
    }
    const cloned: DishItem = {
      ...target,
      id: nextId,
      image: newImage,
      title: `${target.title} (Copy)`,
      title_ar: target.title_ar ? `${target.title_ar} (نسخة)` : undefined,
    };
    setDishes((prev) => [cloned, ...prev]);
    syncRequest('POST', { dish: cloned });
    return nextId;
  };
  const generateSecureId = () => generateSecureDishId(dishes.map((d) => d.id));
  const resetMenu = () => {
    setDishes(initialDishes as unknown as DishItem[]);
    syncRequest('DELETE', undefined, '?reset=true');
  };
  const compileServerJson = () => compileDishesToJson(dishes);
  return (
    <MenuContext.Provider
      value={{
        dishes,
        loading,
        endpoints: API_ENDPOINTS,
        toggleAvailability,
        toggleSale,
        updateDish,
        addDish,
        deleteDish,
        duplicateDish,
        generateSecureId,
        resetMenu,
        compileServerJson,
        uploadImage,
        deleteImage,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}
````

## File: .storybook/preview.tsx
````typescript
import '@mantine/core/styles.css';
import type { Decorator } from '@storybook/react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '@/theme';
export const parameters = {
  layout: 'fullscreen',
  options: {
    showPanel: false,
    storySort: (a, b) => a.title.localeCompare(b.title, undefined, { numeric: true }),
  },
  backgrounds: { disable: true },
};
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Mantine color scheme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
};
export const decorators: Decorator[] = [
  (renderStory, context) => {
    const scheme = (context.globals.theme || 'light') as 'light' | 'dark';
    return (
      <MantineProvider theme={theme} forceColorScheme={scheme}>
        <ColorSchemeScript />
        {renderStory()}
      </MantineProvider>
    );
  },
];
````

## File: package.json
````json
{
  "name": "mantine-vite-template",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:ui": "vitest --ui",
    "lint": "eslint . && stylelint 'src/**/*.css'",
    "lint:fix": "eslint . --fix && stylelint 'src/**/*.css' --fix",
    "format": "prettier --write \"**/*.{ts,tsx}\"",
    "format:check": "prettier --check \"**/*.{ts,tsx}\"",
    "typecheck": "tsc --noEmit",
    "validate": "bun run typecheck && bun run format:check && bun run lint && bun run test && bun run build"
  },
  "dependencies": {
    "@mantine/core": "^8.3.13",
    "@mantine/hooks": "^8.3.13",
    "@supabase/ssr": "^0.12.7",
    "@supabase/supabase-js": "^2.119.2",
    "@tabler/icons-react": "^3.50.0",
    "@vitejs/plugin-react": "^5.1.2",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.9.4"
  },
  "devDependencies": {
    "@eslint/js": "^9.37.0",
    "@ianvs/prettier-plugin-sort-imports": "^4.7.0",
    "@storybook/addon-themes": "^10.2.3",
    "@storybook/react": "^10.2.3",
    "@storybook/react-vite": "^10.2.3",
    "@testing-library/dom": "^10.4.1",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.0",
    "@testing-library/user-event": "^14.6.1",
    "@types/node": "^25.0.0",
    "@types/react": "^19.2.2",
    "@types/react-dom": "^19.2.1",
    "eslint": "^9.37.0",
    "eslint-config-mantine": "^4.0.3",
    "eslint-plugin-jsx-a11y": "^6.10.2",
    "eslint-plugin-react": "^7.37.5",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.26",
    "identity-obj-proxy": "^3.0.0",
    "jsdom": "^27.0.0",
    "postcss": "^8.5.6",
    "postcss-preset-mantine": "^1.18.0",
    "postcss-simple-vars": "^7.0.1",
    "prettier": "^3.6.2",
    "prop-types": "^15.8.1",
    "storybook": "^10.2.3",
    "stylelint": "^17.0.0",
    "stylelint-config-standard-scss": "^17.0.0",
    "typescript": "^5.9.3",
    "typescript-eslint": "^8.46.0",
    "vite": "^7.1.9",
    "vite-tsconfig-paths": "^6.0.0",
    "vitest": "^4.0.0"
  }
}
````
