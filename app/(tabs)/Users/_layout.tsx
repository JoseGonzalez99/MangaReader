import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'

const UsersScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerTitle: 'Usuario',
						headerShown: false,
					}}
				/>
			</Stack>
		</View>
	)
}

export default UsersScreenLayout
