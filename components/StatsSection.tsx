import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

export interface Stat {
    label: string;
    value: string | number;
}

interface StatsSectionProps {
    stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
    const { width } = useWindowDimensions();
    const isSmallScreen = width < 600;
    const itemsPerRow = isSmallScreen ? 3 : Math.min(stats.length, 4);

    return (
        <View style={styles.statsRow}>
            {stats.map((stat, index) => (
                <View
                    key={stat.label}
                    style={[
                        styles.statBox,
                        { flex: 1 / itemsPerRow },
                        isSmallScreen && styles.statBoxSmall,
                    ]}
                >
                    <Text style={[styles.statValue, isSmallScreen && styles.statValueSmall]}>
                        {stat.value}
                    </Text>
                    <Text style={[styles.statLabel, isSmallScreen && styles.statLabelSmall]}>
                        {stat.label}
                    </Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    statsRow: {
        marginTop: 24,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        flexWrap: 'wrap',
    },
    statBox: {
        backgroundColor: '#0b1020',
        borderRadius: 14,
        paddingVertical: 14,
        borderWidth: 1,
        borderColor: '#1f2f53',
        alignItems: 'center',
        marginBottom: 10,
    },
    statBoxSmall: {
        paddingVertical: 12,
    },
    statValue: {
        color: '#f8fbff',
        fontSize: 18,
        fontWeight: '700',
    },
    statValueSmall: {
        fontSize: 16,
    },
    statLabel: {
        color: '#87a0c3',
        fontSize: 12,
        marginTop: 3,
        textTransform: 'uppercase',
        letterSpacing: 0.8,
    },
    statLabelSmall: {
        fontSize: 10,
        letterSpacing: 0.5,
    },
});
