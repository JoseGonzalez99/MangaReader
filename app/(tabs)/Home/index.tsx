import homevalue from '@/assets/data/getHomeValue.json'
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
	return (
		<ScrollView style={styles.container}>
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Último leído</Text>
				<BigMangaCard {...homevalue.lastReaded} />
			</View>
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Historial</Text>
				<FlatList
					data={homevalue.historial}
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
		backgroundColor: colors.background,
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
})

export default Home
