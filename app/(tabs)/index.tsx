import React from 'react';
import {
	Image,
	Linking,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

const PROFILE_IMAGE_URL =
	'https://avatars.githubusercontent.com/u/181166926?s=400&u=598275132c3f359c8fb06ed681ae384280279420&v=4';
const INSTAGRAM_URL = 'https://instagram.com/sla_marcello';
const GITHUB_URL = 'https://github.com/Marcelo-18a';
const WHATSAPP_URL = 'https://wa.me/5513997940109?text=Oi%20Marcelo%2C%20vim%20pelo%20seu%20perfil!';
const BOTTOM_IMAGE_URL = 'https://t2.tudocdn.net/526508?w=646&h=284';

const GAMES = [
	{
		name: 'CS2',
		imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg',
		description: 'Minha patente: prata 3',
	},
	{
		name: 'Valorant',
		imageUrl: 'https://wp.logos-download.com/wp-content/uploads/2021/01/Valorant_Logo.png?dl',
		description: 'Meu elo: plat 3',
	},
	{
		name: 'Minecraft',
		imageUrl: 'https://graphicsprings.com/wp-content/uploads/2023/07/image-62-1024x576.png.webp',
		description: 'Modo de jogo: HG',
	},
	{
		name: 'Free Fire',
		imageUrl: BOTTOM_IMAGE_URL,
		description: 'Patente: mestre',
	},
];

export default function ProfileScreen() {
	const handleOpenInstagram = async () => {
		const canOpen = await Linking.canOpenURL(INSTAGRAM_URL);
		if (canOpen) {
			await Linking.openURL(INSTAGRAM_URL);
		}
	};

	const handleOpenGithub = async () => {
		const canOpen = await Linking.canOpenURL(GITHUB_URL);
		if (canOpen) {
			await Linking.openURL(GITHUB_URL);
		}
	};

	const handleOpenWhatsApp = async () => {
		const canOpen = await Linking.canOpenURL(WHATSAPP_URL);
		if (canOpen) {
			await Linking.openURL(WHATSAPP_URL);
		}
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar barStyle="light-content" />

			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.card}>
					<Image source={{ uri: PROFILE_IMAGE_URL }} style={styles.avatar} />

					<Text style={styles.name}>Marcelo</Text>
					<TouchableOpacity activeOpacity={0.8} onPress={handleOpenInstagram}>
						<Text style={styles.username}>@sla_marcello</Text>
					</TouchableOpacity>
					<Text style={styles.bio}>
						Prazer, Marcelo! Tenho 20 anos e sou apaixonado por tecnologia desde criança. Sempre fui curioso e gostei de descobrir como tudo funciona, e foi esse interesse que me levou a entrar no curso de Desenvolvimento de Sistemas. Atualmente, estou no 4º semestre e estou adorando cada momento dessa jornada. Adoro aprender novas linguagens de programação, explorar frameworks e criar projetos que possam impactar positivamente a vida das pessoas. Estou animado para continuar crescendo como desenvolvedor e contribuir para a comunidade de tecnologia!
					</Text>

					<View style={styles.actionsRow}>
						<TouchableOpacity style={styles.primaryButton} activeOpacity={0.85} onPress={handleOpenGithub}>
							<Text style={styles.primaryButtonText}>Entrar no GitHub</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.secondaryButton} activeOpacity={0.85} onPress={handleOpenWhatsApp}>
							<Text style={styles.secondaryButtonText}>Falar no WhatsApp</Text>
						</TouchableOpacity>
					</View>

				</View>

				<View style={styles.gamesSection}>
					<Text style={styles.gamesTitle}>Jogos que eu ja joguei</Text>

					{GAMES.map((game) => (
						<View key={game.name} style={styles.gameListItem}>
							<Image source={{ uri: game.imageUrl }} style={styles.gameImage} resizeMode="cover" />
							<View style={styles.gameTextArea}>
								<Text style={styles.gameName}>{game.name}</Text>
								<Text style={styles.gameDescription}>{game.description}</Text>
							</View>
						</View>
					))}
				</View>

			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#07090f',
	},
	container: {
		flexGrow: 1,
		paddingHorizontal: 20,
		paddingVertical: 24,
		backgroundColor: '#07090f',
	},
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
	statsRow: {
		marginTop: 24,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 10,
	},
	statBox: {
		flex: 1,
		backgroundColor: '#0b1020',
		borderRadius: 14,
		paddingVertical: 14,
		borderWidth: 1,
		borderColor: '#1f2f53',
		alignItems: 'center',
	},
	statValue: {
		color: '#f8fbff',
		fontSize: 18,
		fontWeight: '700',
	},
	statLabel: {
		color: '#87a0c3',
		fontSize: 12,
		marginTop: 3,
		textTransform: 'uppercase',
		letterSpacing: 0.8,
	},
	actionsRow: {
		marginTop: 22,
		width: '100%',
		flexDirection: 'row',
		gap: 10,
	},
	primaryButton: {
		flex: 1,
		backgroundColor: '#43a9ff',
		borderRadius: 12,
		paddingVertical: 13,
		alignItems: 'center',
	},
	primaryButtonText: {
		color: '#041325',
		fontSize: 14,
		fontWeight: '700',
	},
	secondaryButton: {
		flex: 1,
		backgroundColor: '#16213a',
		borderRadius: 12,
		paddingVertical: 13,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#2a3f67',
	},
	secondaryButtonText: {
		color: '#d8e6f7',
		fontSize: 14,
		fontWeight: '600',
	},
	gamesSection: {
		marginTop: 18,
		gap: 12,
	},
	gamesTitle: {
		color: '#f8fbff',
		fontSize: 22,
		fontWeight: '700',
	},
	gameListItem: {
		backgroundColor: '#111624',
		borderRadius: 18,
		borderWidth: 1,
		borderColor: '#1e2940',
		padding: 14,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},
	gameImage: {
		width: 88,
		height: 88,
		borderRadius: 10,
		backgroundColor: '#0b1020',
	},
	gameTextArea: {
		flex: 1,
	},
	gameName: {
		color: '#f8fbff',
		fontSize: 18,
		fontWeight: '700',
	},
	gameDescription: {
		color: '#c2d3eb',
		fontSize: 14,
		marginTop: 4,
	},
});
