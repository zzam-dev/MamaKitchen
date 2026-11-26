import { ar } from './ar';
import { en } from './en';
import type { Language, TranslationDictionary } from './types';

export * from './types';
export { en, ar };

export const translations: Record<Language, TranslationDictionary> = {
  en,
  ar,
};

