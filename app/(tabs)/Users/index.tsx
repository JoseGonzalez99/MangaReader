import { colors } from '@/constants/tokens'
import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

const UsersScreen = () => {
	const userInfo = {
		firstName: 'Jose',
		lastName: 'Gonzalez',
		email: 'jose.elias.gv99@gmail.com',
		photoUrl:
			'https://lh3.googleusercontent.com/a/ACg8ocKm3Bz6UwHGBclPPGDi4YwbNFBwjuIZ8XLtzyAUQ-6BZZ7DdWVL=s317-c-no',
	}

	const developer = { contact: 'jaitymanga' }

	return (
		<View style={styles.container}>
			<Text style={styles.sectionTitle}>Usuario</Text>

			<UserInfo user={userInfo} developer={developer} />
			<UserPreferences />
			<ContactUs />
		</View>
	)
}

const UserInfo = ({ user, developer }) => {
	return (
		<View style={styles.section}>
			<Image source={{ uri: user.photoUrl }} style={styles.image} />
			<Text style={styles.text}>
				Nombre: {user.firstName} {user.lastName}
			</Text>
			<Text style={styles.text}>Correo Electrónico: {user.email}</Text>
			<Button title="Cerrar Sesión" onPress={() => {}} />
		</View>
	)
}

const UserPreferences = () => {
	return (
		<View style={styles.section}>
			<Text style={styles.textTitle}>PARÁMETROS</Text>
			<View style={styles.paramContainer}>
				<Text style={styles.paramText}>H</Text>
				<Text style={styles.paramText}>V</Text>
			</View>
		</View>
	)
}

const ContactUs = () => {
	return (
		<View style={styles.section}>
			<Text style={styles.text}>¡Síguenos en Facebook, Twitter, Telegram!</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		padding: 20,
		gap: 20,
	},

	section: {
		padding: 20,
		borderRadius: 10,
		alignItems: 'flex-start',
	},
	sectionTitle: {
		fontSize: 25,
		fontWeight: 'bold',
		color: colors.text,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginBottom: 20,
	},

	textTitle: {
		color: colors.text,
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10,
	},

	text: {
		color: colors.text,
		fontSize: 16,
		marginBottom: 10,
	},

	paramContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},

	paramText: {
		color: colors.text,
		fontSize: 16,
	},
})

export default UsersScreen
