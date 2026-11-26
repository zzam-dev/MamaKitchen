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
      // ignore
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

      {/* ELEMENT: Utility Controls Group */}
      {/* Identity: Neumorphic action controls (Language, Cart, Theme Toggle) */}
      <Group gap="xs">
        {/* ELEMENT: Language Switcher Control */}
        {/* Identity: Compact neumorphic toggle button switching between Arabic and English */}
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

        {/* ELEMENT: Cart Button with Count Badge */}
        {/* Identity: Neumorphic square icon button paired with active item indicator badge */}
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

        {/* ELEMENT: Theme Switcher Control */}
        {/* Identity: Neumorphic toggle cycling light (sun) and dark (moon) color schemes */}
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
