import { colors } from '@/constants/tokens'
import React, { useState } from 'react'
import { Animated, Dimensions, Modal, StyleSheet, TouchableOpacity, View } from 'react-native'

const { height } = Dimensions.get('window')

const BottomDrawer = ({ isVisible, onClose, children }) => {
	const [slideAnim] = useState(new Animated.Value(height))

	if (isVisible) {
		Animated.timing(slideAnim, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start()
	} else {
		Animated.timing(slideAnim, {
			toValue: height,
			duration: 300,
			useNativeDriver: true,
		}).start()
	}

	return (
		<Modal transparent visible={isVisible} animationType="none" onRequestClose={onClose}>
			<TouchableOpacity style={styles.overlay} onPress={onClose}>
				<View />
			</TouchableOpacity>
			<Animated.View style={[styles.drawer, { transform: [{ translateY: slideAnim }] }]}>
				{children}
			</Animated.View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	drawer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: height * 0.4,
		backgroundColor: colors.secundary,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 20,
	},
})

export default BottomDrawer
