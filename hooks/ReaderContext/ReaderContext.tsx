import { ReactNode, createContext, useState } from 'react'

import { ChapterInfo } from '@/models/Models'

export interface ReaderContextProps {
	showChaptersDrawer: boolean
	setShowChaptersDrawer: (state: boolean) => void
	showParamsDrawer: boolean
	setShowParamsDrawer: (state: boolean) => void
	selectedReaderOrientation: string
	setSelectedReadeOrientation: (state: string) => void
	selectedChapter: ChapterInfo
	setSelectedChapter: (state: ChapterInfo) => void
	chaptersList: ChapterInfo[]
	setChapterList: (state: ChapterInfo[]) => void
}

//Valores por defecto del ReaderContext
export const defaultValuecontext: ReaderContextProps = {
	showChaptersDrawer: false,
	setShowChaptersDrawer: function (state: boolean): void {
		throw new Error('Function not implemented.')
	},
	showParamsDrawer: false,
	setShowParamsDrawer: function (state: boolean): void {
		throw new Error('Function not implemented.')
	},
	selectedReaderOrientation: '',
	setSelectedReadeOrientation: function (state: string): void {
		throw new Error('Function not implemented.')
	},
	selectedChapter: {
		id: '',
		title: '',
	},
	setSelectedChapter: function (state: ChapterInfo): void {
		throw new Error('Function not implemented.')
	},
	chaptersList: [],
	setChapterList: function (state: ChapterInfo[]): void {
		throw new Error('Function not implemented.')
	},
}

export const defaultChapterInfo: ChapterInfo = {
	id: '',
	title: '',
}
export const ReaderContext = createContext<ReaderContextProps>(defaultValuecontext)

//De momento esta deprecado
export const ReaderContextProvider = ({ children }: { children: ReactNode }) => {
	const [showChaptersDrawer, setShowChaptersDrawer] = useState(false)
	const [showParamsDrawer, setShowParamsDrawer] = useState(false)
	const [selectedReaderOrientation, setSelectedReadeOrientation] =
		useState<string>('horizontal-derecho')
	const [selectedChapter, setSelectedChapter] = useState<ChapterInfo>(defaultChapterInfo)
	const [chaptersList, setChapterList] = useState<ChapterInfo[]>([])

	const state: ReaderContextProps = {
		showChaptersDrawer: showChaptersDrawer,
		setShowChaptersDrawer: setShowChaptersDrawer,
		showParamsDrawer: showParamsDrawer,
		setShowParamsDrawer: setShowParamsDrawer,
		selectedReaderOrientation: selectedReaderOrientation,
		setSelectedReadeOrientation: setSelectedReadeOrientation,
		selectedChapter: selectedChapter,
		setSelectedChapter: setSelectedChapter,
		chaptersList: chaptersList,
		setChapterList: setChapterList,
	}

	return <ReaderContext.Provider value={state}>{children}</ReaderContext.Provider>
}
