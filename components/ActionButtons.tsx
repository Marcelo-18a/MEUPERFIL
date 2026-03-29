import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
    ViewStyle,
} from 'react-native';

export interface ActionButton {
    label: string;
    onPress: () => void;
    isPrimary?: boolean;
}

interface ActionButtonsProps {
    buttons: ActionButton[];
    style?: ViewStyle;
}

export default function ActionButtons({ buttons, style }: ActionButtonsProps) {
    const { width } = useWindowDimensions();
    const isSmallScreen = width < 600;

    return (
        <View style={[styles.actionsRow, isSmallScreen && styles.actionsRowSmall, style]}>
            {buttons.map((button, index) => (
                <TouchableOpacity
                    key={`${button.label}-${index}`}
                    style={[
                        button.isPrimary ? styles.primaryButton : styles.secondaryButton,
                        isSmallScreen && styles.buttonSmall,
                        { flex: 1 },
                    ]}
                    activeOpacity={0.85}
                    onPress={button.onPress}
                >
                    <Text
                        style={[
                            button.isPrimary
                                ? styles.primaryButtonText
                                : styles.secondaryButtonText,
                            isSmallScreen && styles.buttonTextSmall,
                        ]}
                    >
                        {button.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    actionsRow: {
        marginTop: 22,
        width: '100%',
        flexDirection: 'row',
        gap: 10,
    },
    actionsRowSmall: {
        gap: 8,
        marginTop: 16,
    },
    primaryButton: {
        backgroundColor: '#43a9ff',
        borderRadius: 12,
        paddingVertical: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryButtonText: {
        color: '#041325',
        fontSize: 14,
        fontWeight: '700',
    },
    secondaryButton: {
        backgroundColor: '#16213a',
        borderRadius: 12,
        paddingVertical: 13,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#2a3f67',
    },
    secondaryButtonText: {
        color: '#d8e6f7',
        fontSize: 14,
        fontWeight: '600',
    },
    buttonSmall: {
        paddingVertical: 11,
    },
    buttonTextSmall: {
        fontSize: 13,
    },
});
