//Estos modelos estan relacionados a entitades de base de datos
export interface MangaInfo {
	id: string
	title: string
	autor: string
	rating: string
	desctiption: string
	bookcover: string
	chapterCount: string
	volumenes?: VolumenInfo[]
}

export interface VolumenInfo {
	id: string
	title: string
	description: string
	cover: string
	chapters?: ChapterInfo[]
}

export interface ChapterInfo {
	id: string
	title: string
	chapterCover?: string
	pages?: Page[]
}
export interface Page {
	filename: string
	url: string
}
