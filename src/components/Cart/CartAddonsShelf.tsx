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
