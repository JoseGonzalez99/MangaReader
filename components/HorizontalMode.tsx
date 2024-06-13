import { colors } from '@/constants/tokens'
import { Page } from '@/models/Models'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'

const HeaderReader = () => {
	return (
		<View>
			<View
				style={{
					flex: 0,
					flexDirection: 'row',
					justifyContent: 'flex-start',
					alignItems: 'center',
					padding: 15,
					gap: 10,
				}}
			>
				<Pressable onTouchEnd={() => console.log('Tocando Atras')}>
					<FontAwesome name="arrow-left" size={28} color={colors.icon}></FontAwesome>
				</Pressable>
				<Text style={{ color: colors.text }}>Atras</Text>
			</View>
		</View>
	)
}

const ReaderFooter = () => {
	return (
		<View>
			<View>
				<Pressable onTouchEnd={() => console.log('Tocando Atras')}>
					<FontAwesome name="book" size={20} color={colors.icon}></FontAwesome>
				</Pressable>
			</View>
		</View>
	)
}

interface HorizontalModeProps {
	imagesUrl: Page[]
	initialPos: number
}
const HorizontalMode = ({ imagesUrl, initialPos }: HorizontalModeProps) => {
	return (
		<>
			<ImageViewer
				imageUrls={imagesUrl.map((image) => ({ url: image.url }))}
				index={initialPos}
				renderHeader={() => <></>}
				renderFooter={() => <></>}
				renderIndicator={(currentIndex?: number, allSize?: number) => <></>}
			></ImageViewer>
		</>
	)
}

const styles = StyleSheet.create({
	imagesZoom: {
		flex: 1,
	},
})

export { HorizontalMode }
