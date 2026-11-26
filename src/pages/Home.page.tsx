import { useState } from 'react';
import { IconLayoutGrid, IconList, IconShoppingCart } from '@tabler/icons-react';
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  Tooltip,
  useComputedColorScheme,
} from '@mantine/core';
import { dishImages, paperTexture } from '@/assets/images';
import { DishCard, DishListItem } from '@/components/DishCard';
import type { DishSize } from '@/components/DishCard';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { useMenu } from '@/context/MenuContext';
import { getNeumorphicControlStyle, neumorphicTokens } from '@/styles/neumorphic';
import { brandTokens } from '@/theme';

const CARD_MIN_WIDTH = 160;
const GRID_MAX_WIDTH = 1200;

type ViewMode = 'grid' | 'list';

export function HomePage() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const { totalCount, totalPrice, openCart } = useCart();
  const { t } = useLanguage();
  const { dishes } = useMenu();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: false });
  const isDark = computedColorScheme === 'dark';

  return (
    <Stack gap="xl" p="xl" pb={totalCount > 0 ? 80 : 'xl'} align="center">
      <Group w="100%" maw={GRID_MAX_WIDTH} justify="space-between" align="center">
        <Title order={2}>{t.todaysMenu}</Title>

        {/* ELEMENT: View Mode Switcher Controls */}
        {/* Identity: Neumorphic action toggle buttons (Grid View vs List View) */}
        <Group gap={6}>
          <Tooltip label={t.gridView} withArrow>
            <ActionIcon
              variant={viewMode === 'grid' ? 'filled' : 'default'}
              size="lg"
              radius="md"
              onClick={() => setViewMode('grid')}
              aria-label={t.gridView}
              style={getNeumorphicControlStyle(isDark, viewMode === 'grid')}
            >
              <IconLayoutGrid size={18} stroke={1.8} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label={t.listView} withArrow>
            <ActionIcon
              variant={viewMode === 'list' ? 'filled' : 'default'}
              size="lg"
              radius="md"
              onClick={() => setViewMode('list')}
              aria-label={t.listView}
              style={getNeumorphicControlStyle(isDark, viewMode === 'list')}
            >
              <IconList size={18} stroke={1.8} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>

      {/* ELEMENT: Menu Presentation View (Grid vs List) */}
      {viewMode === 'grid' ? (
        /* ELEMENT: Storefront Dish Grid Container */
        <Box
          w="100%"
          maw={GRID_MAX_WIDTH}
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fill, minmax(${CARD_MIN_WIDTH}px, 1fr))`,
            gap: 'var(--mantine-spacing-lg)',
          }}
        >
          {dishes.map((dish) => (
            <DishCard
              key={dish.id}
              id={dish.id}
              title={dish.title}
              title_ar={dish.title_ar}
              description={dish.description}
              description_ar={dish.description_ar}
              image={
                dish.uploadedDataUrl ||
                dishImages[dish.image] ||
                dish.image ||
                dishImages.maincourse
              }
              sale={dish.sale}
              sizes={dish.sizes as DishSize[]}
              perPiece={dish.perPiece}
              available={dish.available}
            />
          ))}
        </Box>
      ) : (
        /* ELEMENT: Storefront Dish List Paper Container */
        /* Identity: Neumorphic parchment paper enclosure housing list rows */
        <Paper
          w="100%"
          maw={GRID_MAX_WIDTH}
          radius="lg"
          p="sm"
          style={{
            backgroundImage: `url(${paperTexture})`,
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat',
            backgroundColor: isDark ? '#23150d' : '#c49a6c',
            backgroundBlendMode: 'multiply',
            border: neumorphicTokens.borders.subtle[isDark ? 'dark' : 'light'],
            boxShadow: neumorphicTokens.shadows.card[isDark ? 'dark' : 'light'].resting,
            transition: 'background-color 150ms ease, border-color 150ms ease',
          }}
        >
          <Stack gap={0}>
            {dishes.map((dish) => (
              <DishListItem
                key={dish.id}
                id={dish.id}
                title={dish.title}
                title_ar={dish.title_ar}
                description={dish.description}
                description_ar={dish.description_ar}
                image={
                  dish.uploadedDataUrl ||
                  dishImages[dish.image] ||
                  dish.image ||
                  dishImages.maincourse
                }
                sale={dish.sale}
                sizes={dish.sizes as DishSize[]}
                perPiece={dish.perPiece}
                available={dish.available}
              />
            ))}
          </Stack>
        </Paper>
      )}

      {/* ELEMENT: Floating Cart Action Bar */}
      {/* Identity: Non-neumorphic sticky mobile CTA bar for instant checkout */}
      {totalCount > 0 && (
        <Box
          pos="fixed"
          bottom={16}
          left="50%"
          style={{
            transform: 'translateX(-50%)',
            zIndex: 99,
            width: 'calc(100% - 128px)',
            maxWidth: 420,
          }}
        >
          <Button
            fullWidth
            size="lg"
            radius="xl"
            onClick={openCart}
            style={{
              backdropFilter: 'blur(10px)',
              background: isDark
                ? `radial-gradient(120% 120% at bottom, #e03131cc 0%, ${brandTokens.red}55 75%)`
                : `radial-gradient(100% 120% at bottom, #c92626ee 0%, ${brandTokens.red}99 75%)`,
              border: isDark
                ? '1px solid rgba(113, 113, 113, 0.4)'
                : '1px solid rgba(255, 255, 255, 0.35)',
              boxShadow: isDark
                ? '0 6px 20px rgba(27, 0, 0, 0.4), 0 2px 6px rgba(0, 0, 0, 0.5)'
                : '0 6px 20px rgba(56, 12, 8, 0.75)',
              height: 48,
              padding: '0 16px',
              transition: 'transform 150ms ease, box-shadow 150ms ease',
            }}
          >
            <Group justify="space-between" w="100%" align="center" wrap="nowrap">
              {/* Item count and total price together on one side */}
              <Group gap={8} align="center" wrap="nowrap">
                <Badge
                  color="white"
                  c="brand"
                  variant="filled"
                  size="md"
                  radius="xl"
                  style={{ fontWeight: 800 }}
                >
                  {totalCount} {totalCount === 1 ? t.item : t.items}
                </Badge>
                <Text
                  fw={900}
                  size="md"
                  style={{
                    color: '#FFE066',
                    letterSpacing: '0.02em',
                  }}
                >
                  {totalPrice} {t.egp}
                </Text>
              </Group>

              {/* View order and shopping cart icon on the other side */}
              <Group gap={6} align="center" wrap="nowrap">
                <Text fw={800} size="sm" style={{ color: '#FFFFFF' }}>
                  {t.viewOrder}
                </Text>
                <IconShoppingCart size={18} stroke={2.2} style={{ color: '#FFFFFF' }} />
              </Group>
            </Group>
          </Button>
        </Box>
      )}
    </Stack>
  );
}
