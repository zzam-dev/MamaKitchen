import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations, type Language, type TranslationDictionary } from '@/locales';

export type { Language, TranslationDictionary };
export { translations };

export type Translations = TranslationDictionary;

interface LanguageContextType {
  language: Language;
  direction: 'rtl' | 'ltr';
  isArabic: boolean;
  t: TranslationDictionary;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANG_STORAGE_KEY = 'mama-kitchen-lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === 'ar' || saved === 'en') return saved;
      return 'ar'; // Default to Arabic as Mama Kitchen is an authentic Sudanese kitchen
    } catch {
      return 'ar';
    }
  });

  const direction = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, language);
    } catch (e) {
      console.error('Failed to save language', e);
    }

    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [language, direction]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const value: LanguageContextType = {
    language,
    direction,
    isArabic: language === 'ar',
    t: translations[language],
    toggleLanguage,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
