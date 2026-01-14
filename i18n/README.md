# Internationalization (I18n)

This project uses `i18next` and `react-i18next` for multilingual translation management.

## Supported Languages

- **English (en)** - Default language
- **French (fr)**
- **Arabic (ar)**

## Translation File Structure

Translation files are organized in `i18n/locales/`:

```
i18n/
├── index.ts                    # I18n configuration
└── locales/
    ├── en/
    │   └── translation.json    # English translations
    ├── fr/
    │   └── translation.json    # French translations
    └── ar/
        └── translation.json    # Arabic translations
```

## Usage

### In a React Component

```tsx
import { useTranslation } from '@/hooks/use-translation';

export default function MyComponent() {
  const { t, language, changeLanguage } = useTranslation();

  return (
    <View>
      <Text>{t('common.welcome')}</Text>
      <Text>{t('home.title')}</Text>
      <Button onPress={() => changeLanguage('fr')} title="Français" />
    </View>
  );
}
```

### Changing Language

```tsx
const { changeLanguage } = useTranslation();

// Switch to French
await changeLanguage('fr');

// Switch to Arabic
await changeLanguage('ar');

// Switch to English
await changeLanguage('en');
```

### Adding New Translations

1. Open the corresponding translation file in `i18n/locales/[lang]/translation.json`
2. Add your translation key:

```json
{
  "common": {
    "welcome": "Welcome"
  },
  "mySection": {
    "myKey": "My translated value"
  }
}
```

3. Use it in your component:

```tsx
const { t } = useTranslation();
<Text>{t('mySection.myKey')}</Text>
```

### Using the Language Selector

A `LanguageSelector` component is available to allow users to change the language:

```tsx
import { LanguageSelector } from '@/components/ui/language-selector';

export default function SettingsScreen() {
  return (
    <View>
      <LanguageSelector />
    </View>
  );
}
```

## Automatic Language Detection

The application automatically detects the system language on first launch. The language preference is saved and restored on each app opening.

## Notes

- The default language is English if the system language is not supported
- Translations are loaded asynchronously
- Language changes are persistent thanks to AsyncStorage
