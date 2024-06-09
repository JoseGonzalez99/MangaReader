import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const SearchBar = ({ placeholder, onChangeText, value }) => {
	return (
		<View style={styles.container}>
			<FontAwesome name="search" size={20} color="#888" style={styles.icon} />
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				placeholderTextColor="#888"
				onChangeText={onChangeText}
				value={value}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginBottom: 20,
	},
	icon: {
		marginRight: 10,
	},
	input: {
		flex: 1,
		fontSize: 16,
		color: '#333',
	},
})

export default SearchBar
