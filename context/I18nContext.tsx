import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'en' | 'fr' | 'ar';

interface I18nContextType {
  language: Language;
  changeLanguage: (lang: Language) => Promise<void>;
  t: (key: string, options?: any) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = '@app_language';

export function I18nProvider({ children }: { children: ReactNode }) {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState<Language>(() => {
    // Initialize with current i18n language
    const currentLang = i18n.language as Language;
    return currentLang === 'en' || currentLang === 'fr' || currentLang === 'ar' ? currentLang : 'en';
  });

  useEffect(() => {
    // Load saved language preference
    const loadLanguage = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr' || savedLanguage === 'ar')) {
          await i18n.changeLanguage(savedLanguage);
          setLanguage(savedLanguage as Language);
        } else {
          // Use current i18n language
          const currentLang = i18n.language as Language;
          if (currentLang === 'en' || currentLang === 'fr' || currentLang === 'ar') {
            setLanguage(currentLang);
          }
        }
      } catch (error) {
        console.error('Error loading language:', error);
      }
    };

    loadLanguage();
  }, [i18n]);

  const changeLanguage = async (lang: Language) => {
    try {
      await i18n.changeLanguage(lang);
      await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      setLanguage(lang);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  return (
    <I18nContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
