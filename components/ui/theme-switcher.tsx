import { useTheme } from '@/hooks/use-theme';
import { useTranslation } from '@/hooks/use-translation';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IconSymbol } from './icon-symbol';
import { ThemedText } from './themed-text';

type IconSymbolName = 'sun.max.fill' | 'moon.fill' | 'gearshape.fill';

type ThemeMode = 'light' | 'dark' | 'system';

const themeOptions: { mode: ThemeMode; label: string; icon: string }[] = [
  { mode: 'light', label: 'Light', icon: 'sun.max.fill' },
  { mode: 'dark', label: 'Dark', icon: 'moon.fill' },
  { mode: 'system', label: 'System', icon: 'gearshape.fill' },
];

export function ThemeSwitcher() {
  const { themeMode, setThemeMode, colors } = useTheme();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.label}>
        {t('common.theme')}
      </ThemedText>
      <View style={styles.themeContainer}>
        {themeOptions.map((option) => {
          const isActive = themeMode === option.mode;
          return (
            <TouchableOpacity
              key={option.mode}
              style={[
                styles.themeButton,
                {
                  backgroundColor: isActive ? colors.primary : colors.cardBackground,
                  borderColor: isActive ? colors.primary : colors.border,
                },
              ]}
              onPress={() => setThemeMode(option.mode)}>
              <IconSymbol
                name={option.icon as IconSymbolName}
                size={20}
                color={isActive ? '#FFFFFF' : colors.text.primary}
              />
              <ThemedText
                style={[
                  styles.themeText,
                  isActive && styles.themeTextActive,
                ]}>
                {option.label}
              </ThemedText>
            </TouchableOpacity>
          );
        })}
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
  themeContainer: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  themeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 100,
    justifyContent: 'center',
  },
  themeText: {
    fontSize: 14,
    fontWeight: '500',
  },
  themeTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
