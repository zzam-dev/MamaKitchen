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
        {/* Thumbnail */}
        <Image
          src={item.image}
          alt={item.title}
          w={52}
          h={52}
          radius="md"
          style={{ objectFit: 'cover', flexShrink: 0 }}
        />

        {/* Details */}
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

        {/* Quantity controls + Item Total */}
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

