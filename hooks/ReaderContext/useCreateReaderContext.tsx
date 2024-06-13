import { useContext } from 'react'
import { ReaderContext, ReaderContextProps } from './ReaderContext'

export const useReaderContext = () => {
	return useContext<ReaderContextProps>(ReaderContext)
}
