import React from 'react';
import { Box, SegmentedControl, Stack, Switch, Text } from '@mantine/core';
import type { SupplementaryPreferences } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';

export interface CartPreferencesSectionProps {
  preferences: SupplementaryPreferences;
  isDark: boolean;
  onChange: (updated: Partial<SupplementaryPreferences>) => void;
}

export function CartPreferencesSection({
  preferences,
  isDark,
  onChange,
}: CartPreferencesSectionProps) {
  const { t } = useLanguage();

  return (
    <Stack gap={6}>
      <Text size="xs" fw={700} style={{ color: isDark ? '#D4BFA8' : '#7A5235' }}>
        {t.preferencesTitle}
      </Text>

      {/* Spice Level */}
      <Box>
        <Text
          size="xs"
          fw={600}
          mb={3}
          style={{ color: isDark ? '#C9A880' : '#8A6340' }}
        >
          {t.spiceLevelLabel}
        </Text>
        <SegmentedControl
          fullWidth
          size="xs"
          radius="sm"
          value={preferences.spiceLevel}
          onChange={(val) =>
            onChange({
              spiceLevel: val as 'regular' | 'extra' | 'mild',
            })
          }
          data={[
            { value: 'mild', label: t.spiceMild },
            { value: 'regular', label: t.spiceRegular },
            { value: 'extra', label: t.spiceExtra },
          ]}
        />
      </Box>

      {/* Serving Style */}
      <Box>
        <Text
          size="xs"
          fw={600}
          mb={3}
          style={{ color: isDark ? '#C9A880' : '#8A6340' }}
        >
          {t.servingStyleLabel}
        </Text>
        <SegmentedControl
          fullWidth
          size="xs"
          radius="sm"
          value={preferences.servingStyle || 'separate'}
          onChange={(val) =>
            onChange({
              servingStyle: val as 'separate' | 'mixed',
            })
          }
          data={[
            { value: 'separate', label: t.servingSeparate },
            { value: 'mixed', label: t.servingMixed },
          ]}
        />
      </Box>

      {/* Cutlery Toggle */}
      <Switch
        size="xs"
        color="brand"
        checked={preferences.cutlery}
        onChange={(event) =>
          onChange({
            cutlery: event.currentTarget.checked,
          })
        }
        label={
          <Box>
            <Text
              size="xs"
              fw={600}
              style={{ color: isDark ? '#FFF9F0' : '#2A170A' }}
            >
              {t.cutleryLabel}
            </Text>
            <Text size="10px" style={{ color: isDark ? '#A9927D' : '#8C7260' }}>
              {t.cutlerySubtext}
            </Text>
          </Box>
        }
      />
    </Stack>
  );
}

