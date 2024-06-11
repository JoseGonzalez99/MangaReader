import { ReaderViewer } from '@/components/ReaderViewer'
import { colors } from '@/constants/tokens'
import { StyleSheet, View } from 'react-native'

const ReaderScreen = () => {
	return (
		<View style={styles.container}>
			<ReaderViewer></ReaderViewer>
		</View>
	)
}

export default ReaderScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 5,
		backgroundColor: colors.primary,
	},
})
