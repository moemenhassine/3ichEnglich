# Theme System Guide

## How the theme system works

The application's theme system allows switching between **Light**, **Dark**, and **System** modes (which follows system preferences).

### Architecture

1. **ThemeContext** (`context/ThemeContext.tsx`)
   - Manages theme state (light/dark/system)
   - Saves preference in AsyncStorage
   - Automatically detects system theme if mode is "system"

2. **Colors** (`constants/theme.ts`)
   - Defines all colors for light and dark themes
   - You can customize these colors according to your brand chart

3. **Hooks**
   - `useTheme()` : Full access to theme and colors
   - `useThemeColor()` : Gets a specific color based on the theme

4. **Components**
   - `ThemeSwitcher` : Component to change the theme
   - `ThemedText` and `ThemedView` : Components that automatically adapt to the theme

## Color customization

### Modifying colors in `constants/theme.ts`

You can customize all colors according to your brand chart:

```typescript
export const Colors = {
  light: {
    // Text colors
    text: '#11181C',              // Main text
    textSecondary: '#687076',     // Secondary text
    textTertiary: '#9BA1A6',      // Tertiary text
    
    // Background colors
    background: '#FFFFFF',        // Main background
    backgroundSecondary: '#F5F5F7', // Secondary background
    backgroundTertiary: '#E5E5EA',  // Tertiary background
    
    // Accent colors (your brand color)
    tint: '#0a7ea4',              // Primary color
    tintSecondary: '#0D8BC4',     // Secondary color
    tintTertiary: '#0B6A8A',      // Tertiary color
    
    // UI element colors
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: '#0a7ea4',
    
    // Border colors
    border: '#E5E5EA',
    divider: '#D1D1D6',
    
    // Status colors
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    info: '#0a7ea4',
    
    // Card colors
    card: '#FFFFFF',
    cardBackground: '#F9F9F9',
  },
  dark: {
    // Same structure for dark theme
    // Customize according to your needs
  },
};
```

### Customization example

If your brand chart uses blue `#0066FF` as the primary color:

```typescript
const tintColorLight = '#0066FF';
const tintColorDark = '#4A9EFF';

export const Colors = {
  light: {
    tint: tintColorLight,
    tintSecondary: '#0052CC',
    // ... other colors
  },
  dark: {
    tint: tintColorDark,
    tintSecondary: '#6BB3FF',
    // ... other colors
  },
};
```

## Usage in components

### Using `useTheme()`

```tsx
import { useTheme } from '@/hooks/use-theme';

export default function MyComponent() {
  const { theme, isDark, colors, setThemeMode } = useTheme();

  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>
        Current theme: {theme}
      </Text>
      <Button 
        onPress={() => setThemeMode('dark')} 
        title="Dark mode"
      />
    </View>
  );
}
```

### Using `useThemeColor()`

```tsx
import { useThemeColor } from '@/hooks/use-theme-color';

export default function MyComponent() {
  const textColor = useThemeColor({}, 'text');
  const bgColor = useThemeColor({}, 'background');

  return (
    <View style={{ backgroundColor: bgColor }}>
      <Text style={{ color: textColor }}>My text</Text>
    </View>
  );
}
```

### Using Themed components

```tsx
import { ThemedText, ThemedView } from '@/components/themed-text';

export default function MyComponent() {
  return (
    <ThemedView>
      <ThemedText type="title">Title</ThemedText>
      <ThemedText type="subtitle">Subtitle</ThemedText>
    </ThemedView>
  );
}
```

## Changing the theme

### Via the ThemeSwitcher component

The `ThemeSwitcher` component is already integrated into the home page. It allows choosing between:
- **Light** : Light mode
- **Dark** : Dark mode  
- **System** : Follows system preferences

### Programmatically

```tsx
const { setThemeMode } = useTheme();

// Switch to light mode
await setThemeMode('light');

// Switch to dark mode
await setThemeMode('dark');

// Follow system
await setThemeMode('system');
```

## Persistence

The theme choice is automatically saved in AsyncStorage and restored on the next app launch.

## Integration with React Navigation

The theme is automatically applied to React Navigation via `ThemeProvider` in `app/_layout.tsx`. Navigation colors automatically adapt to the selected theme.

## Optimizations

The theme system has been optimized to remove redundant code:
- Removed unnecessary `useEffect` in `ThemeContext`
- Consistent use of `useTheme()` instead of `useColorScheme()` in all components
- Simplified and more maintainable code

## Best practices

1. **Always use theme colors** : Don't hardcode colors, use `colors.tint`, `colors.text`, etc.

2. **Use `useTheme()` everywhere** : For consistency, use `useTheme()` instead of `useColorScheme()` to access the theme.

3. **Test both themes** : Make sure your interface works well in both light and dark modes.

4. **Color consistency** : Use colors defined in `Colors` to maintain visual consistency.

5. **Customization** : Modify colors in `constants/theme.ts` according to your brand chart, but keep the structure so everything works correctly.
