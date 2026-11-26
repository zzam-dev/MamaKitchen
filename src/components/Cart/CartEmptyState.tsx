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

