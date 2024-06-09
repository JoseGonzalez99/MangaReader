import { colors } from '@/constants/tokens'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'

const BigMangaCard = ({ title, rating, image }) => {
	return (
		<ImageBackground source={{ uri: image }} style={styles.bigCard} imageStyle={styles.cardImage}>
			<View style={styles.bigCardContent}>
				<Text style={styles.bigCardTitle}>{title}</Text>
				<View style={styles.ratingContainer}>
					<FontAwesome name="star" size={16} color="#FFD700" />
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

const Home = () => {
	const mangaHeaderSeccion = {
		title: 'Berserk',
		rating: 4.9,
		image: 'https://m.media-amazon.com/images/I/71lnvXSiITL._AC_UF1000,1000_QL80_.jpg',
	}

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
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Último leído</Text>
				<BigMangaCard {...mangaHeaderSeccion} />
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Sinopsis</Text>
				<Text style={styles.sinopsistext}>
					La historia está ambientada en una época con tintes de la Europa medieval y renacentista,
					en la cual se cuenta la vida de Guts (cuyo nombre fue traducido como Gatsu en las primeras
					ediciones en castellano), un mercenario huérfano que acompañado del elfo Puck, caza seres
					demoníacos llamados apóstoles. La historia se divide en dos partes: la primera (que va del
					volumen 4 al volumen 13) relata su niñez y juventud hasta cómo conoce a Griffith, líder de
					un grupo mercenario llamado la «Banda del Halcón». La segunda parte (volúmenes del 1 al 3
					y 14 al 41, publicándose) muestra su historia tras el fatídico Eclipse, la caza de los
					apóstoles y su búsqueda de venganza contra Griffith.
				</Text>
			</View>
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
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: '#000',
	},
	section: {
		marginBottom: 40,
	},
	sectionTitle: {
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 20,
		color: colors.text,
	},
	bigCard: {
		height: 250,
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
		borderRadius: 10,
	},
	bigCardContent: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		padding: 10,
	},
	smallCardContent: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		padding: 5,
	},
	bigCardTitle: {
		fontSize: 20,
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
		fontSize: 14,
		color: '#fff',
		marginLeft: 5,
	},
	sinopsistext: {
		fontSize: 15,
		color: '#fff',
		marginLeft: 5,
	},
})

export default Home
