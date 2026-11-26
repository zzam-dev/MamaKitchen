import { createTheme, type MantineColorsTuple } from '@mantine/core';

/** Deep maroon — the brand's signature red */
const brandRed: MantineColorsTuple = [
  '#FDF2F0', // 0 - lightest tint
  '#F5D5CF',
  '#E8A89E',
  '#D97B6D',
  '#C94E3E',
  '#B83020',
  '#9B2018',
  '#8C1C13', // 7 - primary brand maroon
  '#6B1510',
  '#4A0F0B', // 9 - darkest
];

/** Warm caramel gold — accent & secondary */
const brandGold: MantineColorsTuple = [
  '#FDF8F0', // 0
  '#F5E8D0',
  '#E8D0A8',
  '#D4B07A',
  '#C49A6C', // 4 - primary gold
  '#A67C52',
  '#8A6340',
  '#6E4D30',
  '#523820',
  '#362314', // 9
];

export const theme = createTheme({
  colors: {
    brand: brandRed,
    gold: brandGold,
  },
  primaryColor: 'brand',
  defaultRadius: 'md',
});

export * from '@/styles/neumorphic';
