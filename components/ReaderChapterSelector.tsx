import { colors } from '@/constants/tokens'
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ReaderChapterSelector = () => {
	const chapterList = [
		{ chapterId: 4623, chapterNumber: '1', chapterTitle: 'Capitulo 1' },
		{ chapterId: 3242, chapterNumber: '2', chapterTitle: 'Capitulo 2' },
		{ chapterId: 3423, chapterNumber: '3', chapterTitle: 'Capitulo 3' },
		{ chapterId: 3424, chapterNumber: '4', chapterTitle: 'Capitulo 4' },
		{ chapterId: 5465, chapterNumber: '5', chapterTitle: 'Capitulo 5' },
		{ chapterId: 3456, chapterNumber: '6', chapterTitle: 'Capitulo 6' },
		{ chapterId: 3455, chapterNumber: '7', chapterTitle: 'Capitulo 7' },
	]

	const selectedChapter = { chapterId: 3423, chapterNumber: '3', chapterTitle: 'Capitulo 3' }

	const renderItem = ({ item }) => (
		<TouchableOpacity
			style={[
				styles.chapterItem,
				item.chapterId === selectedChapter.chapterId && styles.selectedChapter,
			]}
		>
			<Text
				style={[
					styles.chapterText,
					item.chapterId === selectedChapter.chapterId && styles.selectedChapterText,
				]}
			>
				{item.chapterTitle}
			</Text>
		</TouchableOpacity>
	)

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}> Seleccionar capitulo </Text>
			<View style={styles.chapterListContainer}>
				<FlatList
					data={chapterList}
					renderItem={renderItem}
					keyExtractor={(item) => item.chapterId.toString()}
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
