import React from 'react'

import { Image, StyleSheet, Text, View } from 'react-native'

const UsersScreen = () => {
	const userInfo = {
		firtName: 'Jose',
		lastName: 'Gonzalez',
		email: 'jose.elias.gv99@gmail.com',
		photoUrl:
			'https://lh3.googleusercontent.com/a/ACg8ocKm3Bz6UwHGBclPPGDi4YwbNFBwjuIZ8XLtzyAUQ-6BZZ7DdWVL=s317-c-no',
	}
	const developer = { contact: 'jaitymanga' }
	return (
		<>
			<UserInfo user={userInfo} developer={developer}></UserInfo>
		</>
	)
}

export default UsersScreen

const UserInfo = ({ user, developer }) => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: user.photoUrl }} style={styles.image} />
			<Text style={styles.text}>
				Nombre: {user.firstName} {user.lastName}
			</Text>
			<Text style={styles.text}>Correo Electrónico: {user.email}</Text>
			<Text style={styles.text}>Contacto del Desarrollador: {developer.contact}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginBottom: 20,
	},
	text: {
		color: '#000000',
		fontSize: 16,
		marginBottom: 10,
	},
})
