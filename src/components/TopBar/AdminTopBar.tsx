import {
  ActionIcon,
  Badge,
  Button,
  Group,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconExternalLink, IconMoon, IconSun, IconToolsKitchen2 } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens } from '@/theme';

export function AdminTopBar() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: false });
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
        {/* Quick link back to customer menu storefront */}
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

        {/* Language switcher button */}
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
      </Group>
    </Group>
  );
}
