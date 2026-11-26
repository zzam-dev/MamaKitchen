import React from 'react';
import {
  IconAlertTriangle,
  IconDice,
  IconDownload,
  IconTrash,
  IconUpload,
} from '@tabler/icons-react';
import {
  Badge,
  Box,
  Button,
  Code,
  Divider,
  FileButton,
  Group,
  Image,
  Modal,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { dishImages } from '@/assets/images';
import type { SizeLabel } from '@/components/DishCard';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens } from '@/styles/neumorphic';
import type { DishFormData } from '../dashboard.types';

export interface DashboardDishModalProps {
  opened: boolean;
  onClose: () => void;
  editingDishId: number | null;
  formData: DishFormData;
  setFormData: React.Dispatch<React.SetStateAction<DishFormData>>;
  onSave: () => void;
  onRandomizeId: () => void;
  onImageUpload: (file: File | null) => void;
  onRemoveImage: () => void;
  onDownloadPicture: () => void;
  sizeErrors: Partial<Record<SizeLabel, string>>;
  perPieceError?: string;
  hasPriceErrors: boolean;
  isDark: boolean;
}

export function DashboardDishModal({
  opened,
  onClose,
  editingDishId,
  formData,
  setFormData,
  onSave,
  onRandomizeId,
  onImageUpload,
  onRemoveImage,
  onDownloadPicture,
  sizeErrors,
  perPieceError,
  hasPriceErrors,
  isDark,
}: DashboardDishModalProps) {
  const { t } = useLanguage();

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<Text fw={700}>{editingDishId ? t.editDish : t.addNewDish}</Text>}
      size="lg"
      radius="md"
    >
      <Stack gap="md">
        {/* ELEMENT: Cryptographic Product ID Generator */}
        <Paper withBorder p="sm" radius="sm">
          <Group justify="space-between" align="center">
            <div>
              <Text size="xs" fw={700} c="dimmed" tt="uppercase">
                {t.productId}
              </Text>
              <Text fw={800} size="md" c="brand" style={{ fontFamily: 'monospace' }}>
                #{formData.id}
              </Text>
              <Text size="11px" c="dimmed">
                {t.secureIdHelp}
              </Text>
            </div>
            <Button
              variant="light"
              color="brand"
              size="xs"
              radius="md"
              leftSection={<IconDice size={15} stroke={2} />}
              onClick={onRandomizeId}
            >
              {t.generateSecureId}
            </Button>
          </Group>
        </Paper>

        {/* Titles */}
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
          <TextInput
            label={t.titleEn}
            placeholder="e.g. Agashi"
            required
            value={formData.title}
            onChange={(e) => setFormData((p) => ({ ...p, title: e.currentTarget.value }))}
          />
          <TextInput
            label={t.titleAr}
            placeholder="مثال: أقاشي دجاج"
            value={formData.title_ar}
            onChange={(e) => setFormData((p) => ({ ...p, title_ar: e.currentTarget.value }))}
          />
        </SimpleGrid>

        {/* Descriptions */}
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
          <Textarea
            label={t.descEn}
            placeholder="English description"
            minRows={2}
            value={formData.description}
            onChange={(e) => setFormData((p) => ({ ...p, description: e.currentTarget.value }))}
          />
          <Textarea
            label={t.descAr}
            placeholder="الوصف بالعربية"
            minRows={2}
            value={formData.description_ar}
            onChange={(e) =>
              setFormData((p) => ({ ...p, description_ar: e.currentTarget.value }))
            }
          />
        </SimpleGrid>

        {/* Category */}
        <Select
          label={t.categoryLabel}
          data={[
            { label: t.mains, value: 'main' },
            { label: t.stews, value: 'stew' },
            { label: t.salads, value: 'salad' },
            { label: t.sides, value: 'side' },
          ]}
          value={formData.category}
          onChange={(val) => setFormData((p) => ({ ...p, category: val || 'main' }))}
        />

        {/* Image Upload & ID Synchronization */}
        <Paper withBorder p="sm" radius="md">
          <Group justify="space-between" align="center" mb="xs">
            <Text size="xs" fw={700} c="dimmed" tt="uppercase">
              {t.imageKey}
            </Text>
            {formData.uploadedDataUrl ? (
              <Badge color="green" variant="light" size="sm">
                {t.customUpload}
              </Badge>
            ) : (
              <Badge color="gray" variant="light" size="sm">
                {t.presetImage}
              </Badge>
            )}
          </Group>

          <Group align="flex-start" gap="md" wrap="nowrap">
            <Image
              src={
                formData.uploadedDataUrl || dishImages[formData.image] || dishImages.maincourse
              }
              alt={formData.title || 'Dish preview'}
              w={84}
              h={84}
              radius="md"
              style={{
                objectFit: 'cover',
                flexShrink: 0,
                border: `1px solid ${brandTokens.gold}44`,
              }}
            />

            <Stack gap="xs" style={{ flex: 1, minWidth: 0 }}>
              <Box>
                <Group gap={6} align="center">
                  <Text size="xs" fw={700}>
                    {t.pictureIdLabel}:
                  </Text>
                  <Code color="brand" style={{ fontWeight: 800 }}>
                    {formData.image}
                  </Code>
                </Group>
                <Text size="11px" c="dimmed" mt={2}>
                  {t.pictureIdHelp}
                </Text>
              </Box>

              <Group gap="xs" wrap="wrap">
                <FileButton
                  onChange={onImageUpload}
                  accept="image/png,image/jpeg,image/webp,image/svg+xml"
                >
                  {(props) => (
                    <Button
                      {...props}
                      size="xs"
                      variant="filled"
                      color="brand"
                      radius="md"
                      leftSection={<IconUpload size={14} stroke={2} />}
                    >
                      {formData.uploadedDataUrl ? t.changeImage : t.uploadImage}
                    </Button>
                  )}
                </FileButton>

                {formData.uploadedDataUrl && (
                  <>
                    <Button
                      size="xs"
                      variant="default"
                      radius="md"
                      leftSection={<IconDownload size={14} stroke={2} />}
                      onClick={onDownloadPicture}
                    >
                      {t.downloadImage}
                    </Button>
                    <Button
                      size="xs"
                      variant="subtle"
                      color="red"
                      radius="md"
                      leftSection={<IconTrash size={14} stroke={1.8} />}
                      onClick={onRemoveImage}
                    >
                      {t.removeImage}
                    </Button>
                  </>
                )}
              </Group>

              {!formData.uploadedDataUrl && (
                <Select
                  size="xs"
                  label={t.presetImage}
                  data={[
                    { label: 'agashi (سندوتش/أقاشي)', value: 'agashi' },
                    { label: 'maincourse (صواني وملاحات)', value: 'maincourse' },
                  ]}
                  value={dishImages[formData.image] ? formData.image : 'maincourse'}
                  onChange={(val) => setFormData((p) => ({ ...p, image: val || 'maincourse' }))}
                />
              )}
            </Stack>
          </Group>
        </Paper>

        {/* Availability and Sale Switches */}
        <Group gap="xl" mt="xs">
          <Switch
            label={t.inStock}
            checked={formData.available}
            color="green"
            onChange={(e) => setFormData((p) => ({ ...p, available: e.currentTarget.checked }))}
          />
          <Switch
            label={t.sale}
            checked={formData.sale}
            color="red"
            onChange={(e) => setFormData((p) => ({ ...p, sale: e.currentTarget.checked }))}
          />
        </Group>

        <Divider label={t.sizesConfig} labelPosition="center" />

        {/* Sizes Editor */}
        <Stack gap="xs">
          {(['S', 'M', 'L'] as SizeLabel[]).map((lbl) => {
            const cfg = formData.sizes[lbl] || { enabled: false, price: 100 };
            return (
              <Group key={lbl} justify="space-between" align="center" wrap="nowrap">
                <Switch
                  label={`${t.size} ${lbl}`}
                  checked={cfg.enabled}
                  onChange={(e) =>
                    setFormData((p) => ({
                      ...p,
                      sizes: {
                        ...p.sizes,
                        [lbl]: { ...cfg, enabled: e.currentTarget.checked },
                      },
                    }))
                  }
                  style={{ minWidth: 90 }}
                />

                {cfg.enabled && (
                  <Group gap="sm" style={{ flex: 1 }} align="flex-start">
                    <NumberInput
                      placeholder={t.basePrice}
                      label={t.basePrice}
                      min={0}
                      value={cfg.price}
                      onChange={(v) =>
                        setFormData((p) => ({
                          ...p,
                          sizes: {
                            ...p.sizes,
                            [lbl]: { ...cfg, price: Number(v) || 0 },
                          },
                        }))
                      }
                      style={{ flex: 1 }}
                    />

                    {formData.sale && (
                      <NumberInput
                        placeholder={`${t.discountPrice} (< ${cfg.price})`}
                        label={t.discountPrice}
                        description={`${t.maxSalePriceHelp}: < ${cfg.price} ${t.egp}`}
                        min={0}
                        max={Math.max(0, (Number(cfg.price) || 0) - 1)}
                        value={cfg.discountedPrice ?? ''}
                        error={sizeErrors[lbl]}
                        onChange={(v) =>
                          setFormData((p) => ({
                            ...p,
                            sizes: {
                              ...p.sizes,
                              [lbl]: {
                                ...cfg,
                                discountedPrice: v !== '' ? Number(v) : undefined,
                              },
                            },
                          }))
                        }
                        style={{ flex: 1 }}
                      />
                    )}
                  </Group>
                )}
              </Group>
            );
          })}
        </Stack>

        <Divider label={t.perPieceConfig} labelPosition="center" />

        {/* Per Piece Option */}
        <Switch
          label={t.enablePerPiece}
          checked={formData.hasPerPiece}
          onChange={(e) => setFormData((p) => ({ ...p, hasPerPiece: e.currentTarget.checked }))}
        />

        {formData.hasPerPiece && (
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
            <NumberInput
              label={`${t.perPieceLabel} - ${t.basePrice}`}
              min={0}
              value={formData.perPiecePrice}
              onChange={(v) => setFormData((p) => ({ ...p, perPiecePrice: Number(v) || 0 }))}
            />
            {formData.sale && (
              <NumberInput
                label={`${t.perPieceLabel} - ${t.discountPrice}`}
                description={`${t.maxSalePriceHelp}: < ${formData.perPiecePrice} ${t.egp}`}
                min={0}
                max={Math.max(0, (Number(formData.perPiecePrice) || 0) - 1)}
                value={formData.perPieceDiscounted ?? ''}
                error={perPieceError}
                onChange={(v) =>
                  setFormData((p) => ({
                    ...p,
                    perPieceDiscounted: v !== '' ? Number(v) : undefined,
                  }))
                }
              />
            )}
          </SimpleGrid>
        )}

        {hasPriceErrors && (
          <Paper
            withBorder
            p="xs"
            radius="md"
            style={{
              backgroundColor: isDark ? 'rgba(232, 60, 60, 0.15)' : '#fff5f5',
              borderColor: '#fa5252',
            }}
          >
            <Group
              gap={4}
              align="center"
              fw={700}
              style={{
                color: 'var(--mantine-color-red-6)',
                fontSize: 'var(--mantine-font-size-xs)',
              }}
            >
              <IconAlertTriangle size={14} stroke={2} />
              {t.discountPriceError}
            </Group>
          </Paper>
        )}

        {/* Modal Actions */}
        <Group justify="flex-end" mt="md">
          <Button variant="default" onClick={onClose}>
            {t.cancel}
          </Button>
          <Button
            color="brand"
            onClick={onSave}
            disabled={hasPriceErrors || !formData.title.trim()}
          >
            {t.saveChanges}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}

