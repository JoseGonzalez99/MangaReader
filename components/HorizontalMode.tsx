import { colors } from '@/constants/tokens'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'

/*
 Componente que renderiza las imagenes de forma horizontal. 
 Recibe la lista de urls, y la posicion inicial.
*/

/*
    Si es horizontal left: debe recibir la lista de forma invertida e iniciar en la ultima pagina.
    Si es horizontal right: debe recibir la lista de forma normal e iniciar en la posicion 0
*/

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

const HorizontalMode = ({ imagesUrl, initialPos }) => {
	return (
		<>
			<ImageViewer
				imageUrls={imagesUrl.map((image) => ({ url: image.url }))}
				index={initialPos}
				renderHeader={() => (
					<>
						<HeaderReader></HeaderReader>
					</>
				)}
				renderFooter={() => (
					<>
						<ReaderFooter></ReaderFooter>
					</>
				)}
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
