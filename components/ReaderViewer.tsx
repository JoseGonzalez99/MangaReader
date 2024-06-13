import chapterpagesList from '@/assets/data/berserk.json'
import { useReaderContext } from '@/hooks/ReaderContext/useCreateReaderContext'
import { Page } from '@/models/Models'
import { HorizontalMode } from 'components/HorizontalMode'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const ReaderViewer = () => {
	const { selectedChapter, selectedReaderOrientation } = useReaderContext()
	let initialPos: number = 0 //Posicion inicial
	let modeComponent //modo de lectura
	let images: Page[] = []

	//Aca se podria agregar la funcion de actualizar el selectedChapterPara obtener sus paginas

	switch (selectedReaderOrientation) {
		case 'horizontal-izquierdo':
			if (selectedChapter.pages) {
				images = [...selectedChapter.pages.reverse()]
			}
			initialPos = chapterpagesList.length - 1
			modeComponent = (
				<GestureHandlerRootView style={styles.container}>
					<HorizontalMode imagesUrl={images} initialPos={initialPos} />
				</GestureHandlerRootView>
			)
			break
		case 'horizontal-derecho':
			if (selectedChapter.pages) {
				images = [...selectedChapter.pages]
			}
			modeComponent = (
				<GestureHandlerRootView style={styles.container}>
					<HorizontalMode imagesUrl={images} initialPos={initialPos} />
				</GestureHandlerRootView>
			)
			break
		default:
			if (selectedChapter.pages) {
				images = [...selectedChapter.pages]
			}
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
