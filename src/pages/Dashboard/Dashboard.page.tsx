import React, { useState } from 'react';
import {
  IconCheck,
  IconCode,
  IconCopy,
  IconDownload,
  IconPlus,
  IconToolsKitchen2,
} from '@tabler/icons-react';
import {
  Badge,
  Button,
  Group,
  Paper,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
  useComputedColorScheme,
} from '@mantine/core';
import type { DishSize, SizeLabel } from '@/components/DishCard';
import { useLanguage } from '@/context/LanguageContext';
import { useMenu, type DishItem } from '@/context/MenuContext';
import { brandTokens } from '@/styles/neumorphic';
import { DEFAULT_FORM, type DishFormData } from './dashboard.types';
import { DashboardDishCard } from './components/DashboardDishCard';
import { DashboardDishModal } from './components/DashboardDishModal';
import { DashboardJsonDrawer } from './components/DashboardJsonDrawer';
import { DashboardStats } from './components/DashboardStats';

/**
 * ELEMENT: Owner Dashboard Page
 * Identity: Complete administrative menu management, real-time JSON compiling,
 *           product ID cryptographic generation, and stock availability toggling.
 */
export function DashboardPage() {
  const { t, isArabic } = useLanguage();
  const {
    dishes,
    endpoints,
    toggleAvailability,
    updateDish,
    addDish,
    deleteDish,
    duplicateDish,
    generateSecureId,
    resetMenu,
    compileServerJson,
    uploadImage,
    deleteImage,
  } = useMenu();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: false });
  const isDark = computedColorScheme === 'dark';

  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showJsonPreview, setShowJsonPreview] = useState(false);
  const [copied, setCopied] = useState(false);

  // Edit / Create modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [editingDishId, setEditingDishId] = useState<number | null>(null);
  const [formData, setFormData] = useState<DishFormData>(DEFAULT_FORM);

  const compiledJson = compileServerJson();

  // Handlers for JSON export
  const handleCopyJson = () => {
    navigator.clipboard.writeText(compiledJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJson = () => {
    const blob = new Blob([compiledJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dishes.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Open modal for adding brand new dish
  const handleOpenAdd = () => {
    setEditingDishId(null);
    const newId = generateSecureId();
    setFormData({
      ...DEFAULT_FORM,
      id: newId,
      image: `${newId}.jpg`,
      imageExtension: 'jpg',
    });
    setModalOpen(true);
  };

  // Open modal for editing existing dish
  const handleOpenEdit = (dish: DishItem) => {
    setEditingDishId(dish.id);

    const sObj = (dish.sizes || []).find((s) => s.label === 'S');
    const mObj = (dish.sizes || []).find((s) => s.label === 'M');
    const lObj = (dish.sizes || []).find((s) => s.label === 'L');

    let ext = 'jpg';
    if (dish.image && dish.image.includes('.')) {
      ext = dish.image.split('.').pop() || 'jpg';
    }

    setFormData({
      id: dish.id,
      title: dish.title,
      title_ar: dish.title_ar || '',
      description: dish.description,
      description_ar: dish.description_ar || '',
      category: dish.category || 'main',
      image: dish.image || 'maincourse',
      uploadedDataUrl: dish.uploadedDataUrl,
      imageExtension: ext,
      sale: Boolean(dish.sale),
      available: dish.available !== false,
      sizes: {
        S: {
          enabled: !!sObj,
          price: sObj ? sObj.price : 150,
          discountedPrice: sObj?.discountedPrice,
        },
        M: {
          enabled: !!mObj,
          price: mObj ? mObj.price : 220,
          discountedPrice: mObj?.discountedPrice,
        },
        L: {
          enabled: !!lObj,
          price: lObj ? lObj.price : 320,
          discountedPrice: lObj?.discountedPrice,
        },
      },
      hasPerPiece: !!dish.perPiece,
      perPiecePrice: dish.perPiece ? dish.perPiece.price : 35,
      perPieceDiscounted: dish.perPiece?.discountedPrice,
    });
    setModalOpen(true);
  };

  // Securely randomize product ID using Web Crypto API and re-sync picture ID
  const handleRandomizeId = () => {
    const newId = generateSecureId();
    setFormData((prev) => {
      let newImage = prev.image;
      if (
        prev.uploadedDataUrl ||
        (prev.image && (prev.image.includes('.') || prev.image === String(prev.id)))
      ) {
        const ext =
          prev.imageExtension || (prev.image.includes('.') ? prev.image.split('.').pop() : 'jpg');
        newImage = `${newId}.${ext}`;
      }
      return {
        ...prev,
        id: newId,
        image: newImage,
      };
    });
  };

  // Handle image upload and ID picture the same as product ID
  const handleImageUpload = (file: File | null) => {
    if (!file) {return;}
    uploadImage(formData.id ?? generateSecureId(), file).catch(() => {
      // errors are logged inside uploadImage itself
    });
  };

  const handleRemoveImage = async () => {
    if (!formData.id) {return;}
    await deleteImage(formData.id);
    setFormData((prev) => ({
      ...prev,
      image: 'maincourse',
      uploadedDataUrl: undefined,
    }));
  };

  const handleDownloadPicture = () => {
    if (!formData.uploadedDataUrl) {return;}
    const filename = formData.image || `${formData.id || 'dish'}.jpg`;
    const a = document.createElement('a');
    a.href = formData.uploadedDataUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Validation: Sale/discount price CANNOT be equal to or higher than base price
  const sizeErrors: Partial<Record<SizeLabel, string>> = {};
  if (formData.sale) {
    (['S', 'M', 'L'] as SizeLabel[]).forEach((lbl) => {
      const cfg = formData.sizes[lbl];
      if (
        cfg?.enabled &&
        cfg.discountedPrice != null &&
        Number(cfg.discountedPrice) >= Number(cfg.price)
      ) {
        sizeErrors[lbl] = `${t.discountPriceError} (< ${cfg.price} ${t.egp})`;
      }
    });
  }

  const perPieceError =
    formData.sale &&
    formData.hasPerPiece &&
    formData.perPieceDiscounted != null &&
    Number(formData.perPieceDiscounted) >= Number(formData.perPiecePrice)
      ? `${t.discountPriceError} (< ${formData.perPiecePrice} ${t.egp})`
      : undefined;

  const hasPriceErrors = Object.keys(sizeErrors).length > 0 || !!perPieceError;

  // Save dish
  const handleSaveDish = () => {
    if (!formData.title.trim() || hasPriceErrors) {return;}

    const sizes: DishSize[] = [];
    (['S', 'M', 'L'] as SizeLabel[]).forEach((lbl) => {
      const cfg = formData.sizes[lbl];
      if (cfg?.enabled) {
        sizes.push({
          label: lbl,
          price: Number(cfg.price) || 0,
          discountedPrice:
            formData.sale && cfg.discountedPrice != null ? Number(cfg.discountedPrice) : undefined,
        });
      }
    });

    if (sizes.length === 0) {
      sizes.push({ label: 'S', price: 100 });
    }

    const finalId = formData.id ?? generateSecureId();

    const dishPayload: DishItem = {
      id: finalId,
      title: formData.title.trim(),
      title_ar: formData.title_ar.trim() || undefined,
      description: formData.description.trim(),
      description_ar: formData.description_ar.trim() || undefined,
      category: formData.category,
      image: formData.image || 'maincourse',
      uploadedDataUrl: formData.uploadedDataUrl,
      sale: formData.sale,
      available: formData.available,
      sizes,
      perPiece: formData.hasPerPiece
        ? {
            price: Number(formData.perPiecePrice) || 0,
            discountedPrice:
              formData.sale && formData.perPieceDiscounted != null
                ? Number(formData.perPieceDiscounted)
                : undefined,
          }
        : undefined,
    };

    if (editingDishId != null) {
      updateDish(editingDishId, dishPayload);
    } else {
      addDish(dishPayload);
    }

    setModalOpen(false);
  };

  // Filter dishes
  const filteredDishes = dishes.filter((dish) => {
    const matchesSearch =
      dish.title.toLowerCase().includes(search.toLowerCase()) ||
      (dish.title_ar && dish.title_ar.includes(search)) ||
      String(dish.id).includes(search);

    const matchesCategory = categoryFilter === 'all' || dish.category === categoryFilter;

    let matchesStatus = true;
    if (statusFilter === 'available') {matchesStatus = dish.available !== false;}
    if (statusFilter === 'unavailable') {matchesStatus = dish.available === false;}
    if (statusFilter === 'sale') {matchesStatus = Boolean(dish.sale);}

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const onSaleCount = dishes.filter((d) => d.sale).length;
  const outOfStockCount = dishes.filter((d) => d.available === false).length;

  return (
    <Stack gap="xl" p="xl" maw={1200} mx="auto" w="100%">
      {/* Top Header */}
      <Group justify="space-between" align="flex-start" wrap="wrap" gap="md">
        <div>
          <Group gap="xs" align="center">
            <Title order={2} style={{ color: isDark ? '#E8A89E' : brandTokens.red }}>
              <Group gap={8} align="center" style={{ display: 'inline-flex' }}>
                <IconToolsKitchen2 size={26} stroke={1.8} style={{ flexShrink: 0 }} />
                {t.menuEditor}
              </Group>
            </Title>
            <Badge color="brand" variant="light" size="sm" radius="sm">
              API: {endpoints.ADMIN_MENU}
            </Badge>
          </Group>
          <Text size="sm" c="dimmed" mt={4} maw={600}>
            {t.menuEditorSubtitle}
          </Text>
        </div>

        <Group gap="xs" wrap="wrap">
          <Button
            leftSection={<IconPlus size={16} stroke={2.5} />}
            color="brand"
            radius="md"
            onClick={handleOpenAdd}
          >
            {t.addNewDish}
          </Button>

          <Button
            variant={showJsonPreview ? 'filled' : 'light'}
            color="brand"
            radius="md"
            leftSection={<IconCode size={16} stroke={2} />}
            onClick={() => setShowJsonPreview((v) => !v)}
          >
            {showJsonPreview ? t.hideJson : t.showJson}
          </Button>

          <Button
            variant="default"
            radius="md"
            leftSection={
              copied ? <IconCheck size={16} stroke={2.5} /> : <IconCopy size={16} stroke={2} />
            }
            onClick={handleCopyJson}
            color={copied ? 'green' : undefined}
          >
            {copied ? t.copied : t.copyJson}
          </Button>

          <Button
            variant="default"
            radius="md"
            leftSection={<IconDownload size={16} stroke={2} />}
            onClick={handleDownloadJson}
          >
            {t.downloadJson}
          </Button>

          <Button
            variant="subtle"
            color="gray"
            size="sm"
            onClick={() => {
              if (
                window.confirm(
                  isArabic ? 'هل تريد إعادة ضبط القائمة للافتراضي؟' : 'Reset to default menu?'
                )
              ) {
                resetMenu();
              }
            }}
          >
            {t.resetToDefault}
          </Button>
        </Group>
      </Group>

      {/* KPI Stats */}
      <DashboardStats
        totalDishes={dishes.length}
        inStockCount={dishes.length - outOfStockCount}
        outOfStockCount={outOfStockCount}
        onSaleCount={onSaleCount}
        isDark={isDark}
      />

      {/* Collapsible Compiled JSON Box */}
      <DashboardJsonDrawer
        show={showJsonPreview}
        isDark={isDark}
        compiledJson={compiledJson}
        adminMenuEndpoint={endpoints.ADMIN_MENU}
        totalDishes={dishes.length}
        copied={copied}
        onCopy={handleCopyJson}
        onDownload={handleDownloadJson}
      />

      {/* Filters & Search */}
      <Paper withBorder p="md" radius="lg">
        <Group justify="space-between" wrap="wrap" gap="md">
          <TextInput
            placeholder={t.searchDishes}
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            style={{ flex: 1, minWidth: 220 }}
            radius="md"
          />

          <Group gap="xs" wrap="wrap">
            <SegmentedControl
              size="xs"
              radius="md"
              value={categoryFilter}
              onChange={setCategoryFilter}
              data={[
                { label: t.allCategories, value: 'all' },
                { label: t.mains, value: 'main' },
                { label: t.stews, value: 'stew' },
                { label: t.salads, value: 'salad' },
                { label: t.sides, value: 'side' },
              ]}
            />

            <SegmentedControl
              size="xs"
              radius="md"
              value={statusFilter}
              onChange={setStatusFilter}
              data={[
                { label: isArabic ? 'الكل' : 'All', value: 'all' },
                { label: t.inStock, value: 'available' },
                { label: t.outOfStock, value: 'unavailable' },
                { label: t.sale, value: 'sale' },
              ]}
            />
          </Group>
        </Group>
      </Paper>

      {/* Dishes Cards Grid */}
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
        {filteredDishes.map((dish) => (
          <DashboardDishCard
            key={dish.id}
            dish={dish}
            onToggleAvailability={toggleAvailability}
            onEdit={handleOpenEdit}
            onDuplicate={duplicateDish}
            onDelete={deleteDish}
          />
        ))}
      </SimpleGrid>

      {/* ELEMENT: Dish Management Modal (Add / Edit Dish) */}
      <DashboardDishModal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        editingDishId={editingDishId}
        formData={formData}
        setFormData={setFormData}
        onSave={handleSaveDish}
        onRandomizeId={handleRandomizeId}
        onImageUpload={handleImageUpload}
        onRemoveImage={handleRemoveImage}
        onDownloadPicture={handleDownloadPicture}
        sizeErrors={sizeErrors}
        perPieceError={perPieceError}
        hasPriceErrors={hasPriceErrors}
        isDark={isDark}
      />
    </Stack>
  );
}

