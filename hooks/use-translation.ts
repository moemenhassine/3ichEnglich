import { useI18n } from '@/context/I18nContext';
import { useTranslation as useI18nextTranslation } from 'react-i18next';

/**
 * Custom hook that combines react-i18next's useTranslation with our I18nContext
 * Provides easy access to translation function and language management
 */
export function useTranslation() {
  const { language, changeLanguage, t } = useI18n();
  const { i18n } = useI18nextTranslation();

  return {
    t,
    language,
    changeLanguage,
    i18n,
  };
}
