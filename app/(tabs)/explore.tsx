import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ui/themed-text';
import { useTranslation } from '@/hooks/use-translation';

export default function TabTwoScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ThemedText type="title">{t('explore.title')}</ThemedText>
      <ThemedText type="subtitle">{t('explore.subtitle')}</ThemedText>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});