import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ui/themed-text';
import { useTheme } from '@/hooks/use-theme';

export default function CommunityScreen() {
    const { colors } = useTheme();

    return (

        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <ThemedText type="title">Community</ThemedText>
            <ThemedText type="subtitle">Join the community</ThemedText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        gap: 16,
        padding: 20,
    },
});
