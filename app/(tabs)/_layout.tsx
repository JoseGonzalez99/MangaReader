import { colors, fontSize } from '@/constants/tokens'
import { FontAwesome } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'

const TabsNavigation = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colors.primary,
				tabBarLabelStyle: {
					fontSize: fontSize.xs,
					fontWeight: '500',
				},
				headerShown: false,
				tabBarStyle: {
					position: 'absolute',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					borderTopWidth: 0,
					paddingTop: 8,
				},
				tabBarBackground: () => (
					<BlurView
						intensity={90}
						style={{
							...StyleSheet.absoluteFillObject,
							backgroundColor: colors.background,
							overflow: 'hidden',
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
						}}
					/>
				),
			}}
		>
			<Tabs.Screen
				name="Home"
				options={{
					title: 'Inicio',
					tabBarIcon: ({ color }) => (
						<FontAwesome name="home" size={20} color={color}></FontAwesome>
					),
				}}
			/>
			<Tabs.Screen
				name="Search"
				options={{
					title: 'Buscar',
					tabBarIcon: ({ color }) => (
						<FontAwesome name="search" size={20} color={color}></FontAwesome>
					),
				}}
			/>
			<Tabs.Screen
				name="Users"
				options={{
					title: 'Usuario',
					tabBarIcon: ({ color }) => (
						<FontAwesome name="user" size={20} color={color}></FontAwesome>
					),
				}}
			/>
			<Tabs.Screen
				name="(mangas)"
				options={{
					title: 'Mangas',
					tabBarIcon: ({ color }) => (
						<FontAwesome name="book" size={20} color={color}></FontAwesome>
					),
				}}
			/>
		</Tabs>
	)
}

export default TabsNavigation
