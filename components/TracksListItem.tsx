// Importaciones necesarias
//import { StopPropagation } from '@/components/utils/StopPropagation'
import { unknownTrackImageUri } from '@/constants/images'
import { colors, fontSize } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
//import LoaderKit from 'react-native-loader-kit'
//import { Track, useActiveTrack, useIsPlaying } from 'react-native-track-player'

// Tipos de propiedades
export type TracksListItemProps = {
	track: { title: string; image?: string; artist?: string }
	//onTrackSelect: (track: Track) => void
}

// Componente principal
export const TracksListItem = ({
	track,
	//onTrackSelect: handleTrackSelect,
}: TracksListItemProps) => {
	//const { playing } = useIsPlaying()
	//const isActiveTrack = useActiveTrack()?.url === track.url
	const isActiveTrack = false
	return (
		<TouchableHighlight>
			<View style={styles.trackItemContainer}>
				{/* Imagen del track */}
				<View>
					<Image
						source={{
							uri: track.image ?? unknownTrackImageUri,
						}}
						style={{
							...styles.trackArtworkImage,
							opacity: isActiveTrack ? 0.6 : 1,
						}}
					/>
				</View>

				{/* Información del track */}
				<View style={styles.trackInfoContainer}>
					<View style={{ width: '100%' }}>
						<Text
							numberOfLines={1}
							style={{
								...styles.trackTitleText,
								color: isActiveTrack ? colors.primary : colors.text,
							}}
						>
							{track.title}
						</Text>

						{track.artist && (
							<Text numberOfLines={1} style={styles.trackArtistText}>
								{track.artist}
							</Text>
						)}
					</View>

					{/* Menú de atajos 
					
					<StopPropagation>
						<TrackShortcutsMenu track={track}>
							<Entypo name="dots-three-horizontal" size={18} color={colors.icon} />
						</TrackShortcutsMenu>
					</StopPropagation>
					*/}
				</View>
			</View>
		</TouchableHighlight>
	)
}

// Estilos
const styles = StyleSheet.create({
	trackItemContainer: {
		flexDirection: 'row',
		columnGap: 14,
		alignItems: 'center',
		paddingRight: 20,
	},
	trackPlayingIconIndicator: {
		position: 'absolute',
		top: 18,
		left: 16,
		width: 16,
		height: 16,
	},
	trackPausedIndicator: {
		position: 'absolute',
		top: 14,
		left: 14,
	},
	trackArtworkImage: {
		borderRadius: 8,
		width: 50,
		height: 50,
	},
	trackInfoContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	trackTitleText: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		maxWidth: '90%',
	},
	trackArtistText: {
		...defaultStyles.text,
		color: colors.textMuted,
		fontSize: 14,
		marginTop: 4,
	},
})
