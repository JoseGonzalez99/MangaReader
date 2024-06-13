import { StackScreenWithSearchBar } from '@/constants/layout'
import { colors } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { FontAwesome } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Stack } from 'expo-router'
import { Pressable, StyleSheet, View } from 'react-native'

const BackButton = () => {
	return (
		<View>
			<View
				style={{
					flex: 0,
					flexDirection: 'row',
					justifyContent: 'flex-start',
					alignItems: 'center',
				}}
			>
				<Pressable onTouchEnd={() => console.log('Tocando Atras')}>
					<FontAwesome name="arrow-left" size={28} color={colors.icon}></FontAwesome>
				</Pressable>
			</View>
		</View>
	)
}

const ShareButton = () => {
	return (
		<View>
			<View
				style={{
					flex: 0,
					flexDirection: 'row',
					justifyContent: 'flex-start',
					alignItems: 'center',
				}}
			>
				<Pressable onTouchEnd={() => console.log('Tocando Atras')}>
					<FontAwesome name="share" size={28} color={colors.icon}></FontAwesome>
				</Pressable>
			</View>
		</View>
	)
}

const headerGradient = () => {
	return (
		<LinearGradient
			// Transparencia en el centro y oscuro en los bordes
			colors={['transparent', 'rgba(0,0,0,2)']}
			start={{ x: 0, y: 1 }}
			end={{ x: 0, y: 0 }}
			style={styles.vignette}
		/>
	)
}

const MangaScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...StackScreenWithSearchBar,
						headerTitle: '',
						headerBackButtonMenuEnabled: false,
						headerLeft: BackButton,
						headerRight: ShareButton,
						headerBackground: headerGradient,
						headerTransparent: true,
					}}
				/>
			</Stack>
		</View>
	)
}

export default MangaScreenLayout

const styles = StyleSheet.create({
	vignette: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
})
