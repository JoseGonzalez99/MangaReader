import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { colors } from '@/constants/tokens'
import { useReaderContext } from '@/hooks/ReaderContext/useCreateReaderContext'

const ReaderBottomTabBar = () => {
	const { setShowChaptersDrawer, setShowParamsDrawer } = useReaderContext()

	function onNextChapter() {
		//Aca buscamos el capitulo actual y la lista de todos los capitulso y realizamos un proceso de actualizacion del estado de selectedChapter
	}

	function onChapterButton() {
		setShowChaptersDrawer(true)
	}
	function onParamsButton() {
		setShowParamsDrawer(true)
	}

	return (
		<>
			<View style={styles.container}>
				<TouchableOpacity onPress={() => onChapterButton()}>
					<FontAwesome name="bars" size={30} color={colors.white}></FontAwesome>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => onParamsButton()}>
					<FontAwesome name="cog" size={30} color={colors.white}></FontAwesome>
				</TouchableOpacity>
				<TouchableOpacity onPress={onNextChapter}>
					<FontAwesome name="arrow-right" size={30} color={colors.white}></FontAwesome>
				</TouchableOpacity>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#b30000',
		height: 50,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		position: 'absolute',
		bottom: 15,
		left: 20,
		right: 20,
	},
	modalOverlay: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
	},

	modalContent: {
		backgroundColor: '#444040',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 10,
	},
	sidebarContent: {
		paddingHorizontal: 20,
		paddingTop: 20,
	},
	chapterItem: {
		paddingVertical: 10,
	},
	modalTitle: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 20,
	},
	paramItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 10,
	},
	chapterText: {
		color: '#fff',
	},
	paramTitle: {
		color: '#fff',
	},
})

export { ReaderBottomTabBar }
