import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { I18nProvider } from '@/context/I18nContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { useTheme } from '@/hooks/use-theme';
import '@/i18n'; // Initialize i18n

export const unstable_settings = {
  anchor: '(tabs)',
};

function AppContent() {
  const { theme } = useTheme();

  return (
    <NavigationThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
    </NavigationThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </I18nProvider>
  );
}
