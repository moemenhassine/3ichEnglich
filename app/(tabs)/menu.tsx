import { ImageBackground, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ui/themed-text';
import { useTheme } from '@/hooks/use-theme';
import { useTranslation } from '@/hooks/use-translation';

export default function MenuScreen() {
    const { t } = useTranslation();
    const { colors } = useTheme();

    return (
        <ImageBackground
            source={require('@/assets/backgroundImage/bg.jpg')}
            style={styles.backgroundImage}
            resizeMode="cover">
            <View style={[styles.overlay, { backgroundColor: colors.background + '80' }]}>
                <View style={styles.container}>
                    <ThemedText type="title">Menu</ThemedText>
                    <ThemedText type="subtitle">Watch live sessions</ThemedText>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        alignItems: 'center',
        gap: 16,
        padding: 20,
    },
});
