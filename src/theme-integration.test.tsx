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

    // Click 1 -> dark
    act(() => {
      fireEvent.click(themeBtn);
    });
    expect(document.documentElement.getAttribute('data-mantine-color-scheme')).toBe('dark');
    expect(store['mantine-color-scheme-value']).toBe('dark');
    expect(store['mama-kitchen-color-scheme']).toBe('dark');

    // Click 2 -> light
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

    // Click -> dark
    act(() => {
      fireEvent.click(themeBtn);
    });
    expect(document.documentElement.getAttribute('data-mantine-color-scheme')).toBe('dark');
    expect(store['mantine-color-scheme-value']).toBe('dark');
    expect(store['mama-kitchen-color-scheme']).toBe('dark');

    // Click -> light
    act(() => {
      fireEvent.click(themeBtn);
    });
    expect(document.documentElement.getAttribute('data-mantine-color-scheme')).toBe('light');
    expect(store['mantine-color-scheme-value']).toBe('light');
    expect(store['mama-kitchen-color-scheme']).toBe('light');
  });
});
