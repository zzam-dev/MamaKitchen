import React, { useState } from 'react';
import { IconShoppingCart } from '@tabler/icons-react';
import { Badge, Box, Button, Divider, Drawer, Group, Paper, ScrollArea, Stack, Text, useComputedColorScheme } from '@mantine/core';
import { useCart } from '@/context/CartContext';
import type { OrderType, SupplementaryPreferences } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens } from '@/styles/neumorphic';
import {
  normalizeArabicNumerals,
  validateCustomerAddress,
  validateCustomerName,
  validateCustomerPhone,
  validateOrderDetails,
} from '@/utils/orderValidation';
import { CartAddonsShelf } from './CartAddonsShelf';
import { CartCustomerForm, type CustomerFormErrors, type CustomerFormState, type CustomerFormTouched } from './CartCustomerForm';
import { CartEmptyState } from './CartEmptyState';
import { CartFooter } from './CartFooter';
import { CartItemRow } from './CartItemRow';
import { CartPreferencesSection } from './CartPreferencesSection';

/**
 * ELEMENT: Cart Drawer
 * Identity: Sliding right/left overlay containing the customer's selected items,
 *           add-ons shelf, preferences, and WhatsApp ordering flow.
 */
export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    totalCount,
    totalPrice,
    checkoutWhatsApp,
    addItem,
  } = useCart();
  const { t, isArabic } = useLanguage();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: false });
  const isDark = computedColorScheme === 'dark';

  const [customer, setCustomer] = useState<CustomerFormState>({
    name: '',
    phone: '',
    address: '',
    notes: '',
    orderType: 'delivery',
  });

  const [preferences, setPreferences] = useState<SupplementaryPreferences>({
    cutlery: true,
    spiceLevel: 'regular',
    servingStyle: 'separate',
  });

  const [errors, setErrors] = useState<CustomerFormErrors>({});
  const [touched, setTouched] = useState<CustomerFormTouched>({});
  const [showValidationAlert, setShowValidationAlert] = useState(false);

  const handleBlur = (field: 'name' | 'phone' | 'address') => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (field === 'name') {
      setErrors((prev) => ({ ...prev, name: validateCustomerName(customer.name, t) }));
    } else if (field === 'phone') {
      setErrors((prev) => ({ ...prev, phone: validateCustomerPhone(customer.phone, t) }));
    } else if (field === 'address') {
      setErrors((prev) => ({
        ...prev,
        address: customer.orderType === 'delivery' ? validateCustomerAddress(customer.address, customer.orderType, t) : undefined,
      }));
    }
  };

  const handleFieldChange = (field: keyof CustomerFormState, rawValue: string) => {
    const value = field === 'phone' ? normalizeArabicNumerals(rawValue) : rawValue;
    setCustomer((prev) => ({ ...prev, [field]: value }));

    if (touched[field as keyof CustomerFormTouched]) {
      if (field === 'name') {
        setErrors((prev) => ({ ...prev, name: validateCustomerName(value, t) }));
      } else if (field === 'phone') {
        setErrors((prev) => ({ ...prev, phone: validateCustomerPhone(value, t) }));
      } else if (field === 'address') {
        setErrors((prev) => ({
          ...prev,
          address: customer.orderType === 'delivery' ? validateCustomerAddress(value, customer.orderType, t) : undefined,
        }));
      }
    }
  };

  const handleOrderTypeChange = (type: OrderType) => {
    setCustomer((prev) => ({ ...prev, orderType: type }));
    if (type === 'takeout') {
      setErrors((prev) => ({ ...prev, address: undefined }));
    } else if (touched.address) {
      setErrors((prev) => ({ ...prev, address: validateCustomerAddress(customer.address, type, t) }));
    }
  };

  const handleCheckout = () => {
    const validation = validateOrderDetails({ ...customer, t });
    if (!validation.isValid) {
      setErrors({
        name: validation.nameError,
        phone: validation.phoneError,
        address: validation.addressError,
      });
      setTouched({ name: true, phone: true, address: customer.orderType === 'delivery' });
      setShowValidationAlert(true);
      return;
    }

    setShowValidationAlert(false);
    checkoutWhatsApp({
      name: customer.name.trim(),
      phone: customer.phone.trim(),
      address: customer.orderType === 'delivery' ? customer.address.trim() : (isArabic ? 'استلام من المطعم' : 'Takeout'),
      notes: customer.notes.trim(),
      orderType: customer.orderType,
      preferences,
    });
  };

  return (
    <Drawer
      opened={isOpen}
      onClose={closeCart}
      position={isArabic ? 'left' : 'right'}
      size="md"
      title={
        <Group gap="xs">
          <Group
            gap={6}
            align="center"
            fw={800}
            style={{ color: brandTokens.red, fontSize: 'var(--mantine-font-size-lg)' }}
          >
            <IconShoppingCart size={20} stroke={1.8} style={{ flexShrink: 0 }} />
            {t.yourOrder}
          </Group>
          {totalCount > 0 && (
            <Badge color="brand" variant="light" size="sm">
              {totalCount} {totalCount === 1 ? t.item : t.items}
            </Badge>
          )}
        </Group>
      }
      styles={{
        content: {
          background: isDark ? '#20150f' : '#fffaf4',
          borderLeft: isDark ? '1px solid rgba(166, 124, 82, 0.3)' : `1px solid ${brandTokens.gold}33`,
          borderRight: isDark ? '1px solid rgba(166, 124, 82, 0.3)' : `1px solid ${brandTokens.gold}33`,
        },
        header: {
          background: isDark ? '#231812' : '#ffffff',
          borderBottom: isDark ? '1px solid rgba(166, 124, 82, 0.3)' : `1px solid ${brandTokens.gold}33`,
          padding: '16px 20px',
        },
        body: {
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100% - 65px)',
        },
      }}
    >
      {items.length === 0 ? (
        <CartEmptyState isDark={isDark} onExplore={closeCart} />
      ) : (
        <Box style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <ScrollArea style={{ flex: 1 }} p="md">
            <Stack gap="xs">
              <Group justify="space-between" align="center">
                <Text
                  size="xs"
                  fw={600}
                  style={{
                    color: isDark ? '#C9A880' : '#7a5235',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {t.orderItems}
                </Text>
                <Button variant="subtle" color="gray" size="compact-xs" onClick={clearCart}>
                  {t.clearAll}
                </Button>
              </Group>

              {/* Items List */}
              {items.map((item) => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  isDark={isDark}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}

              <Divider my="sm" color={`${brandTokens.gold}33`} />

              {/* Supplementary Add-ons & Preferences */}
              <Paper
                p="xs"
                radius="md"
                style={{
                  backgroundColor: isDark ? 'rgba(38, 27, 23, 0.55)' : 'rgba(255, 248, 240, 0.65)',
                  border: isDark ? 'none' : '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: isDark
                    ? '0 0 12px rgba(0,0,0,0.45)'
                    : '0 0 10px rgba(105, 68, 44, 0.16), 0 0 4px rgba(255, 255, 255, 0.9)',
                }}
              >
                <Stack gap="md">
                  <CartAddonsShelf
                    items={items}
                    isDark={isDark}
                    onAddItem={addItem}
                    onUpdateQuantity={updateQuantity}
                  />

                  <Divider my={4} color={`${brandTokens.gold}22`} />

                  <CartPreferencesSection
                    preferences={preferences}
                    isDark={isDark}
                    onChange={(updated) => setPreferences((prev) => ({ ...prev, ...updated }))}
                  />
                </Stack>
              </Paper>

              <Divider my="sm" color={`${brandTokens.gold}33`} />

              {/* Customer Details Form */}
              <CartCustomerForm
                customer={customer}
                errors={errors}
                touched={touched}
                showValidationAlert={showValidationAlert}
                isDark={isDark}
                onFieldChange={handleFieldChange}
                onOrderTypeChange={handleOrderTypeChange}
                onBlur={handleBlur}
              />
            </Stack>
          </ScrollArea>

          {/* Footer Checkout Bar */}
          <CartFooter
            totalPrice={totalPrice}
            orderType={customer.orderType}
            isDark={isDark}
            onCheckout={handleCheckout}
          />
        </Box>
      )}
    </Drawer>
  );
}
