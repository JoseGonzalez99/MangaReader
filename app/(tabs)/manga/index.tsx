import BottomDrawer from '@/components/BottomDrawer'
import ReaderChapterSelector from '@/components/ReaderChapterSelector'
import ReaderParams from '@/components/ReaderParams'
import { colors } from '@/constants/tokens'
import { FontAwesome } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Button, FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'

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
	const [isReaderParamsDrawerVisible, setReaderParamasIsDrawerVisible] = useState(false)
	const [isReaderChapterListDrawerVisible, setReaderChapterListDrawerVisible] = useState(false)

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

	const toggleReaderParamDrawer = () => {
		setReaderParamasIsDrawerVisible(!isReaderParamsDrawerVisible)
	}

	const toggleReaderChapterListDrawer = () => {
		setReaderChapterListDrawerVisible(!isReaderChapterListDrawerVisible)
	}

	return (
		<ScrollView style={styles.container}>
			{/*Portada del manga */}
			<View style={styles.section}>
				<BigMangaCard {...mangaHeaderSeccion} />
			</View>

			{/*Buttons secciones Favoritos y readerbutton */}
			<View style={styles.buttonSection}>
				<Button title="Favoritos" onPress={toggleReaderParamDrawer}></Button>
				<Button title="Leer" onPress={toggleReaderChapterListDrawer}></Button>
			</View>

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

			<BottomDrawer isVisible={isReaderParamsDrawerVisible} onClose={toggleReaderParamDrawer}>
				<ReaderParams></ReaderParams>
			</BottomDrawer>

			<BottomDrawer
				isVisible={isReaderChapterListDrawerVisible}
				onClose={toggleReaderChapterListDrawer}
			>
				<ReaderChapterSelector></ReaderChapterSelector>
			</BottomDrawer>
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
