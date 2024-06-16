import Logo from '@/components/Atomos/Logo'
import { colors } from '@/constants/tokens'
import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

import logitochido from '@/assets/logo.png'

const LoginScreen = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = () => {
		// Lógica para iniciar sesión
		console.log('Iniciar sesión con:', email, password)
	}

	const handleGoogleLogin = () => {
		// Lógica para iniciar sesión con Google
		console.log('Iniciar sesión con Google')
	}

	return (
		<View style={styles.container}>
			<Logo imageUrl={logitochido} subText="JAITYMANGA" />

			<TextInput
				style={styles.input}
				placeholder="Ingresar Email"
				placeholderTextColor={colors.white}
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
				autoCapitalize="none"
			/>

			<TextInput
				style={styles.input}
				placeholder="Ingresar Contraseña"
				placeholderTextColor={colors.white}
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>

			<Button title="Iniciar Sesión" onPress={handleLogin} />

			<View style={styles.spacer} />

			<Button title="Iniciar Sesión con Google" onPress={handleGoogleLogin} color="#DB4437" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: colors.text,
		marginBottom: 20,
	},
	input: {
		width: '100%',
		height: 50,
		borderColor: colors.background,
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: colors.secundary,
		paddingHorizontal: 10,
		marginBottom: 20,
		color: colors.white,
	},
	spacer: {
		height: 20,
	},
})

export default LoginScreen
