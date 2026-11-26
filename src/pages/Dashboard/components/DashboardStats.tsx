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

