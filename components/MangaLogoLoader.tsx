import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'

const LogoLoader = ({ logoUrl, totalImages }) => {
	const [loadedImages, setLoadedImages] = useState(0)

	const logoColorPercentage = ((totalImages - loadedImages) / totalImages) * 100

	useEffect(() => {
		const loadImage = () => {
			setTimeout(() => {
				setLoadedImages((prevLoadedImages) => prevLoadedImages + 1)
			}, 500) // Simulating 0.5 seconds delay per image
		}

		if (loadedImages < totalImages) {
			loadImage()
		}
	}, [loadedImages])

	return (
		<View style={styles.container}>
			<Image source={{ uri: logoUrl }} style={styles.logo} />
			<View style={[styles.overlay, { width: `${logoColorPercentage}%` }]} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		width: 200,
		height: 200,
	},
	logo: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	overlay: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust color and opacity as needed
	},
})

export default LogoLoader
