import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'

const ReaderScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerShown: false,
						headerTitle: 'DS',
					}}
				/>
			</Stack>
		</View>
	)
}

export default ReaderScreenLayout
