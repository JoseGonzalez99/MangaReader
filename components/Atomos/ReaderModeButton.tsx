import { colors } from '@/constants/tokens'
import { FontAwesome } from '@expo/vector-icons'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const ReaderModeButton = ({ title, icon }) => {
	const [active, setActive] = useState(false)

	const handlePress = () => {
		setActive(!active)
	}

	return (
		<TouchableOpacity
			style={[styles.button, active ? styles.buttonActive : styles.buttonInactive]}
			onPress={handlePress}
		>
			<FontAwesome
				name={icon}
				size={24}
				style={[styles.icon, active ? styles.iconActive : styles.iconInactive]}
			/>
			<Text style={[styles.text, active ? styles.textActive : styles.textInactive]}>{title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		width: 60,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		margin: 10,
	},
	buttonActive: {
		backgroundColor: '#ff0000', // Fondo rojo cuando está activo
	},
	buttonInactive: {
		backgroundColor: colors.secundary, // Fondo negro cuando está inactivo
		borderColor: colors.primary,
		borderWidth: 2,
	},
	icon: {
		marginBottom: 5,
	},
	iconActive: {
		color: '#ffffff', // Icono blanco cuando está activo
	},
	iconInactive: {
		color: '#ffffff', // Icono blanco cuando está inactivo
	},
	text: {
		fontSize: 12,
	},
	textActive: {
		color: '#ffffff', // Texto blanco cuando está activo
	},
	textInactive: {
		color: '#ffffff', // Texto blanco cuando está inactivo
	},
})

export default ReaderModeButton
