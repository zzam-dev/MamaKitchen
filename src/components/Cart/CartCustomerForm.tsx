import React from 'react';
import { IconAlertCircle, IconBuildingStore, IconTruck } from '@tabler/icons-react';
import {
  Group,
  Paper,
  SegmentedControl,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import type { OrderType } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { brandTokens } from '@/styles/neumorphic';

export interface CustomerFormState {
  name: string;
  phone: string;
  address: string;
  notes: string;
  orderType: OrderType;
}

export interface CustomerFormErrors {
  name?: string;
  phone?: string;
  address?: string;
}

export interface CustomerFormTouched {
  name?: boolean;
  phone?: boolean;
  address?: boolean;
}

export interface CartCustomerFormProps {
  customer: CustomerFormState;
  errors: CustomerFormErrors;
  touched: CustomerFormTouched;
  showValidationAlert: boolean;
  isDark: boolean;
  onFieldChange: (field: keyof CustomerFormState, value: string) => void;
  onOrderTypeChange: (type: OrderType) => void;
  onBlur: (field: 'name' | 'phone' | 'address') => void;
}

export function CartCustomerForm({
  customer,
  errors,
  touched,
  showValidationAlert,
  isDark,
  onFieldChange,
  onOrderTypeChange,
  onBlur,
}: CartCustomerFormProps) {
  const { t } = useLanguage();
  const isDelivery = customer.orderType === 'delivery';

  return (
    <Stack gap="xs">
      {/* Order Type Selector */}
      <Stack gap="xs">
        <Text
          size="xs"
          fw={600}
          style={{
            color: isDark ? '#C9A880' : '#7a5235',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {t.orderTypeLabel}
        </Text>

        <SegmentedControl
          fullWidth
          size="sm"
          radius="md"
          value={customer.orderType}
          onChange={(val) => onOrderTypeChange(val as OrderType)}
          data={[
            {
              value: 'delivery',
              label: (
                <Group gap={6} justify="center" wrap="nowrap">
                  <IconTruck size={15} stroke={1.8} />
                  <span>{t.orderTypeDelivery}</span>
                </Group>
              ),
            },
            {
              value: 'takeout',
              label: (
                <Group gap={6} justify="center" wrap="nowrap">
                  <IconBuildingStore size={15} stroke={1.8} />
                  <span>{t.orderTypeTakeout}</span>
                </Group>
              ),
            },
          ]}
        />

        <Paper
          p="xs"
          radius="md"
          style={{
            backgroundColor: isDelivery
              ? isDark
                ? 'rgba(140,28,19,0.18)'
                : '#fff5f3'
              : isDark
                ? 'rgba(34,139,34,0.15)'
                : '#f3fff5',
            border: `1px solid ${isDelivery ? `${brandTokens.red}44` : '#40c05744'}`,
            transition: 'all 200ms ease',
          }}
        >
          <Group gap={6} align="center">
            {isDelivery ? (
              <IconTruck
                size={14}
                stroke={1.8}
                style={{ color: brandTokens.red, flexShrink: 0 }}
              />
            ) : (
              <IconBuildingStore
                size={14}
                stroke={1.8}
                style={{ color: '#2f9e44', flexShrink: 0 }}
              />
            )}
            <Text
              size="xs"
              fw={600}
              style={{ color: isDelivery ? brandTokens.red : '#2f9e44' }}
            >
              {isDelivery ? t.deliveryBadge : t.takeoutBadge}
            </Text>
          </Group>
        </Paper>
      </Stack>

      {/* Customer Info Form */}
      <Stack gap="xs" mt="xs">
        <Text
          size="xs"
          fw={700}
          style={{
            color: isDark ? '#FFE066' : brandTokens.red,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {t.deliveryDetails}
        </Text>

        {showValidationAlert && (
          <Paper
            p="xs"
            radius="md"
            style={{
              backgroundColor: isDark ? 'rgba(232, 60, 60, 0.2)' : '#fff5f5',
              border: '1px solid #fa5252',
            }}
          >
            <Group gap={6} align="center">
              <IconAlertCircle
                size={15}
                stroke={2}
                style={{ color: '#e03131', flexShrink: 0 }}
              />
              <Text size="xs" fw={700} c="red">
                {t.validationNotice}
              </Text>
            </Group>
          </Paper>
        )}

        <TextInput
          label={t.nameLabel}
          withAsterisk
          placeholder={t.namePlaceholder}
          size="xs"
          radius="md"
          value={customer.name}
          error={touched.name ? errors.name : undefined}
          onBlur={() => onBlur('name')}
          onChange={(e) => onFieldChange('name', e.target.value)}
        />

        <TextInput
          label={t.phoneLabel}
          withAsterisk
          placeholder={t.phonePlaceholder}
          size="xs"
          radius="md"
          value={customer.phone}
          error={touched.phone ? errors.phone : undefined}
          onBlur={() => onBlur('phone')}
          onChange={(e) => onFieldChange('phone', e.target.value)}
        />

        {isDelivery && (
          <TextInput
            label={t.addressLabel}
            withAsterisk
            placeholder={t.addressPlaceholder}
            size="xs"
            radius="md"
            value={customer.address}
            error={touched.address ? errors.address : undefined}
            onBlur={() => onBlur('address')}
            onChange={(e) => onFieldChange('address', e.target.value)}
          />
        )}

        <Textarea
          placeholder={isDelivery ? t.notesPlaceholder : t.takeoutAddressPlaceholder}
          size="xs"
          radius="md"
          rows={2}
          value={customer.notes}
          onChange={(e) => onFieldChange('notes', e.target.value)}
        />
      </Stack>
    </Stack>
  );
}

