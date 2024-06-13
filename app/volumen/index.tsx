import { colors } from '@/constants/tokens'
import { FontAwesome } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'

interface BigMangaVolumenCoverCardProps {
	title: string
	rating: number
	image: string
}
const BigMangaVolumenCoverCard = ({ title, rating, image }: BigMangaVolumenCoverCardProps) => {
	return (
		<ImageBackground
			source={{ uri: image }}
			style={styles.bigCard}
			imageStyle={styles.cardImage}
			resizeMode="stretch"
		>
			<LinearGradient
				// Transparencia en el centro y oscuro en los bordes
				colors={['transparent', 'rgba(0,0,0,0.7)']}
				start={{ x: 0.5, y: 0.6 }}
				end={{ x: 0.5, y: 0.9 }}
				style={styles.vignette}
			/>
			<View style={styles.bigCardContent}>
				<Text style={styles.bigCardTitle}>{title}</Text>
				<View style={styles.ratingContainer}>
					<FontAwesome name="star" size={28} color="#FFD700" />
					<Text style={styles.bigCardRating}>{rating}</Text>
				</View>
			</View>
		</ImageBackground>
	)
}

interface SmallVolumenCoverMangaCardProps {
	title: string
	image: string
}
const SmallVolumenMangaCard = ({ title, image }: SmallVolumenCoverMangaCardProps) => {
	return (
		<ImageBackground source={{ uri: image }} style={styles.smallCard} imageStyle={styles.cardImage}>
			<View style={styles.smallCardContent}>
				<Text style={styles.smallCardTitle}>{title}</Text>
			</View>
		</ImageBackground>
	)
}

const VolumenScreen = () => {
	const volumenportada = {
		title: 'Berserk- Tomo1',
		rating: 4.9,
		image:
			'https://res.cloudinary.com/dlasojxtd/image/upload/v1714756378/mangas/Berserk%20-%20Tomo%2001/c0-1/Berserk_v0_000.webp',
	}

	const chapters = [
		{
			title: 'Capitulo 1',
			image:
				'https://res.cloudinary.com/dlasojxtd/image/upload/v1714756366/mangas/Berserk%20-%20Tomo%2001/c0-1/Berserk_v1_002.webp',
		},
		{
			title: 'Capitulo 2',
			image:
				'https://res.cloudinary.com/dlasojxtd/image/upload/v1714756224/mangas/Berserk%20-%20Tomo%2001/c0-2/Berserk_v1_100.webp',
		},
		{
			title: 'Capitulo 3',
			image:
				'https://res.cloudinary.com/dlasojxtd/image/upload/v1714756417/mangas/Berserk%20-%20Tomo%2001/c0-3/Berserk_v1_167.webp',
		},
	]

	return (
		<ScrollView style={styles.container}>
			{/*Portada del manga */}
			<View style={styles.section}>
				<BigMangaVolumenCoverCard {...volumenportada} />
			</View>

			{/*Volumenes del manga */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Capitulos</Text>
				<FlatList
					data={chapters}
					renderItem={({ item }) => <SmallVolumenMangaCard {...item} />}
					keyExtractor={(item, index) => index.toString()}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
			</View>

			{/*Espacio al final para que le TabBar no solape. */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}></Text>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	section: {
		padding: 10,
		marginBottom: 20,
		backgroundColor: colors.secundary,
		borderRadius: 10,
	},
	buttonSection: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
	},
	sectionTitle: {
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 10,
		color: colors.text,
	},
	bigCard: {
		height: 420,
		borderRadius: 0,
		overflow: 'hidden',
		justifyContent: 'flex-end',
	},
	smallCard: {
		height: 150,
		width: 100,
		borderRadius: 5,
		overflow: 'hidden',
		margin: 5,
		justifyContent: 'flex-end',
	},
	cardImage: {
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
	vignette: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		borderRadius: 10,
	},
	bigCardContent: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
	},
	smallCardContent: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		padding: 5,
	},
	bigCardTitle: {
		fontSize: 40,
		fontWeight: 'bold',
		color: '#fff',
	},
	smallCardTitle: {
		fontSize: 14,
		color: '#fff',
	},
	ratingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	bigCardRating: {
		fontSize: 18,
		color: '#fff',
		marginLeft: 5,
	},
	sinopsisText: {
		fontSize: 15,
		color: '#fff',
		marginLeft: 5,
	},
	readButton: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		padding: 8,
		backgroundColor: colors.primary,
		borderRadius: 35,
	},
	favoriteButton: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		paddingLeft: 15,
		paddingRight: 15,
		backgroundColor: colors.primary,
		borderRadius: 35,
	},
	buttonText: {
		color: colors.text,
		fontSize: 20,
		fontWeight: 'bold',
	},
	buttonTextBold: {
		color: colors.text,
		fontSize: 22,
		fontWeight: 'bold',
	},
	volumeContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	volumeItem: {
		width: '33.33%',
	},
})

export default VolumenScreen
