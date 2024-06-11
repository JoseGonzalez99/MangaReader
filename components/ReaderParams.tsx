import { colors } from '@/constants/tokens'
import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import ReaderModeButton from './Atomos/ReaderModeButton'

const ReaderParams = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.headerText}> Parametros del lector </Text>
			<View style={styles.paramRow}>
				<View style={styles.paramLabel}>
					<Text style={styles.paramText}>Orientacion de lectura</Text>
				</View>
				<View style={styles.buttonContainer}>
					<ReaderModeButton title="Normal" icon="arrow-right" />
					<ReaderModeButton title="Japones" icon="arrow-left" />
					<ReaderModeButton title="Deslizar" icon="arrow-down" />
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: colors.secundary, // Fondo blanco
	},
	headerText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#ffffff',
		marginBottom: 10,
	},
	paramRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		borderWidth: 0,
		borderRadius: 5,
		marginBottom: 10,
	},
	paramLabel: {
		flex: 1,
	},
	paramText: {
		fontSize: 15,
		color: '#ffffff', // Texto negro
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		flex: 2,
		padding: 5,
	},
})

export default ReaderParams
