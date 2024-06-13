import BottomDrawer from '@/components/Atomos/BottomDrawer'
import { ReaderBottomTabBar } from '@/components/ReaderBottomTabBar'
import ReaderChapterSelector from '@/components/ReaderChapterSelector'
import ReaderParams from '@/components/ReaderParams'
import { ReaderViewer } from '@/components/ReaderViewer'
import { colors } from '@/constants/tokens'
import {
	ReaderContext,
	ReaderContextProps,
	defaultChapterInfo,
} from '@/hooks/ReaderContext/ReaderContext'
import { ChapterInfo } from '@/models/Models'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ChapterListDemo from '@/assets/data/ChapterListDemo.json'
import Chapter from '@/assets/data/ReaderStateDemo.json'

const ReaderScreen = () => {
	//Leemos el parametro del argumento

	/* States Del ReaderScreen */
	const [showChaptersDrawer, setShowChaptersDrawer] = useState(false)
	const [showParamsDrawer, setShowParamsDrawer] = useState(false)
	const [selectedReaderOrientation, setSelectedReadeOrientation] =
		useState<string>('horizontal-derecho')
	const [selectedChapter, setSelectedChapter] = useState<ChapterInfo>(defaultChapterInfo)
	const [chaptersList, setChapterList] = useState<ChapterInfo[]>([])
	const [loaded, setLoaded] = useState<boolean>(false)

	const readerInitialState: ReaderContextProps = {
		showChaptersDrawer: showChaptersDrawer,
		setShowChaptersDrawer: setShowChaptersDrawer,
		showParamsDrawer: showParamsDrawer,
		setShowParamsDrawer: setShowParamsDrawer,
		selectedReaderOrientation: selectedReaderOrientation,
		setSelectedReadeOrientation: setSelectedReadeOrientation,
		selectedChapter: selectedChapter,
		setSelectedChapter: setSelectedChapter,
		chaptersList: chaptersList,
		setChapterList: setChapterList,
	}

	/**
	 * To-do
	 * Se debe realizar una funcion asincrona que
	 * 1- Obtenga la lista de capitulos de un manga
	 * 2- Obtener el capitulo a cargar de forma inicial
	 * 3- Obtener las preferencias del cliente respecto a su orientacion de lectura.
	 */
	useEffect(() => {
		const obtenerDatos = () => {
			try {
				setSelectedReadeOrientation('horizontal-derecho')
				setSelectedChapter(Chapter)
				setChapterList(ChapterListDemo)
				console.log(chaptersList)
				setLoaded(true)
			} catch (error) {
				console.error('Hubo un error al obtener los datos:', error)
			}
		}
		obtenerDatos()
	}, [])

	/*Funciones de utilidad */
	const toggleReaderParamDrawer = () => {
		setShowParamsDrawer(!showParamsDrawer)
	}

	const toggleReaderChapterListDrawer = () => {
		setShowChaptersDrawer(!showChaptersDrawer)
	}

	return (
		<>
			{loaded && (
				<ReaderContext.Provider value={readerInitialState}>
					<View style={styles.container}>
						<ReaderViewer></ReaderViewer>
						<ReaderBottomTabBar></ReaderBottomTabBar>
						<BottomDrawer isVisible={showParamsDrawer} onClose={toggleReaderParamDrawer}>
							<ReaderParams></ReaderParams>
						</BottomDrawer>
						<BottomDrawer isVisible={showChaptersDrawer} onClose={toggleReaderChapterListDrawer}>
							<ReaderChapterSelector></ReaderChapterSelector>
						</BottomDrawer>
					</View>
				</ReaderContext.Provider>
			)}
			{!loaded && (
				<>
					<Text>Loading</Text>
				</>
			)}
		</>
	)
}

export default ReaderScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: 80,

		backgroundColor: colors.background,
	},
})
