import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ar from './locales/ar/translation.json';
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
  ar: {
    translation: ar,
  },
};

// Get device language or default to English
const getDeviceLanguage = () => {
  const locales = Localization.getLocales();
  if (locales && locales.length > 0) {
    const deviceLanguage = locales[0].languageCode;
    // Check if we support this language
    if (deviceLanguage === 'fr' || deviceLanguage === 'ar' || deviceLanguage === 'en') {
      return deviceLanguage;
    }
  }
  return 'en'; // Default to English
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getDeviceLanguage(),
    fallbackLng: 'en',
    compatibilityJSON: 'v4',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
