import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View
} from 'react-native';

interface ProfileHeaderProps {
    name: string;
    username: string;
    bio: string;
    profileImageUrl: string;
    instagramUrl?: string;
    onInstagramPress?: () => void;
}

export default function ProfileHeader({
    name,
    username,
    bio,
    profileImageUrl,
    instagramUrl,
    onInstagramPress,
}: ProfileHeaderProps) {
    const { width } = useWindowDimensions();
    const isSmallScreen = width < 600;

    return (
        <View style={[styles.card, isSmallScreen && styles.cardSmall]}>
            <Image source={{ uri: profileImageUrl }} style={styles.avatar} />
            <Text style={[styles.name, isSmallScreen && styles.nameSmall]}>{name}</Text>

            <TouchableOpacity activeOpacity={0.8} onPress={onInstagramPress}>
                <Text style={styles.username}>@{username.replace('@', '')}</Text>
            </TouchableOpacity>

            <Text style={[styles.bio, isSmallScreen && styles.bioSmall]}>{bio}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 24,
        backgroundColor: '#111624',
        borderWidth: 1,
        borderColor: '#1e2940',
        paddingVertical: 30,
        paddingHorizontal: 22,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.35,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 10 },
        elevation: 6,
    },
    cardSmall: {
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#43a9ff',
        marginBottom: 14,
    },
    name: {
        color: '#f8fbff',
        fontSize: 28,
        fontWeight: '700',
        letterSpacing: 0.2,
    },
    nameSmall: {
        fontSize: 24,
    },
    username: {
        color: '#8da5c5',
        fontSize: 15,
        marginTop: 4,
    },
    bio: {
        color: '#c2d3eb',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 14,
        lineHeight: 21,
        maxWidth: 300,
    },
    bioSmall: {
        fontSize: 13,
        maxWidth: '100%',
        lineHeight: 19,
    },
});
