import { Box, Button, Collapse, Group, Image, Stack, Text, useComputedColorScheme } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { IconChevronDown, IconMinus, IconPlus } from '@tabler/icons-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens } from '@/theme';
import {
  getNeumorphicPriceTagStyle,
  getNeumorphicChipStyle,
  getNeumorphicControlStyle,
  neumorphicTokens,
} from '@/styles/neumorphic';
import { SaleBadge } from './SaleBadge';
import { PriceTagCapsule } from './PriceTagCapsule';
import type { DishCardProps, DishSize, SizeLabel } from './DishCard.types';

const ALL_SIZES: SizeLabel[] = ['S', 'M', 'L'];

/**
 * ELEMENT: Size Selection Chip Pill
 * Identity: Neumorphic portion size option (S / M / L) with active selection state
 */
function SizeButton({
  label,
  size,
  selected,
  sale,
  isDark,
  onClick,
}: {
  label: SizeLabel;
  size?: DishSize;
  selected: boolean;
  sale: boolean;
  isDark: boolean;
  onClick: () => void;
}) {
  const available = !!size;
  const hasDiscount = Boolean(sale && size?.discountedPrice != null);
  const displayPrice = hasDiscount ? size!.discountedPrice : size?.price;

  return (
    <Box
      onClick={available ? onClick : undefined}
      style={{
        ...getNeumorphicChipStyle(isDark, selected),
        padding: '4px 10px',
        borderRadius: 6,
        gap: 6,
        cursor: available ? 'pointer' : 'default',
        opacity: available ? 1 : 0.35,
      }}
    >
      <Text
        size="xs"
        fw={900}
        style={{ color: selected ? '#FFFFFF' : isDark ? '#E8A89E' : brandTokens.red }}
      >
        {label}
      </Text>
      {available && (
        <Group gap={4} align="baseline" wrap="nowrap">
          {hasDiscount && (
            <Text
              size="10px"
              fw={700}
              style={{
                color: selected
                  ? 'rgba(255, 255, 255, 0.75)'
                  : isDark
                    ? 'rgba(255, 255, 255, 0.45)'
                    : 'rgba(107, 21, 16, 0.55)',
                textDecoration: 'line-through',
              }}
            >
              {size.price}
            </Text>
          )}
          <Text
            size="xs"
            fw={800}
            style={{
              color: selected
                ? '#FFE066'
                : isDark
                  ? '#FFE066'
                  : '#7A1C14',
              letterSpacing: '0.02em',
            }}
          >
            {displayPrice} EGP
          </Text>
        </Group>
      )}
    </Box>
  );
}

export function DishListItem({
  id,
  title,
  title_ar,
  description,
  description_ar,
  image,
  sale,
  sizes,
  perPiece,
  available = true,
}: DishCardProps) {
  const { hovered, ref } = useHover();
  const { addItem } = useCart();
  const { t, isArabic } = useLanguage();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: false });
  const isDark = computedColorScheme === 'dark';
  const safeSizes = sizes && sizes.length > 0 ? sizes : [{ label: 'S' as SizeLabel, price: 0 }];
  const [expanded, setExpanded] = useState(false);
  const [selectedType, setSelectedType] = useState<'size' | 'piece'>('size');
  const [selectedSize, setSelectedSize] = useState<DishSize>(safeSizes[0]);
  const [pieceQty, setPieceQty] = useState<number>(1);
  const [added, setAdded] = useState(false);

  const currentTitle = isArabic && title_ar ? title_ar : title;
  const currentDesc = isArabic && description_ar ? description_ar : description;

  const isPieceMode = selectedType === 'piece' && !!perPiece;
  const minPrice = Math.min(
    ...safeSizes.map((s) => s.discountedPrice ?? s.price),
    perPiece ? (sale && perPiece.discountedPrice != null ? perPiece.discountedPrice : perPiece.price) : Infinity
  );
  const maxPrice = Math.max(...safeSizes.map((s) => s.price));
  const isSingleSize = safeSizes.length === 1 && !perPiece;
  const isOnSale = Boolean(sale);

  const priceLabel = isSingleSize
    ? `${safeSizes[0].discountedPrice ?? safeSizes[0].price} ${t.egp}`
    : `${minPrice === Infinity ? 0 : minPrice}–${maxPrice === -Infinity ? 0 : maxPrice} ${t.egp}`;

  const originalPriceLabel = isSingleSize && sale && safeSizes[0].discountedPrice != null
    ? `${safeSizes[0].price} ${t.egp}`
    : null;

  const currentPieceTotal = (perPiece
    ? (sale && perPiece.discountedPrice != null ? perPiece.discountedPrice : perPiece.price)
    : 0) * pieceQty;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!available) return;

    const unitPrice = isPieceMode
      ? (sale && perPiece?.discountedPrice != null ? perPiece.discountedPrice : perPiece?.price ?? 0)
      : (sale && selectedSize.discountedPrice != null ? selectedSize.discountedPrice : selectedSize.price);

    addItem({
      dishId: id ?? Math.floor(Math.random() * 100000),
      title: currentTitle,
      sizeLabel: isPieceMode ? (isArabic ? 'قطعة' : 'Pc') : selectedSize.label,
      unitPrice,
      quantity: isPieceMode ? pieceQty : 1,
      image,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  // --------------------------------------------------------------------
  // ELEMENT: Dish List Item Row
  // Identity: Horizontal list item with hover lift, expandable details
  // --------------------------------------------------------------------
  return (
    <Box
      ref={ref}
      py="sm"
      px="sm"
      pos="relative"
      onClick={() => available && setExpanded((v) => !v)}
      style={{
        cursor: available ? 'pointer' : 'not-allowed',
        borderBottom: isDark ? 'none' : '1px solid rgba(0, 0, 0, 0.06)',
        transition:
          'background 180ms ease, border-radius 180ms ease, box-shadow 180ms ease, filter 150ms ease, opacity 150ms ease, transform 180ms ease',
        transform: hovered && available && !expanded ? 'translateY(-2px)' : 'none',
        borderRadius: expanded && available ? 12 : 8,
        filter: available ? undefined : 'grayscale(0.85)',
        opacity: available ? 1 : 0.55,
        background: expanded && available
          ? (isDark ? 'rgba(255, 255, 255, 0.06)' : '#ffffff')
          : hovered && available
            ? (isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.75)')
            : 'transparent',
        boxShadow: expanded && available
          ? (isDark ? '0 0 24px rgba(0,0,0,0.5)' : '0 0 20px rgba(130, 85, 55, 0.12), 0 0 8px rgba(255, 255, 255, 0.8)')
          : hovered && available
            ? (isDark ? '0 0 16px rgba(0,0,0,0.35)' : '0 0 14px rgba(130, 85, 55, 0.08), 0 0 6px rgba(255, 255, 255, 0.6)')
            : undefined,
      }}
    >
      {/* ELEMENT: Unavailable Status Overlay */}
      {!available && (
        <Box
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          style={{
            zIndex: 2,
            backgroundColor: 'rgba(28, 20, 16, 0.15)',
            borderRadius: 'inherit',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* ELEMENT: Always-Visible Primary Summary Row */}
      <Group justify="space-between" wrap="nowrap" gap="xs">
        <Group gap="xs" wrap="nowrap" style={{ flex: 1, minWidth: 0 }}>
          <Text
            fw={700}
            size="sm"
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              textDecoration: !available ? 'line-through' : undefined,
              color: isDark ? '#FFF9F0' : '#2A170A',
              flexShrink: 1,
              minWidth: 0,
            }}
          >
            {currentTitle}
          </Text>
          {available && isOnSale && <SaleBadge />}
          {!available && (
            <SaleBadge variant="dark" size="xs">
              {t.unavailable}
            </SaleBadge>
          )}
        </Group>

        {/* Popping Price Tag + Chevron Indicator */}
        <Group gap={8} wrap="nowrap" align="center" style={{ flexShrink: 0 }}>
          <PriceTagCapsule
            isDark={isDark}
            isOnSale={isOnSale}
            available={available}
            displayPrice={priceLabel}
            originalPrice={originalPriceLabel}
            currencySuffix=""
          />

          {available && (
            <IconChevronDown
              size={18}
              stroke={2.2}
              style={{
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 200ms ease, color 150ms ease',
                color: expanded
                  ? (isDark ? '#FFE066' : brandTokens.red)
                  : (isDark ? '#D4BFA8' : '#5A3A28'),
                flexShrink: 0,
              }}
            />
          )}
        </Group>
      </Group>

      {/* Expandable details */}
      <Collapse in={expanded}>
        <Stack gap="sm" mt="sm" onClick={(e) => e.stopPropagation()}>
          <Group gap="sm" align="flex-start" wrap="nowrap">
            <Image
              src={image}
              alt={currentTitle}
              w={104}
              h={76}
              radius="md"
              style={{
                objectFit: 'cover',
                flexShrink: 0,
                border: isDark ? 'none' : '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: isDark
                  ? '0 0 14px rgba(0,0,0,0.6)'
                  : '0 0 10px rgba(130, 85, 55, 0.1), 0 0 4px rgba(255, 255, 255, 0.8)',
              }}
            />
            <Stack gap={4} style={{ flex: 1, minWidth: 0 }}>
              {available && isOnSale && (
                <Box mb={2}>
                  <SaleBadge />
                </Box>
              )}
              <Text
                size="xs"
                style={{
                  color: isDark ? '#FDF2F0' : '#2A170A',
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                {currentDesc}
              </Text>
            </Stack>
          </Group>

          {/* Size + piece buttons */}
          <Group gap={6} wrap="wrap">
            {ALL_SIZES.map((label) => {
              const sizeObj = sizes.find((s) => s.label === label);
              return (
                <SizeButton
                  key={label}
                  label={label}
                  size={sizeObj}
                  selected={selectedType === 'size' && selectedSize.label === label}
                  sale={sale}
                  isDark={isDark}
                  onClick={() => {
                    if (sizeObj) {
                      setSelectedSize(sizeObj);
                      setSelectedType('size');
                    }
                  }}
                />
              );
            })}

            {perPiece && (
              <Box
                onClick={() => setSelectedType('piece')}
                style={{
                  ...getNeumorphicChipStyle(isDark, selectedType === 'piece'),
                  padding: '4px 10px',
                  borderRadius: 6,
                  gap: 6,
                }}
              >
                <Text
                  size="xs"
                  fw={900}
                  style={{ color: selectedType === 'piece' ? '#FFFFFF' : isDark ? '#E8A89E' : brandTokens.red }}
                >
                  {t.perPieceLabel}
                </Text>
                <Group gap={4} align="baseline" wrap="nowrap">
                  {sale && perPiece.discountedPrice != null && (
                    <Text
                      size="10px"
                      fw={700}
                      style={{
                        color: selectedType === 'piece'
                          ? 'rgba(255, 255, 255, 0.75)'
                          : isDark
                            ? 'rgba(255, 255, 255, 0.45)'
                            : 'rgba(140, 28, 19, 0.55)',
                        textDecoration: 'line-through',
                      }}
                    >
                      {perPiece.price}
                    </Text>
                  )}
                  <Text
                    size="xs"
                    fw={800}
                    style={{
                      color: selectedType === 'piece'
                        ? '#FFE066'
                        : isDark
                          ? '#FFE066'
                          : '#7A1C14',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {perPiece.discountedPrice != null && sale ? perPiece.discountedPrice : perPiece.price} {t.egp}
                  </Text>
                </Group>
              </Box>
            )}
          </Group>

          {/* Stepper when piece mode is active */}
          {isPieceMode && perPiece && (
            <Group gap="sm" align="center" pt={2}>
              <Text size="xs" fw={600} style={{ color: isDark ? '#D4BFA8' : '#5A3A28' }}>
                {t.quantity}:
              </Text>
              <Group gap={6} align="center">
                <Box
                  onClick={(e) => {
                    e.stopPropagation();
                    setPieceQty((q) => Math.max(1, q - 1));
                  }}
                  style={{
                    ...getNeumorphicControlStyle(isDark),
                    width: 24,
                    height: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 6,
                    cursor: pieceQty > 1 ? 'pointer' : 'default',
                    userSelect: 'none',
                    opacity: pieceQty > 1 ? 1 : 0.35,
                  }}
                >
                  <IconMinus size={12} stroke={2.5} />
                </Box>
                <Text size="xs" fw={800} style={{ minWidth: 20, textAlign: 'center', color: isDark ? '#FFE066' : brandTokens.red }}>
                  {pieceQty}
                </Text>
                <Box
                  onClick={(e) => {
                    e.stopPropagation();
                    setPieceQty((q) => q + 1);
                  }}
                  style={{
                    ...getNeumorphicControlStyle(isDark),
                    width: 24,
                    height: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 6,
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <IconPlus size={12} stroke={2.5} />
                </Box>
                <Text
                  size="xs"
                  fw={900}
                  style={{
                    color: isDark ? '#FFE066' : '#7A1C14',
                    backgroundColor: isDark ? 'rgba(255, 224, 102, 0.15)' : 'rgba(140, 28, 19, 0.08)',
                    padding: '2px 8px',
                    borderRadius: 6,
                    border: isDark ? 'none' : '1px solid rgba(140, 28, 19, 0.15)',
                    boxShadow: isDark
                      ? '0 0 6px rgba(0, 0, 0, 0.35)'
                      : '0 0 6px rgba(130, 85, 55, 0.06), 0 0 4px rgba(255, 255, 255, 0.8)',
                    marginLeft: 6,
                  }}
                >
                  {t.totalAmount} {currentPieceTotal} {t.egp}
                </Text>
              </Group>
            </Group>
          )}

          {/* Add to order button */}
          {available && (
            <Group justify="flex-end" pt={4}>
              <Button
                size="xs"
                radius="md"
                onClick={handleAddToCart}
                style={{
                  fontWeight: 800,
                  transition: 'background-color 150ms ease, border-color 150ms ease, color 150ms ease',
                  backgroundColor: added ? '#2f9e44' : brandTokens.red,
                  color: '#FFFFFF',
                  boxShadow: added
                    ? '0 2px 8px rgba(47, 158, 68, 0.3)'
                    : '0 2px 8px rgba(140, 28, 19, 0.3)',
                }}
              >
                {added ? t.addedToOrder : t.addToOrder}
              </Button>
            </Group>
          )}
        </Stack>
      </Collapse>
    </Box>
  );
}
