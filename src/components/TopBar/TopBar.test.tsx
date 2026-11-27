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

    // Initial state: light
    expect(document.documentElement.getAttribute('data-mantine-color-scheme')).toBe('light');

    // Click 1 -> dark
    fireEvent.click(toggleButton);
    expect(document.documentElement.getAttribute('data-mantine-color-scheme')).toBe('dark');

    // Click 2 -> light
    fireEvent.click(toggleButton);
    expect(document.documentElement.getAttribute('data-mantine-color-scheme')).toBe('light');
  });
});
