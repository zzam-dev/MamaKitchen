import React from 'react';
import { Box, useComputedColorScheme } from '@mantine/core';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens, neumorphicTokens } from '@/styles/neumorphic';

/**
 * ============================================================================
 * ELEMENT: Scalable Badge (SaleBadge)
 * ============================================================================
 * Identity & Visual Role:
 * A scalable, high-visibility pill indicator used to communicate promotional
 * discounts (e.g. "SALE") or status flags (e.g. "UNAVAILABLE").
 *
 * Variants:
 * 1. variant="sale" (Promotional):
 *    - Vibrant radial gradient from crimson to deep brand maroon.
 *    - Ambient red neumorphic glow lifting it off food imagery.
 *    - Subtle white border in light mode, clean borderless in dark mode.
 * 2. variant="dark" (Status / Sold-Out):
 *    - Roasted cocoa background matching dark neumorphic surfaces.
 *    - Subtle neutral black shadow diffusion.
 *
 * Scalability:
 * Offers standard size presets ('xs' through 'xl') with an optional multiplier
 * `scale` prop (e.g. scale={1.25}) for fluid proportional resizing of padding,
 * font size, and corner radii.
 * ============================================================================
 */

export type SaleBadgeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const SALE_BADGE_SIZES: Record<
  SaleBadgeSize,
  {
    fontSize: number;
    paddingX: number;
    paddingY: number;
    radius: number;
    top: number;
    offset: number;
  }
> = {
  xs: { fontSize: 9, paddingX: 6, paddingY: 2, radius: 6, top: 8, offset: 8 },
  sm: { fontSize: 10, paddingX: 8, paddingY: 3, radius: 8, top: 10, offset: 10 },
  md: { fontSize: 12, paddingX: 12, paddingY: 4, radius: 8, top: 12, offset: 12 },
  lg: { fontSize: 14, paddingX: 16, paddingY: 6, radius: 10, top: 14, offset: 14 },
  xl: { fontSize: 16, paddingX: 20, paddingY: 8, radius: 12, top: 16, offset: 16 },
};

export interface SaleBadgeProps {
  /** Size preset for scalable typography and dimensions. Defaults to 'sm'. */
  size?: SaleBadgeSize;
  /** Custom scale factor multiplier (e.g. 1.25 or 1.5). Defaults to 1. */
  scale?: number;
  /** When true, positions the badge absolutely (for use over an image). Defaults to false. */
  absolute?: boolean;
  /** Visual variant: 'sale' (red radial gradient) or 'dark' (status / unavailable overlay). */
  variant?: 'sale' | 'dark' | 'filled';
  /** Mantine Badge color alias: 'dark' maps to dark variant, 'red' / default maps to sale. */
  color?: string;
  /** Custom badge content. Defaults to {t.sale} if omitted. */
  children?: React.ReactNode;
  /** Additional custom styles */
  style?: React.CSSProperties;
  className?: string;
}

export function SaleBadge({
  size = 'sm',
  scale = 1.2,
  absolute = false,
  variant = 'sale',
  color,
  children,
  style,
  className,
}: SaleBadgeProps) {
  const { t, direction } = useLanguage();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: false });
  const isDark = computedColorScheme === 'dark';

  const isDarkVariant = variant === 'dark' || color === 'dark';
  const base = SALE_BADGE_SIZES[size] || SALE_BADGE_SIZES.sm;
  const multiplier = typeof scale === 'number' && scale > 0 ? scale : 1;

  const fontSize = Math.round(base.fontSize * multiplier);
  const px = Math.round(base.paddingX * multiplier);
  const py = Math.max(2, Math.round(base.paddingY * multiplier));
  const radius = Math.round(base.radius * multiplier);
  const top = Math.round(base.top * multiplier);
  const offset = Math.round(base.offset * multiplier);

  return (
    <Box
      px={px}
      py={py}
      pos={absolute ? 'absolute' : undefined}
      top={absolute ? top : undefined}
      className={className}
      style={{
        [direction === 'rtl' ? 'left' : 'right']: absolute ? offset : undefined,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: absolute ? 5 : 1,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        borderRadius: radius,
        fontSize,
        fontWeight: 800,
        userSelect: 'none',
        lineHeight: 1.2,
        transition: 'transform 150ms ease, box-shadow 150ms ease',
        ...(isDarkVariant
          ? {
              backgroundColor: '#261b17',
              color: '#FDF2F0',
              border: 'none',
              boxShadow: neumorphicTokens.shadows.badge.dark[isDark ? 'dark' : 'light'],
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }
          : {
              background: `radial-gradient(100% 80% at bottom, #e03131 0%, ${brandTokens.red} 75%)`,
              color: '#FFFFFF',
              border: isDark ? 'none' : '1px solid rgba(255, 255, 255, 0.35)',
              boxShadow: neumorphicTokens.shadows.badge.sale[isDark ? 'dark' : 'light'],
              letterSpacing: '0.04em',
            }),
        ...style,
      }}
    >
      {children ?? t.sale}
    </Box>
  );
}
