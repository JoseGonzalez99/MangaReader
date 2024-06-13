import { ImageBackground, StyleSheet, Text, View } from 'react-native'

interface SmallCoverCardProps {
	title: string
	image: string
}

const SmallCoverCard = ({ title, image }: SmallCoverCardProps) => {
	return (
		<ImageBackground source={{ uri: image }} style={styles.smallCard} imageStyle={styles.cardImage}>
			<View style={styles.smallCardContent}>
				<Text style={styles.smallCardTitle}>{title}</Text>
			</View>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
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
	smallCardContent: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		padding: 5,
	},
	smallCardTitle: {
		fontSize: 14,
		color: '#fff',
	},
})

export default SmallCoverCard
