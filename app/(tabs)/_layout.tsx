import { colors, fontSize } from '@/constants/tokens'
import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

const TabsNavigation = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarInactiveTintColor: colors.white,
				tabBarActiveTintColor: colors.white,
				tabBarLabelStyle: {
					fontSize: fontSize.xs,
					fontWeight: '500',
				},
				headerShown: false,
				tabBarStyle: {
					position: 'absolute',
					backgroundColor: colors.primary,

					borderTopLeftRadius: 32,
					borderTopRightRadius: 32,
					borderBottomLeftRadius: 32,
					borderBottomRightRadius: 32,
					borderTopWidth: 0,
					paddingTop: 5,
					paddingBottom: 5,
					marginBottom: 15,
					marginHorizontal: 20,
					height: 60,
				},
			}}
		>
			<Tabs.Screen
				name="Home"
				options={{
					title: 'Inicio',
					tabBarIcon: ({ color }) => (
						<FontAwesome name="home" size={35} color={color}></FontAwesome>
					),
				}}
			/>
			<Tabs.Screen
				name="Search"
				options={{
					title: 'Buscar',
					tabBarIcon: ({ color }) => (
						<FontAwesome name="search" size={35} color={color}></FontAwesome>
					),
				}}
			/>

			<Tabs.Screen
				name="Users"
				options={{
					title: 'Usuario',
					tabBarIcon: ({ color }) => (
						<FontAwesome name="user" size={35} color={color}></FontAwesome>
					),
				}}
			/>
		</Tabs>
	)
}

export default TabsNavigation
