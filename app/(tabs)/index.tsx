import { StyleSheet, View } from 'react-native';

import BackButton from '@/assets/icons/svg/back';
import { LanguageSelector } from '@/components/ui/language-selector';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { ThemedText } from '@/components/ui/themed-text';
import { useTheme } from '@/hooks/use-theme';
import { useTranslation } from '@/hooks/use-translation';

export default function HomeScreen() {
  const { t } = useTranslation();
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <BackButton width={18} height={14} gradientStartColor="#FF4747" gradientEndColor="#44DBE5" />
      <ThemedText type="title">{t('home.title')}</ThemedText>
      <ThemedText type="subtitle">{t('home.subtitle')}</ThemedText>
      <View style={styles.settingsSection}>
        <LanguageSelector />
        <View style={styles.themeSection}>
          <ThemeSwitcher />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
    paddingTop: 100,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  settingsSection: {
    marginTop: 16,
    gap: 24,
  },
  languageSection: {
    marginTop: 0,
  },
  themeSection: {
    marginTop: 0,
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    resizeMode: 'contain',

  },
});
