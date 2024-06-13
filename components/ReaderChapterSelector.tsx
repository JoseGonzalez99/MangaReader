import { colors } from '@/constants/tokens'
import { useReaderContext } from '@/hooks/ReaderContext/useCreateReaderContext'
import { ChapterInfo } from '@/models/Models'
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ReaderChapterSelector = () => {
	const { selectedChapter, setSelectedChapter, chaptersList } = useReaderContext()

	function handleChapterSelection(chapter: ChapterInfo) {
		console.log('se selecciono este capitulo: ', chapter.title)
		setSelectedChapter(chapter)
	}

	const renderItem = ({ item }: { item: ChapterInfo }) => (
		<TouchableOpacity
			onPress={() => handleChapterSelection(item)}
			style={[styles.chapterItem, item.id === selectedChapter.id && styles.selectedChapter]}
		>
			<Text
				style={[styles.chapterText, item.id === selectedChapter.id && styles.selectedChapterText]}
			>
				{item.title}
			</Text>
		</TouchableOpacity>
	)

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}> Seleccionar capitulo </Text>
			<View style={styles.chapterListContainer}>
				<FlatList
					data={chaptersList}
					renderItem={renderItem}
					keyExtractor={(item) => item.id.toString()}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: colors.secundary, // Fondo blanco
	},
	headerText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white', // Texto negro
		marginBottom: 10,
	},
	chapterListContainer: {
		flex: 1,
		width: '100%',
	},
	chapterItem: {
		padding: 10,
	},
	selectedChapter: {
		backgroundColor: '#ff0000', // Fondo rojo para el capítulo seleccionado
		borderRadius: 10,
	},
	chapterText: {
		fontSize: 16,
		color: 'white', // Texto negro
	},
	selectedChapterText: {
		color: '#ffffff', // Texto blanco para el capítulo seleccionado
	},
})

export default ReaderChapterSelector
