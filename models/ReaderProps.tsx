import { MangaInfo } from './Models'

export interface UserMangaContext {
	selectedManga: MangaInfo //Infomacion resumida del manga
	userMetadata: UserMetadata //Infomacion del usuario respecto a manga seleccionado
}

export interface UserInfo {
	userId: string
	username: string
	email: string
	readerPreferences: UserReaderPreferences //Informacion de la configuracion del usuario.
}

export interface UserMetadata {
	lastChapterReaderId: string //Es el ultimo capitulo leido de un usuario respecto a un manga.
}

export interface UserReaderPreferences {
	readerOrientation: string
}
