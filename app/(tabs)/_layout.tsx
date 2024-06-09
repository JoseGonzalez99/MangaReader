import { colors, fontSize } from '@/constants/tokens'
import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

const TabsNavigation = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarInactiveTintColor: colors.secundary,
				tabBarActiveTintColor: colors.white,
				tabBarLabelStyle: {
					fontSize: fontSize.xs,
					fontWeight: '500',
				},
				headerShown: false,
				tabBarStyle: {
					position: 'absolute',
					backgroundColor: colors.primary,
					borderTopLeftRadius: 12,
					borderTopRightRadius: 12,
					borderBottomLeftRadius: 12,
					borderBottomRightRadius: 12,
					borderTopWidth: 0,
					paddingTop: 5,
					paddingBottom: 5,
					marginBottom: 20,
					height: 60,
				},
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
				name="reader"
				options={{
					title: 'Reader',
					tabBarIcon: ({ color }) => (
						<FontAwesome name="book" size={20} color={color}></FontAwesome>
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
					title: 'List',
					tabBarIcon: ({ color }) => (
						<FontAwesome name="book" size={20} color={color}></FontAwesome>
					),
				}}
			/>
		</Tabs>
	)
}

export default TabsNavigation
