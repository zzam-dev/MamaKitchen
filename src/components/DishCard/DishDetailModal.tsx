import React, { useState } from 'react';
import { IconCheck, IconMinus, IconPlus, IconShoppingCart } from '@tabler/icons-react';
import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Group,
  Image,
  Modal,
  Stack,
  Text,
} from '@mantine/core';
import { useLanguage } from '@/context/LanguageContext';
import {
  brandTokens,
  getNeumorphicChipStyle,
  getNeumorphicControlStyle,
  getNeumorphicModalStyles,
  getNeumorphicStepperContainerStyle,
  neumorphicTokens,
} from '@/styles/neumorphic';
import type { DishSize, PerPieceOption, SizeLabel } from './DishCard.types';
import { SaleBadge } from './SaleBadge';

const ALL_SIZES: SizeLabel[] = ['S', 'M', 'L'];

export interface DishDetailModalProps {
  opened: boolean;
  onClose: () => void;
  title: string;
  secondaryTitle?: string;
  description: string;
  image: string;
  sale: boolean;
  sizes: DishSize[];
  perPiece?: PerPieceOption;
  isDark: boolean;
  onAddToCart: (selection: { sizeLabel: string; unitPrice: number; quantity: number }) => void;
}

/**
 * ELEMENT: Dish Detail & Customization Modal
 * Identity: High-elevation modal surface for portion selection, piece counter, and add-to-order CTA.
 */
export function DishDetailModal({
  opened,
  onClose,
  title,
  secondaryTitle,
  description,
  image,
  sale,
  sizes,
  perPiece,
  isDark,
  onAddToCart,
}: DishDetailModalProps) {
  const { t, isArabic } = useLanguage();
  const safeSizes = sizes && sizes.length > 0 ? sizes : [{ label: 'S' as SizeLabel, price: 0 }];

  const [selectedType, setSelectedType] = useState<'size' | 'piece'>('size');
  const [selectedSize, setSelectedSize] = useState<DishSize>(safeSizes[0]);
  const [pieceQty, setPieceQty] = useState<number>(1);
  const [added, setAdded] = useState(false);

  const isPieceMode = selectedType === 'piece' && !!perPiece;
  const isSizeSale = Boolean(sale && selectedSize?.discountedPrice != null);
  const isPieceSale = Boolean(sale && perPiece?.discountedPrice != null);
  const isOnSale = isPieceMode ? isPieceSale : isSizeSale;

  const originalUnitPrice = isPieceMode
    ? (perPiece?.price ?? 0)
    : (selectedSize?.price ?? 0);

  const unitPrice = isPieceMode
    ? isPieceSale
      ? perPiece.discountedPrice!
      : perPiece.price
    : selectedSize
      ? isSizeSale
        ? selectedSize.discountedPrice!
        : selectedSize.price
      : 0;

  const displayPrice = isPieceMode ? unitPrice * pieceQty : unitPrice;
  const originalDisplayPrice = isPieceMode ? originalUnitPrice * pieceQty : originalUnitPrice;

  const handleAdd = () => {
    onAddToCart({
      sizeLabel: isPieceMode ? (isArabic ? 'قطعة' : 'Pc') : selectedSize.label,
      unitPrice,
      quantity: isPieceMode ? pieceQty : 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="lg"
      radius="lg"
      centered
      title={
        <Group gap="xs" align="center" wrap="nowrap">
          <Text fw={800} size="lg" style={{ color: isDark ? '#FFF9F0' : '#2A170A' }}>
            {title}
          </Text>
          {sale && <SaleBadge />}
        </Group>
      }
      styles={getNeumorphicModalStyles(isDark)}
    >
      <Stack gap="md">
        {/* ELEMENT: Modal Hero Dish Photography */}
        <Box
          pos="relative"
          style={{
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: neumorphicTokens.shadows.image[isDark ? 'dark' : 'light'],
          }}
        >
          <Image
            src={image}
            alt={title}
            height={240}
            style={{ objectFit: 'cover', width: '100%', display: 'block' }}
          />
          {sale && <SaleBadge absolute size="md" />}
        </Box>

        {/* Dual Title Subtitle if present */}
        {secondaryTitle && (
          <Text
            size="xs"
            fw={700}
            style={{ color: isDark ? '#C9A880' : '#8A6340', marginTop: -6 }}
          >
            {secondaryTitle}
          </Text>
        )}

        {/* Full Meal Description */}
        <Text
          size="sm"
          style={{
            color: isDark ? '#FDF2F0' : '#2A170A',
            fontWeight: 500,
            lineHeight: 1.7,
          }}
        >
          {description}
        </Text>

        <Divider color={`${brandTokens.gold}33`} />

        {/* ELEMENT: Portion Size & Piece Option Chips */}
        <Stack gap={6}>
          <Text
            size="xs"
            fw={700}
            tt="uppercase"
            style={{ color: isDark ? '#C9A880' : '#7A5235', letterSpacing: '0.04em' }}
          >
            {t.sizesConfig || t.size}
          </Text>

          <Group gap={8} wrap="wrap">
            {ALL_SIZES.map((label) => {
              const sizeObj = sizes.find((s) => s.label === label);
              if (!sizeObj) {return null;}
              const isSelected = selectedType === 'size' && selectedSize.label === label;
              const hasDiscount = Boolean(sale && sizeObj.discountedPrice != null);
              const displayP = hasDiscount ? sizeObj.discountedPrice! : sizeObj.price;

              return (
                <Box
                  key={label}
                  onClick={() => {
                    setSelectedSize(sizeObj);
                    setSelectedType('size');
                  }}
                  style={getNeumorphicChipStyle(isDark, isSelected)}
                >
                  <Text
                    fw={900}
                    size="sm"
                    style={{
                      color: isSelected ? '#FFFFFF' : isDark ? '#E8A89E' : brandTokens.red,
                    }}
                  >
                    {label}
                  </Text>
                  <Group gap={4} align="baseline" wrap="nowrap">
                    {hasDiscount && (
                      <Text
                        size="xs"
                        fw={700}
                        style={{
                          color: isSelected
                            ? 'rgba(255, 255, 255, 0.75)'
                            : isDark
                              ? 'rgba(255, 255, 255, 0.45)'
                              : 'rgba(140, 28, 19, 0.55)',
                          textDecoration: 'line-through',
                        }}
                      >
                        {sizeObj.price}
                      </Text>
                    )}
                    <Text
                      fw={800}
                      size="sm"
                      style={{
                        color: isSelected ? '#FFE066' : isDark ? '#FFE066' : '#7A1C14',
                      }}
                    >
                      {displayP} {t.egp}
                    </Text>
                  </Group>
                </Box>
              );
            })}

            {perPiece && (
              <Box
                onClick={() => setSelectedType('piece')}
                style={getNeumorphicChipStyle(isDark, isPieceMode)}
              >
                <Text
                  fw={900}
                  size="sm"
                  style={{
                    color: isPieceMode ? '#FFFFFF' : isDark ? '#E8A89E' : brandTokens.red,
                  }}
                >
                  {t.perPieceLabel}
                </Text>
                <Group gap={4} align="baseline" wrap="nowrap">
                  {sale && perPiece.discountedPrice != null && (
                    <Text
                      size="xs"
                      fw={700}
                      style={{
                        color: isPieceMode
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
                    fw={800}
                    size="sm"
                    style={{
                      color: isPieceMode ? '#FFE066' : isDark ? '#FFE066' : '#7A1C14',
                    }}
                  >
                    {sale && perPiece.discountedPrice != null
                      ? perPiece.discountedPrice
                      : perPiece.price}{' '}
                    {t.egp}
                  </Text>
                </Group>
              </Box>
            )}
          </Group>
        </Stack>

        {/* ELEMENT: Quantity Stepper Tray & Controls */}
        {isPieceMode && perPiece && (
          <Group
            justify="space-between"
            align="center"
            p="sm"
            style={getNeumorphicStepperContainerStyle(isDark)}
          >
            <Text size="sm" fw={700} style={{ color: isDark ? '#D4BFA8' : '#5A3A28' }}>
              {t.quantity}:
            </Text>
            <Group gap={8} align="center">
              <ActionIcon
                size="md"
                variant="default"
                radius="md"
                style={getNeumorphicControlStyle(isDark)}
                onClick={() => setPieceQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                <IconMinus size={14} stroke={2.5} />
              </ActionIcon>
              <Text
                size="sm"
                fw={900}
                style={{
                  minWidth: 26,
                  textAlign: 'center',
                  color: isDark ? '#FFE066' : brandTokens.red,
                }}
              >
                {pieceQty}
              </Text>
              <ActionIcon
                size="md"
                variant="default"
                radius="md"
                style={getNeumorphicControlStyle(isDark)}
                onClick={() => setPieceQty((q) => q + 1)}
                aria-label="Increase quantity"
              >
                <IconPlus size={14} stroke={2.5} />
              </ActionIcon>
              <Text
                size="sm"
                fw={900}
                style={{
                  color: isDark ? '#FFE066' : '#7A1C14',
                  backgroundColor: isDark
                    ? 'rgba(255, 224, 102, 0.15)'
                    : 'rgba(140, 28, 19, 0.08)',
                  padding: '2px 8px',
                  borderRadius: 6,
                  border: isDark ? 'none' : '1px solid rgba(140, 28, 19, 0.15)',
                  boxShadow: isDark
                    ? '0 0 6px rgba(0, 0, 0, 0.35)'
                    : '0 0 6px rgba(130, 85, 55, 0.06), 0 0 4px rgba(255, 255, 255, 0.8)',
                  marginLeft: 6,
                }}
              >
                {t.totalAmount} {unitPrice * pieceQty} {t.egp}
              </Text>
            </Group>
          </Group>
        )}

        <Divider color={isDark ? 'rgba(255, 255, 255, 0.04)' : `${brandTokens.gold}33`} />

        {/* ELEMENT: Modal Footer (Total Price & Order CTA) */}
        <Group justify="space-between" align="center" wrap="nowrap">
          <div>
            <Text size="xs" fw={600} style={{ color: isDark ? '#C9A880' : '#7A5235' }}>
              {t.totalAmount}
            </Text>
            <Group gap={6} align="baseline">
              <Text
                fw={900}
                size="xl"
                style={{
                  color: isOnSale
                    ? isDark
                      ? '#FF8787'
                      : '#9B2018'
                    : isDark
                      ? '#FFE066'
                      : '#6B1510',
                  lineHeight: 1.1,
                }}
              >
                {displayPrice} {t.egp}
              </Text>
              {isOnSale && originalDisplayPrice > displayPrice && (
                <Text
                  size="xs"
                  fw={600}
                  style={{
                    color: isDark ? '#A9927D' : '#8C7260',
                    textDecoration: 'line-through',
                  }}
                >
                  {originalDisplayPrice} {t.egp}
                </Text>
              )}
            </Group>
          </div>

          <Button
            size="md"
            radius="xl"
            leftSection={
              added ? (
                <IconCheck size={18} stroke={2.5} />
              ) : (
                <IconShoppingCart size={18} stroke={2} />
              )
            }
            onClick={handleAdd}
            style={{
              fontWeight: 800,
              minWidth: 160,
              backgroundColor: added ? '#2f9e44' : brandTokens.red,
              color: '#ffffff',
              boxShadow: added
                ? '0 4px 14px rgba(47, 158, 68, 0.4)'
                : '0 4px 14px rgba(140, 28, 19, 0.35)',
              border: 'none',
              transition: 'background-color 150ms ease, transform 100ms ease, box-shadow 150ms ease',
            }}
          >
            {added ? t.addedToOrder : t.addToOrder}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}

