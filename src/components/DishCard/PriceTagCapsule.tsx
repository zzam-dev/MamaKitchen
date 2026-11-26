import React from 'react';
import { Box, Group, Text } from '@mantine/core';
import { useLanguage } from '@/context/LanguageContext';
import { getNeumorphicPriceTagStyle } from '@/styles/neumorphic';

export interface PriceTagCapsuleProps {
  isDark: boolean;
  isOnSale: boolean;
  available?: boolean;
  displayPrice: number | string;
  originalPrice?: number | string | null;
  currencySuffix?: string;
  size?: 'sm' | 'md';
}

/**
 * ELEMENT: Price Tag Capsule
 * Identity: Symmetrical neumorphic price badge showing current price,
 *           with strikethrough for discounted sale prices or unavailable items.
 */
export function PriceTagCapsule({
  isDark,
  isOnSale,
  available = true,
  displayPrice,
  originalPrice,
  currencySuffix,
  size = 'sm',
}: PriceTagCapsuleProps) {
  const { t } = useLanguage();
  const suffix = currencySuffix ?? t.egp;
  const showCrossedOut = Boolean(
    available && isOnSale && originalPrice != null && originalPrice !== displayPrice
  );

  return (
    <Box style={getNeumorphicPriceTagStyle(isDark, isOnSale, available)}>
      <Group gap={6} align="baseline" wrap="nowrap">
        {showCrossedOut && (
          <Text
            size="xs"
            fw={700}
            style={{
              color: isDark ? 'rgba(255, 255, 255, 0.45)' : 'rgba(140, 28, 19, 0.55)',
              textDecoration: 'line-through',
              lineHeight: 1.1,
              whiteSpace: 'nowrap',
            }}
          >
            {originalPrice} {suffix}
          </Text>
        )}
        <Text
          fw={900}
          size={size}
          style={{
            color: !available
              ? (isDark ? '#888888' : '#777777')
              : isOnSale
                ? (isDark ? '#FF8787' : '#9B2018')
                : (isDark ? '#FFE066' : '#6B1510'),
            lineHeight: 1.1,
            textDecoration: !available ? 'line-through' : undefined,
            whiteSpace: 'nowrap',
            letterSpacing: '0.02em',
          }}
        >
          {displayPrice} {suffix}
        </Text>
      </Group>
    </Box>
  );
}

