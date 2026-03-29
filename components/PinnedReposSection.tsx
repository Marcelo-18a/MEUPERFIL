import React from 'react';
import {
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from 'react-native';

export interface Repository {
    name: string;
    description: string;
    url: string;
    language?: string;
    stars?: number;
    imageUrl?: string;
}

interface PinnedReposSectionProps {
    repos: Repository[];
    title?: string;
}

export default function PinnedReposSection({
    repos,
    title = 'Repositórios Fixados',
}: PinnedReposSectionProps) {
    const { width } = useWindowDimensions();
    const isSmallScreen = width < 600;

    const handleOpenRepo = async (url: string) => {
        const canOpen = await Linking.canOpenURL(url);
        if (canOpen) {
            await Linking.openURL(url);
        }
    };

    if (repos.length === 0) return null;

    return (
        <View style={styles.section}>
            <Text style={[styles.title, isSmallScreen && styles.titleSmall]}>{title}</Text>

            <View style={[styles.reposContainer, isSmallScreen && styles.reposContainerSmall]}>
                {repos.map((repo) => (
                    <TouchableOpacity
                        key={repo.name}
                        style={[
                            styles.repoCard,
                            isSmallScreen && styles.repoCardSmall,
                            { flex: isSmallScreen ? 1 : 0.48 },
                        ]}
                        onPress={() => handleOpenRepo(repo.url)}
                        activeOpacity={0.7}
                    >
                        {repo.imageUrl && (
                            <Image
                                source={{ uri: repo.imageUrl }}
                                style={styles.repoImage}
                                resizeMode="cover"
                            />
                        )}
                        <View
                            style={[
                                styles.repoContent,
                                repo.imageUrl && styles.repoContentWithImage,
                            ]}
                        >
                            <Text style={[styles.repoName, isSmallScreen && styles.repoNameSmall]}>
                                {repo.name}
                            </Text>
                            <Text style={[styles.repoDescription, isSmallScreen && styles.repoDescriptionSmall]}>
                                {repo.description}
                            </Text>

                            <View style={styles.repoFooter}>
                                {repo.language && (
                                    <Text style={[styles.repoLanguage, isSmallScreen && styles.repoLanguageSmall]}>
                                        {repo.language}
                                    </Text>
                                )}
                                {repo.stars !== undefined && (
                                    <Text style={[styles.repoStars, isSmallScreen && styles.repoStarsSmall]}>
                                        ⭐ {repo.stars}
                                    </Text>
                                )}
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        marginTop: 26,
        gap: 12,
    },
    title: {
        color: '#f8fbff',
        fontSize: 22,
        fontWeight: '700',
    },
    titleSmall: {
        fontSize: 18,
    },
    reposContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 12,
    },
    reposContainerSmall: {
        gap: 10,
    },
    repoCard: {
        backgroundColor: '#111624',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#1e2940',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
    },
    repoCardSmall: {
        borderRadius: 12,
    },
    repoImage: {
        width: '100%',
        height: 120,
        backgroundColor: '#0b1020',
    },
    repoContent: {
        padding: 14,
    },
    repoContentWithImage: {
        paddingTop: 12,
    },
    repoName: {
        color: '#f8fbff',
        fontSize: 16,
        fontWeight: '700',
    },
    repoNameSmall: {
        fontSize: 14,
    },
    repoDescription: {
        color: '#c2d3eb',
        fontSize: 13,
        marginTop: 6,
        lineHeight: 18,
    },
    repoDescriptionSmall: {
        fontSize: 12,
        lineHeight: 16,
        marginTop: 4,
    },
    repoFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        gap: 8,
    },
    repoLanguage: {
        color: '#43a9ff',
        fontSize: 12,
        fontWeight: '600',
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: '#0b1020',
        borderRadius: 6,
    },
    repoLanguageSmall: {
        fontSize: 11,
        paddingVertical: 3,
        paddingHorizontal: 6,
    },
    repoStars: {
        color: '#ffd700',
        fontSize: 12,
        fontWeight: '600',
    },
    repoStarsSmall: {
        fontSize: 11,
    },
});
