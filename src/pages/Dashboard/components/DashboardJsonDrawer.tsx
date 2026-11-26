import React from 'react';
import { IconCheck, IconCode, IconCopy, IconDownload } from '@tabler/icons-react';
import { Badge, Box, Button, Code, Collapse, Group, Paper, Text, ThemeIcon } from '@mantine/core';
import { useLanguage } from '@/context/LanguageContext';

export interface DashboardJsonDrawerProps {
  show: boolean;
  isDark: boolean;
  compiledJson: string;
  adminMenuEndpoint: string;
  totalDishes: number;
  copied: boolean;
  onCopy: () => void;
  onDownload: () => void;
}

export function DashboardJsonDrawer({
  show,
  isDark,
  compiledJson,
  adminMenuEndpoint,
  totalDishes,
  copied,
  onCopy,
  onDownload,
}: DashboardJsonDrawerProps) {
  const { t } = useLanguage();

  return (
    <Collapse in={show}>
      <Paper
        withBorder
        p="md"
        radius="lg"
        style={{
          backgroundColor: isDark ? 'var(--mantine-color-dark-8)' : '#2b231d',
          color: '#F9EDD8',
        }}
      >
        <Group justify="space-between" align="center" mb="xs">
          <Group gap="xs">
            <ThemeIcon color="brand" variant="light" size="sm">
              <IconCode size={14} stroke={2} />
            </ThemeIcon>
            <Text fw={700} size="sm" c="white">
              {t.compiledJson}
            </Text>
            <Badge size="xs" color="gray" variant="filled">
              Target: {adminMenuEndpoint} • {totalDishes} items •{' '}
              {(new TextEncoder().encode(compiledJson).length / 1024).toFixed(1)} KB
            </Badge>
          </Group>

          <Group gap="xs">
            <Button
              size="xs"
              variant="light"
              color="brand"
              leftSection={
                copied ? <IconCheck size={14} stroke={2.5} /> : <IconCopy size={14} stroke={2} />
              }
              onClick={onCopy}
            >
              {copied ? t.copied : t.copyJson}
            </Button>
            <Button
              size="xs"
              variant="white"
              color="dark"
              leftSection={<IconDownload size={14} stroke={2} />}
              onClick={onDownload}
            >
              {t.downloadJson}
            </Button>
          </Group>
        </Group>

        <Box
          style={{
            maxHeight: 320,
            overflowY: 'auto',
            borderRadius: 6,
            background: '#1a1410',
            padding: 12,
          }}
        >
          <Code
            block
            style={{
              background: 'transparent',
              color: '#e3d2c0',
              fontSize: 12,
              lineHeight: 1.45,
              fontFamily: 'monospace',
            }}
          >
            {compiledJson}
          </Code>
        </Box>
      </Paper>
    </Collapse>
  );
}

