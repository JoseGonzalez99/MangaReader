import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'

const SearchScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerTitle: 'Search',
						headerShown: false,
					}}
				/>
			</Stack>
		</View>
	)
}

export default SearchScreenLayout
