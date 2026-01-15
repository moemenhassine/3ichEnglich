import { useTheme } from '@/hooks/use-theme';
import { useTranslation } from '@/hooks/use-translation';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from './themed-text';

type Language = 'en' | 'fr' | 'ar';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'ar', label: 'العربية' },
];

export function LanguageSelector() {
  const { language, changeLanguage, t } = useTranslation();
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.label}>
        {t('common.language')}
      </ThemedText>
      <View style={styles.languageContainer}>
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang.code}
            style={[
              styles.languageButton,
              {
                backgroundColor: language === lang.code ? colors.primary : colors.cardBackground,
                borderColor: language === lang.code ? colors.primary : colors.border,
              },
            ]}
            onPress={() => changeLanguage(lang.code)}>
            <ThemedText
              style={[
                styles.languageText,
                language === lang.code && styles.languageTextActive,
              ]}>
              {lang.label}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  label: {
    marginBottom: 12,
  },
  languageContainer: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  languageButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
   
    minWidth: 80,
    alignItems: 'center',
  },
  languageButtonActive: {
    backgroundColor: '#0a7ea4',
    borderColor: '#0a7ea4',
  },
  languageText: {
    fontSize: 14,
  },
  languageTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
});
