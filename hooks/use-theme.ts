import { Colors } from '@/constants/theme';
import { useTheme as useThemeContext } from '@/context/ThemeContext';

/**
 * Custom hook to access theme colors and properties
 * This hook provides easy access to the current theme and colors
 */
export function useTheme() {
  const { theme, themeMode, setThemeMode, isDark } = useThemeContext();

  const colors = Colors[theme];

  return {
    theme,
    themeMode,
    setThemeMode,
    isDark,
    colors,
  };
}
