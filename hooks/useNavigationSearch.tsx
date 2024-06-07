// Importaciones necesarias
import { colors } from '@/constants/tokens'
import { useNavigation } from 'expo-router'
import { useLayoutEffect, useState } from 'react'
import { SearchBarProps } from 'react-native-screens'

// Opciones de búsqueda por defecto
const defaultSearchOptions: SearchBarProps = {
	tintColor: colors.primary,
	hideWhenScrolling: false,
}

// Hook personalizado para manejar la búsqueda en la navegación
export const useNavigationSearch = ({
	searchBarOptions,
}: {
	searchBarOptions?: SearchBarProps
}) => {
	const [search, setSearch] = useState('') // Estado para el texto de búsqueda
	const navigation = useNavigation() // Hook de navegación

	// Función para manejar el cambio de texto en la barra de búsqueda
	const handleOnChangeText: SearchBarProps['onChangeText'] = ({ nativeEvent: { text } }) => {
		setSearch(text)
	}

	// Efecto para actualizar las opciones de la barra de búsqueda en la navegación
	useLayoutEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				...defaultSearchOptions,
				...searchBarOptions,
				onChangeText: handleOnChangeText,
			},
		})
	}, [navigation, searchBarOptions])

	return search // Retorna el texto de búsqueda actual
}
