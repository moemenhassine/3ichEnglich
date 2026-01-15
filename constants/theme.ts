/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * You can customize these colors according to your brand chart.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

// Primary colors - customize these according to your brand

// Extended color palette for light theme
export const Colors = {
  light: {
    primary: "#FE6665",
    primaryVariant: "#FF8E94",
    secondary: "#44DBE5",
    secondaryVariant: "#FFFFFF",
    tertiary: "#E2F050",
    tertiaryVariant: "#FFFFFF",
    background: "#FFFFFF",
    cardBackground: "#F2F9FF",
    border: "#687076",
    danger: "#ED1C24",

    toast: {
      success: "#16A34A99",
      error: "#BF000399",
      warning: "#FFA91D",
      info: "#0000FF",
    },


    // Text colors
    text: {
      primary: "#132A4C",
      secondary: "#687076",
      tertiary: "#9BA1A6",
    },
    Tabs: {
      background: "#120101",
      text: "#ffffffff",
      activeText: "#44DBE5",
    }

  },
  dark: {
    primary: "#FE6665",
    primaryVariant: "#FF8E94",
    secondary: "#44DBE5",
    secondaryVariant: "#FEF2F2",
    tertiary: "#E2F050",
    tertiaryVariant: "#FFFFFF",
    background: "#132A4C",
    cardBackground: "#1D3962",
    border: "#FFFFFF",
    danger: "#ED1C24",

    toast: {
      success: "#16A34A99",
      error: "#BF000399",
      warning: "#FFA91D",
      warningVariant: "#F3CD36",
    },

    // Text colors
    text: {
      primary: "#FFFFFF",
      secondary: "#E9EAED",
      tertiary: "#D7D9E0",
    },
    Tabs: {
      background: "#132a4cd1",
      text: "#FFFFFF",
      activeText: "#44DBE5",
    }
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
