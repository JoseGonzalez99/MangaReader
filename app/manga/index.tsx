import { colors } from '@/constants/tokens'
import { FontAwesome } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'

const BigMangaCoverCard = ({ title, rating, image }) => {
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

const SmallMangaCard = ({ title, image }) => {
	return (
		<ImageBackground source={{ uri: image }} style={styles.smallCard} imageStyle={styles.cardImage}>
			<View style={styles.smallCardContent}>
				<Text style={styles.smallCardTitle}>{title}</Text>
			</View>
		</ImageBackground>
	)
}

const MangaScreen = () => {
	const mangaHeaderSeccion = {
		title: 'Berserk',
		rating: 4.9,
		image: 'https://m.media-amazon.com/images/I/71lnvXSiITL._AC_UF1000,1000_QL80_.jpg',
	}

	const mangaSinopsis =
		'La historia está ambientada en una época con tintes de la Europa medieval y renacentista,en la cual se cuenta la vida de Guts, un mercenario acompañado del elfo Puck, cazando seres demoníacos llamados apóstoles.'
	const volumenes = [
		{
			title: 'Tomo1',
			image:
				'https://res.cloudinary.com/dlasojxtd/image/upload/v1714756378/mangas/Berserk%20-%20Tomo%2001/c0-1/Berserk_v0_000.webp',
		},
		{
			title: 'Tomo 2',
			image:
				'https://res.cloudinary.com/dlasojxtd/image/upload/v1714763015/mangas/Berserk%20-%20Tomo%2002/c0-4/000.webp',
		},
		{
			title: 'Tomo 3',
			image:
				'https://res.cloudinary.com/dlasojxtd/image/upload/v1714760499/mangas/Berserk%20-%20Tomo%2003/c0-6/Berserk_v0_000.webp',
		},
		{
			title: 'Tomo 4',
			image:
				'https://res.cloudinary.com/dlasojxtd/image/upload/v1714763849/mangas/Berserk%20-%20Tomo%2004/c0-10/Berserk_v00_p000.webp',
		},
		{
			title: 'Tomo 5',
			image:
				'https://res.cloudinary.com/dlasojxtd/image/upload/v1714754393/mangas/Berserk%20-%20Tomo%2005/c0-15/000.webp',
		},
		// Más elementos aquí
	]

	return (
		<ScrollView style={styles.container}>
			{/*Portada del manga */}

			<BigMangaCoverCard {...mangaHeaderSeccion} />

			{/*Sinopsis del manga */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Sinopsis</Text>
				<Text style={styles.sinopsistext}>{mangaSinopsis}</Text>
			</View>

			{/*Volumenes del manga */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Volumenes</Text>
				<FlatList
					data={volumenes}
					renderItem={({ item }) => <SmallMangaCard {...item} />}
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
	},

	sectionTitle: {
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 10,
		color: colors.text,
	},
	bigCard: {
		height: 420,
		borderRadius: 10,
		overflow: 'hidden',
		justifyContent: 'flex-end',
	},
	smallCard: {
		height: 150,
		width: 100,
		borderRadius: 10,
		overflow: 'hidden',
		marginRight: 10,
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
	sinopsistext: {
		fontSize: 15,
		color: '#fff',
		marginLeft: 5,
	},
	button: {
		flex: 0,
		flexDirection: 'row',
		padding: 8,
		backgroundColor: colors.primary,
		borderRadius: 5,
	},
})

export default MangaScreen
