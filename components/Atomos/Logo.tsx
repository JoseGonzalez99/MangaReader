import { colors } from '@/constants/tokens'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Logo = ({ imageUrl, subText }) => {
	return (
		<View style={styles.container}>
			<Image source={imageUrl} style={styles.image} />
			<Text style={styles.subText}>{subText}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	image: {
		width: 250,
		height: 250,
		marginBottom: 0,
	},
	subText: {
		fontSize: 32,
		fontWeight: 'bold',
		color: colors.text,
	},
})

export default Logo
