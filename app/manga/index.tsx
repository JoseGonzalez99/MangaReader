import { FontAwesome } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

import mangainfo from '@/assets/data/MangaMainHome.json'
import { colors } from '@/constants/tokens'

interface BigMangaCoverCardProps {
	title: string
	rating: number
	image: string
}

const BigMangaCoverCard = ({ title, rating, image }: BigMangaCoverCardProps) => {
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

interface SmallCoverMangaCardProps {
	title: string
	image: string
}

const SmallMangaCard = ({ title, image }: SmallCoverMangaCardProps) => {
	return (
		<ImageBackground source={{ uri: image }} style={styles.smallCard} imageStyle={styles.cardImage}>
			<View style={styles.smallCardContent}>
				<Text style={styles.smallCardTitle}>{title}</Text>
			</View>
		</ImageBackground>
	)
}

const MangaScreen = () => {
	return (
		<ScrollView style={styles.container}>
			<BigMangaCoverCard
				title={mangainfo.title}
				rating={mangainfo.rating}
				image={mangainfo.bookcover}
			/>

			{/*Buttons secciones Favoritos y readerbutton */}
			<View style={styles.buttonSection}>
				<Pressable onPress={() => console.log('iniciando lectura')} style={styles.favoriteButton}>
					<FontAwesome name="heart" size={32} color={colors.white}></FontAwesome>
				</Pressable>
				<Pressable
					onPress={() => console.log('Agregando en leer más tarde')}
					style={styles.readButton}
				>
					<FontAwesome name="eye" size={32} color={colors.white}></FontAwesome>
					<Text style={styles.buttonText}>Leer | Continuar</Text>
				</Pressable>
			</View>

			{/*Sinopsis del manga */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Descripción</Text>
				<Text style={styles.sinopsisText}>{mangainfo.description}</Text>
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Volúmenes</Text>
				<View style={styles.volumeContainer}>
					{mangainfo.volumenes.map((item, index) => (
						<View style={styles.volumeItem} key={index.toString()}>
							<SmallMangaCard {...item} />
						</View>
					))}
				</View>
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

export default MangaScreen
