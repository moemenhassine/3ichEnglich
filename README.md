# Welcome to 3ich-english app 👋

A modern React Native application built with Expo, featuring internationalization (i18n), theme management, and a clean component architecture.

## Features

- 🌍 **Internationalization (i18n)** - Support for English, French, and Arabic
- 🎨 **Theme Management** - Light, Dark, and System theme modes
- 📱 **Cross-platform** - iOS, Android, and Web support
- 🧩 **Component Architecture** - Organized components by type (layout, UI, cards)
- ⚡ **TypeScript** - Full type safety
- 🎯 **Expo Router** - File-based routing

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Documentation

- [Theme System Guide](./THEME_GUIDE.md) - Learn how to customize themes and colors
- [i18n Documentation](./i18n/README.md) - Internationalization setup and usage


## Project Structure

```
3ichEnglich/
├── app/                          # Application screens and routing (Expo Router)
│   ├── _layout.tsx              # Root layout component
│   ├── modal.tsx                # Modal screen
│   └── (tabs)/                  # Tab navigation group
│       ├── _layout.tsx          # Tab layout configuration
│       ├── index.tsx            # Home tab screen
│       └── explore.tsx          # Explore tab screen
│
├── assets/                       # Static assets
│   ├── animations/              # Animation files
│   ├── fonts/                   # Custom fonts
│   ├── icons/                   # Icon assets
│   │   ├── png/                 # PNG icons
│   │   └── svg/                 # SVG icons
│   └── images/                  # Image assets
│       ├── icon.png
│       ├── splash-icon.png
│       └── ...
│
├── components/                   # Reusable React components
│   ├── cards/                   # Card components
│   ├── layout/                  # Layout components
│   │   └── parallax-scroll-view.tsx
│   └── ui/                      # UI components
│       ├── haptic-tab.tsx       # Tab button with haptic feedback
│       ├── icon-symbol.tsx      # Icon component
│       ├── icon-symbol.ios.tsx  # iOS icon component
│       ├── language-selector.tsx # Language selector
│       ├── theme-switcher.tsx   # Theme switcher
│       ├── themed-text.tsx      # Themed text component
│       └── themed-view.tsx      # Themed view component
│
├── constants/                    # Application constants
│   └── theme.ts                 # Theme configuration and colors
│
├── context/                      # React Context providers
│   ├── I18nContext.tsx          # Internationalization context
│   └── ThemeContext.tsx         # Theme management context
│
├── hooks/                        # Custom React hooks
│   ├── use-color-scheme.ts      # Color scheme hook
│   ├── use-color-scheme.web.ts  # Web color scheme hook
│   ├── use-theme.ts             # Theme hook
│   ├── use-theme-color.ts       # Theme color hook
│   └── use-translation.ts       # Translation hook
│
├── i18n/                         # Internationalization
│   ├── index.ts                 # i18n configuration
│   ├── README.md                # i18n documentation
│   └── locales/                 # Translation files
│       ├── ar/                  # Arabic translations
│       │   └── translation.json
│       ├── en/                  # English translations
│       │   └── translation.json
│       └── fr/                  # French translations
│           └── translation.json
│
├── services/                     # API services and business logic
│
├── store/                        # State management (Redux/Zustand/etc.)
│
├── types/                        # TypeScript type definitions
│
├── utils/                        # Utility functions
│
├── validation/                   # Form validation schemas
│
├── app.json                      # Expo configuration
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── eslint.config.js              # ESLint configuration
├── expo-env.d.ts                 # Expo TypeScript definitions
├── THEME_GUIDE.md                # Theme system documentation
└── README.md                     # Project documentation
```



