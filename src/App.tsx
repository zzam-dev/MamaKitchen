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
        // ignore
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
        // ignore
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
