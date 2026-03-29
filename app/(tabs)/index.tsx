import ActionButtons, { ActionButton } from '@/components/ActionButtons';
import PinnedReposSection, { Repository } from '@/components/PinnedReposSection';
import ProfileHeader from '@/components/ProfileHeader';
import StatsSection, { Stat } from '@/components/StatsSection';
import React from 'react';
import {
	Image,
	Linking,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native';

const PROFILE_IMAGE_URL =
	'https://avatars.githubusercontent.com/u/181166926?s=400&u=598275132c3f359c8fb06ed681ae384280279420&v=4';
const INSTAGRAM_URL = 'https://instagram.com/sla_marcello';
const GITHUB_URL = 'https://github.com/Marcelo-18a';
const WHATSAPP_URL = 'https://wa.me/5513997940109?text=Oi%20Marcelo%2C%20vim%20pelo%20seu%20perfil!';
const BOTTOM_IMAGE_URL = 'https://t2.tudocdn.net/526508?w=646&h=284';

const PROFILE_STATS: Stat[] = [
	{ label: 'Repositórios', value: '4' },
	{ label: 'Seguidores', value: '12' },
	{ label: 'Seguindo', value: '18' },
	{ label: 'Contribuições', value: '76' },
];

const PINNED_REPOS: Repository[] = [
	{
		name: 'Marcelo-18a',
		description: 'Meu README.md pessoal com stats e informações',
		url: 'https://github.com/Marcelo-18a/Marcelo-18a',
		language: 'Markdown',
		stars: 0,
		imageUrl: 'https://opengraph.githubassets.com/default-image',
	},
	{
		name: 'Axis_equipe',
		description: 'Projeto de equipe - Desenvolvimento colaborativo',
		url: 'https://github.com/Marcelo-18a/Axis_equipe',
		language: 'TypeScript',
		stars: 2,
		imageUrl: 'https://opengraph.githubassets.com/default-image',
	},
	{
		name: 'Green-api',
		description: 'Integração com API Green - Automação WhatsApp',
		url: 'https://github.com/Marcelo-18a/Green-api',
		language: 'JavaScript',
		stars: 1,
		imageUrl: 'https://opengraph.githubassets.com/default-image',
	},
	{
		name: 'MEUPERFIL',
		description: 'Seu portfólio pessoal com Expo e React Native',
		url: 'https://github.com/Marcelo-18a/MEUPERFIL',
		language: 'TypeScript',
		stars: 0,
		imageUrl: 'https://opengraph.githubassets.com/default-image',
	},
];

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

	const actionButtons: ActionButton[] = [
		{
			label: 'Entrar no GitHub',
			onPress: handleOpenGithub,
			isPrimary: true,
		},
		{
			label: 'Falar no WhatsApp',
			onPress: handleOpenWhatsApp,
			isPrimary: false,
		},
	];

	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar barStyle="light-content" />

			<ScrollView contentContainerStyle={styles.container}>
				{/* Profile Header */}
				<ProfileHeader
					name="Marcelo"
					username="@sla_marcello"
					bio="Prazer, Marcelo! Tenho 20 anos e sou apaixonado por tecnologia desde criança. Sempre fui curioso e gostei de descobrir como tudo funciona, e foi esse interesse que me levou a entrar no curso de Desenvolvimento de Sistemas. Atualmente, estou no 4º semestre e estou adorando cada momento dessa jornada. Adoro aprender novas linguagens de programação, explorar frameworks e criar projetos que possam impactar positivamente a vida das pessoas. Estou animado para continuar crescendo como desenvolvedor e contribuir para a comunidade de tecnologia!"
					profileImageUrl={PROFILE_IMAGE_URL}
					instagramUrl={INSTAGRAM_URL}
					onInstagramPress={handleOpenInstagram}
				/>

				{/* Action Buttons */}
				<View style={styles.card}>
					<ActionButtons buttons={actionButtons} />
				</View>

				{/* Statistics Section */}
				<View style={styles.card}>
					<Text style={styles.sectionTitle}>Minhas Estatísticas</Text>
					<StatsSection stats={PROFILE_STATS} />
				</View>

				{/* Pinned Repositories Section */}
				<View style={styles.card}>
					<PinnedReposSection repos={PINNED_REPOS} title="Repositórios Fixados" />
				</View>

				{/* Games Section */}
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
		gap: 16,
	},
	card: {
		borderRadius: 24,
		backgroundColor: '#111624',
		borderWidth: 1,
		borderColor: '#1e2940',
		paddingVertical: 30,
		paddingHorizontal: 22,
		shadowColor: '#000',
		shadowOpacity: 0.35,
		shadowRadius: 16,
		shadowOffset: { width: 0, height: 10 },
		elevation: 6,
	},
	sectionTitle: {
		color: '#f8fbff',
		fontSize: 22,
		fontWeight: '700',
		marginBottom: 14,
	},
	gamesSection: {
		marginTop: 18,
		marginBottom: 20,
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
