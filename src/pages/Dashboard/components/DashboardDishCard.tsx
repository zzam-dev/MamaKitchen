import React from 'react';
import { IconCopy, IconPencil, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Badge, Card, Divider, Group, Image, Stack, Switch, Text, Tooltip } from '@mantine/core';
import { dishImages } from '@/assets/images';
import { useLanguage } from '@/context/LanguageContext';
import type { DishItem } from '@/context/MenuContext';

export interface DashboardDishCardProps {
  dish: DishItem;
  onToggleAvailability: (id: number) => void;
  onEdit: (dish: DishItem) => void;
  onDuplicate: (id: number) => void;
  onDelete: (id: number) => void;
}

export function DashboardDishCard({
  dish,
  onToggleAvailability,
  onEdit,
  onDuplicate,
  onDelete,
}: DashboardDishCardProps) {
  const { t, isArabic } = useLanguage();
  const isUnavailable = dish.available === false;
  const displayImage =
    dish.uploadedDataUrl || dishImages[dish.image] || dish.image || dishImages.maincourse;

  return (
    <Card
      withBorder
      radius="lg"
      p="md"
      shadow="xs"
      style={{
        opacity: isUnavailable ? 0.65 : 1,
        transition: 'all 150ms ease',
      }}
    >
      <Group justify="space-between" align="flex-start" wrap="nowrap" gap="sm">
        <Image
          src={displayImage}
          alt={dish.title}
          w={64}
          h={64}
          radius="md"
          style={{ objectFit: 'cover', flexShrink: 0 }}
        />

        <Stack gap={2} style={{ flex: 1, minWidth: 0 }}>
          <Group gap={6} wrap="nowrap" align="center">
            <Badge
              size="xs"
              variant="default"
              radius="sm"
              style={{ fontFamily: 'monospace' }}
            >
              #{dish.id}
            </Badge>
            <Text fw={700} size="sm" lineClamp={1}>
              {isArabic && dish.title_ar ? dish.title_ar : dish.title}
            </Text>
          </Group>

          {isArabic ? (
            <Text size="xs" c="dimmed" lineClamp={1}>
              {dish.title}
            </Text>
          ) : dish.title_ar ? (
            <Text size="xs" c="dimmed" lineClamp={1}>
              {dish.title_ar}
            </Text>
          ) : null}

          <Group gap={4} mt={4}>
            <Badge size="xs" variant="light" color="brand">
              {dish.category}
            </Badge>
            {dish.sale && (
              <Badge size="xs" color="red" variant="filled">
                {t.sale}
              </Badge>
            )}
            {isUnavailable && (
              <Badge size="xs" color="gray" variant="filled">
                {t.unavailable}
              </Badge>
            )}
          </Group>
        </Stack>
      </Group>

      <Divider my="sm" />

      {/* Sizes and Prices summary */}
      <Group justify="space-between" align="center">
        <Group gap={4}>
          {(dish.sizes || []).map((s) => (
            <Badge key={s.label} size="sm" variant="outline" color="brand" radius="sm">
              {s.label}:{' '}
              {dish.sale && s.discountedPrice != null ? s.discountedPrice : s.price} {t.egp}
            </Badge>
          ))}
          {dish.perPiece && (
            <Badge size="sm" variant="outline" color="yellow" radius="sm">
              {t.pc}:{' '}
              {dish.sale && dish.perPiece.discountedPrice != null
                ? dish.perPiece.discountedPrice
                : dish.perPiece.price}{' '}
              {t.egp}
            </Badge>
          )}
        </Group>
      </Group>

      <Divider my="sm" />

      {/* Controls & Quick Actions */}
      <Group justify="space-between" align="center">
        <Switch
          size="xs"
          color="green"
          label={t.inStock}
          checked={!isUnavailable}
          onChange={() => onToggleAvailability(dish.id)}
        />

        <Group gap={6}>
          <Tooltip label={t.editDish}>
            <ActionIcon
              variant="light"
              color="brand"
              size="md"
              radius="md"
              onClick={() => onEdit(dish)}
              aria-label={t.editDish}
            >
              <IconPencil size={16} stroke={1.8} />
            </ActionIcon>
          </Tooltip>

          <Tooltip label={t.duplicateDish}>
            <ActionIcon
              variant="subtle"
              color="gray"
              size="md"
              radius="md"
              onClick={() => onDuplicate(dish.id)}
              aria-label={t.duplicateDish}
            >
              <IconCopy size={16} stroke={1.8} />
            </ActionIcon>
          </Tooltip>

          <Tooltip label={t.deleteDish}>
            <ActionIcon
              variant="subtle"
              color="red"
              size="md"
              radius="md"
              onClick={() => {
                if (
                  window.confirm(
                    isArabic ? `هل تريد حذف "${dish.title}"؟` : `Delete "${dish.title}"?`
                  )
                ) {
                  onDelete(dish.id);
                }
              }}
              aria-label={t.deleteDish}
            >
              <IconTrash size={16} stroke={1.8} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>
    </Card>
  );
}

