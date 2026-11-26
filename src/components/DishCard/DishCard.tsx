import React, { useState } from 'react';
import { IconCheck } from '@tabler/icons-react';
import {
  Box,
  Button,
  Card,
  Group,
  Image,
  Stack,
  Text,
  Transition,
  useComputedColorScheme,
} from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens, getNeumorphicCardStyle } from '@/styles/neumorphic';
import type { DishCardProps, DishSize, SizeLabel } from './DishCard.types';
import { DishDetailModal } from './DishDetailModal';
import { PriceTagCapsule } from './PriceTagCapsule';
import { SaleBadge } from './SaleBadge';

/**
 * ELEMENT: Dish Card
 * Identity: Core food showcase card with omnidirectional hover lift,
 *           image presentation, price capsule, and modal detail inspection.
 */
export function DishCard({
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

  const [modalOpen, setModalOpen] = useState(false);
  const [added, setAdded] = useState(false);

  const safeSizes = sizes && sizes.length > 0 ? sizes : [{ label: 'S' as SizeLabel, price: 0 }];
  const defaultSize = safeSizes[0];

  const currentTitle = isArabic && title_ar ? title_ar : title;
  const secondaryTitle = isArabic ? title : title_ar;
  const currentDesc = isArabic && description_ar ? description_ar : description;

  const isSale = Boolean(sale && (defaultSize?.discountedPrice != null || perPiece?.discountedPrice != null));
  const displayPrice = isSale && defaultSize?.discountedPrice != null
    ? defaultSize.discountedPrice
    : defaultSize.price;
  const originalPrice = isSale && defaultSize?.discountedPrice != null
    ? defaultSize.price
    : null;

  const handleQuickAddToCart = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!available) return;

    addItem({
      dishId: id ?? Math.floor(Math.random() * 100000),
      title: currentTitle,
      sizeLabel: defaultSize.label,
      unitPrice: displayPrice,
      quantity: 1,
      image,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const handleModalAddToCart = (selection: { sizeLabel: string; unitPrice: number; quantity: number }) => {
    if (!available) return;
    addItem({
      dishId: id ?? Math.floor(Math.random() * 100000),
      title: currentTitle,
      sizeLabel: selection.sizeLabel,
      unitPrice: selection.unitPrice,
      quantity: selection.quantity,
      image,
    });
  };

  return (
    <>
      <Card
        ref={ref}
        radius="lg"
        p={0}
        withBorder={false}
        onClick={() => available && setModalOpen(true)}
        style={getNeumorphicCardStyle(isDark, hovered, available)}
      >
        {/* ELEMENT: Unavailable Overlay & Status Badge */}
        {!available && (
          <Box
            pos="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            style={{
              zIndex: 10,
              backgroundColor: 'rgba(28, 20, 16, 0.55)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'inherit',
              pointerEvents: 'auto',
              cursor: 'not-allowed',
            }}
          >
            <SaleBadge variant="dark" size="md">
              {t.unavailable}
            </SaleBadge>
          </Box>
        )}

        {/* ELEMENT: Dish Photography & Sale Badge */}
        <Box pos="relative">
          <Image
            src={image}
            alt={currentTitle}
            height={135}
            style={{ objectFit: 'cover', display: 'block', width: '100%' }}
          />
          <Transition mounted={sale && hovered} transition="fade" duration={200}>
            {(styles) => (
              <Box
                pos="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                style={{ ...styles, background: 'rgba(0,0,0,0.18)' }}
              />
            )}
          </Transition>
          {sale && <SaleBadge absolute />}
        </Box>

        {/* ELEMENT: Dish Content & Actions */}
        <Stack gap={6} p="xs" pt="sm">
          <Text fw={700} size="sm" lh={1.2} lineClamp={1}>
            {currentTitle}
          </Text>

          <Text
            size="xs"
            lineClamp={2}
            style={{ color: isDark ? '#D4BFA8' : '#5a3a28', minHeight: 32 }}
          >
            {currentDesc}
          </Text>

          <Group justify="space-between" align="center" mt={4}>
            <PriceTagCapsule
              isDark={isDark}
              isOnSale={isSale}
              available={available}
              displayPrice={displayPrice}
              originalPrice={originalPrice}
            />

            {available && (
              <Button
                size="xs"
                radius="md"
                leftSection={added ? <IconCheck size={14} stroke={2.5} /> : undefined}
                onClick={handleQuickAddToCart}
                style={{
                  fontWeight: 800,
                  transition: 'background-color 150ms ease, border-color 150ms ease, color 150ms ease',
                  backgroundColor: added ? '#2f9e44' : isDark ? '#2e2019' : '#FFF3F0',
                  color: added ? '#FFFFFF' : brandTokens.red,
                  border: `1px solid ${
                    added ? '#40c057' : isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)'
                  }`,
                  boxShadow: added
                    ? '0 2px 8px rgba(47, 158, 68, 0.3)'
                    : '0 1px 3px rgba(0,0,0,0.05)',
                }}
              >
                {added ? t.addedToOrder : t.addToOrder}
              </Button>
            )}
          </Group>
        </Stack>
      </Card>

      {/* ELEMENT: Customization & Detail Dialog Modal */}
      <DishDetailModal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title={currentTitle}
        secondaryTitle={secondaryTitle}
        description={currentDesc}
        image={image}
        sale={Boolean(sale)}
        sizes={safeSizes}
        perPiece={perPiece}
        isDark={isDark}
        onAddToCart={handleModalAddToCart}
      />
    </>
  );
}
