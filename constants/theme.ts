/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * You can customize these colors according to your brand chart.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

// Primary colors - customize these according to your brand
const tintColorLight = '#0a7ea4';
const tintColorDark = '#4A9EFF';

// Extended color palette for light theme
export const Colors = {
  light: {
    // Text colors
    text: '#11181C',
    textSecondary: '#687076',
    textTertiary: '#9BA1A6',
    
    // Background colors
    background: '#FFFFFF',
    backgroundSecondary: '#F5F5F7',
    backgroundTertiary: '#E5E5EA',
    
    // Accent colors
    tint: tintColorLight,
    tintSecondary: '#0D8BC4',
    tintTertiary: '#0B6A8A',
    
    // UI element colors
    icon: '#687076',
    iconSecondary: '#9BA1A6',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    
    // Border and divider colors
    border: '#E5E5EA',
    divider: '#D1D1D6',
    
    // Status colors
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    info: tintColorLight,
    
    // Card and surface colors
    card: '#FFFFFF',
    cardBackground: '#F9F9F9',
  },
  dark: {
    // Text colors
    text: '#ECEDEE',
    textSecondary: '#9BA1A6',
    textTertiary: '#687076',
    
    // Background colors
    background: '#000000',
    backgroundSecondary: '#1C1C1E',
    backgroundTertiary: '#2C2C2E',
    
    // Accent colors
    tint: tintColorDark,
    tintSecondary: '#6BB3FF',
    tintTertiary: '#8CC8FF',
    
    // UI element colors
    icon: '#9BA1A6',
    iconSecondary: '#687076',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    
    // Border and divider colors
    border: '#38383A',
    divider: '#48484A',
    
    // Status colors
    success: '#30D158',
    warning: '#FF9F0A',
    error: '#FF453A',
    info: tintColorDark,
    
    // Card and surface colors
    card: '#1C1C1E',
    cardBackground: '#2C2C2E',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
