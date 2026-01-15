import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ui/themed-text';
import { useTheme } from '@/hooks/use-theme';
import { useTranslation } from '@/hooks/use-translation';

export default function SpeakingScreen() {
    const { t } = useTranslation();
    const { colors } = useTheme();

    return (

        <View style={[styles.overlay, { backgroundColor: colors.background }]}>
            <View style={styles.container}>
                <ThemedText type="title">Speaking</ThemedText>
                <ThemedText type="subtitle">Practice your speaking skills</ThemedText>
            </View>
        </View>

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
