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
