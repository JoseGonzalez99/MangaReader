import library from 'assets/data/MangasLibrary.json'
import { FlatList } from 'react-native-gesture-handler'
export const MangasList = () => {
	return <FlatList data={library} renderItem={() => null}></FlatList>
}
