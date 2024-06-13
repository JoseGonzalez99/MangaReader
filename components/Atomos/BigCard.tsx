import { FontAwesome } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

interface BigCoverCardProps {
	title: string
	rating: number
	image: string
}

const BigCoverCard = ({ title, rating, image }: BigCoverCardProps) => {
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

const styles = StyleSheet.create({
	bigCard: {
		height: 420,
		borderRadius: 0,
		overflow: 'hidden',
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
	bigCardTitle: {
		fontSize: 40,
		fontWeight: 'bold',
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
})

export default BigCoverCard
