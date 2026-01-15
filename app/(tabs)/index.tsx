import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import BackButton from '@/assets/icons/svg/back';
import CloseIcon from '@/assets/icons/svg/close';
import FullHomeIcon from '@/assets/icons/svg/tabs/fullHome';
import ParallaxScrollView from '@/components/layout/parallax-scroll-view';
import { LanguageSelector } from '@/components/ui/language-selector';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { ThemedText } from '@/components/ui/themed-text';
import { useTheme } from '@/hooks/use-theme';
import { useTranslation } from '@/hooks/use-translation';

export default function HomeScreen() {
  const { t } = useTranslation();
  const { colors } = useTheme();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: colors.primary, dark: colors.primary }}
      headerImage={
        <Image
          source={require('@/assets/images/splash-icon.png')}
          style={styles.reactLogo}
        />
      }>
      <View style={styles.container}>
        <FullHomeIcon width={30} height={30} gradientStartColor="#44DBE5" gradientEndColor="#FE6665" />
        <BackButton width={18} height={14} gradientStartColor="#FF4747" gradientEndColor="#44DBE5" />
        <CloseIcon color={colors.text.primary} size={24} />
        <ThemedText type="title">{t('home.title')}</ThemedText>
        <ThemedText type="subtitle">{t('home.subtitle')}</ThemedText>
        <View style={styles.settingsSection}>
          <LanguageSelector />
          <View style={styles.themeSection}>
            <ThemeSwitcher />
          </View>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
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
