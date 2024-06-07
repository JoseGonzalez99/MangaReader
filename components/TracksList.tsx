// Importaciones necesarias
//import { useQueue } from '@/store/queue'
import { utilsStyles } from '@/styles'
import { FlatList, FlatListProps, Text, View } from 'react-native'
//import TrackPlayer, { Track } from 'react-native-track-player'
//import { QueueControls } from './QueueControls'
import { TracksListItem } from './TracksListItem'

import TrackListData from '@/assets/data/TracksLibrary.json'
import { unknownTrackImageUri } from '@/constants/images'
import FastImage from 'react-native-fast-image'

// Componente para separar items
const ItemDivider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

export type TracksListProps = Partial<FlatListProps<unknown>>
// Componente principal
export const TracksList = ({ ...flatlistProps }: TracksListProps) => {
	return (
		<FlatList
			data={TrackListData}
			scrollEnabled={false}
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
			ListHeaderComponent={ItemDivider}
			ListFooterComponent={ItemDivider}
			ItemSeparatorComponent={ItemDivider}
			ListEmptyComponent={
				<View>
					<Text style={utilsStyles.emptyContentText}>No songs found</Text>

					<FastImage
						source={{ uri: unknownTrackImageUri, priority: FastImage.priority.normal }}
						style={utilsStyles.emptyContentImage}
					/>
				</View>
			}
			renderItem={({ item: track }) => (
				<TracksListItem track={{ ...track, image: track.artwork }} />
			)}
		/>
	)
}
