import chapterpagesList from '@/assets/data/berserk.json'
import { HorizontalMode } from 'components/HorizontalMode'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

interface Page {
	filename: string
	url: string
}
const ReaderViewer = () => {
	//variables internas del componente
	let modeComponent //modo de lectura
	let initialPos: number = 0 //Posicion inicial
	const readMode: string = 'horizontal-derecho'
	const images: Page[] = chapterpagesList

	switch (readMode) {
		case 'horizontal-izquierdo':
			const reversedArray: Page[] = images.reverse()
			initialPos = chapterpagesList.length - 1
			modeComponent = (
				<GestureHandlerRootView style={styles.container}>
					<HorizontalMode imagesUrl={reversedArray} initialPos={initialPos} />
				</GestureHandlerRootView>
			)
			break
		case 'horizontal-derecho':
			modeComponent = (
				<GestureHandlerRootView style={styles.container}>
					<HorizontalMode imagesUrl={images} initialPos={initialPos} />
				</GestureHandlerRootView>
			)
			break
		default:
			modeComponent = (
				<GestureHandlerRootView style={styles.container}>
					<HorizontalMode imagesUrl={images} initialPos={0} />
				</GestureHandlerRootView>
			)
			break
	}

	/*Es neceario pasarle al logoLoader la imagen, la cantidad total de imagenes, y el contador de imagenes descargadas. */
	return (
		<View style={styles.container}>
			<>{modeComponent}</>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
	},
})

export { ReaderViewer }
