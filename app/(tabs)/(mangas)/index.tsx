import { TracksList } from '@/components/TracksList'
import { screenPadding } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const MangasScreen = () => {
	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{
					paddingHorizontal: screenPadding.horizontal,
				}}
			>
				<TracksList scrollEnabled={false}></TracksList>
			</ScrollView>
		</View>
	)
}

export default MangasScreen
