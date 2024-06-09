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
	const volumenportada = {
		title: 'Berserk- Tomo1',
		rating: 4.9,
		image:
			'https://res.cloudinary.com/dlasojxtd/image/upload/v1714756378/mangas/Berserk%20-%20Tomo%2001/c0-1/Berserk_v0_000.webp',
	}

	const volumenDescription =
		'La historia está ambientada en una época con tintes de la Europa medieval y renacentista,en la cual se cuenta la vida de Guts, un mercenario acompañado del elfo Puck, cazando seres demoníacos llamados apóstoles.'
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
				<BigMangaCard {...volumenportada} />
			</View>

			{/*Volumenes del manga */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Capitulos</Text>
				<FlatList
					data={chapters}
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
		padding: 10,
		backgroundColor: '#000',
	},
	section: {
		marginBottom: 40,
	},
	buttonSection: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
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
