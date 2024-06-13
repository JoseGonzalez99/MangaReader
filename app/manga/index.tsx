import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

import mangainfo from '@/assets/data/MangaView.json'
import BigCoverCard from '@/components/Atomos/BigCard'
import SmallCoverCard from '@/components/Atomos/SmallCoverCard'
import { colors } from '@/constants/tokens'

const MangaScreen = () => {
	return (
		<ScrollView style={styles.container}>
			<BigCoverCard
				title={mangainfo.title}
				rating={mangainfo.rating}
				image={mangainfo.bookcover}
			></BigCoverCard>

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
							<SmallCoverCard {...item} />
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
