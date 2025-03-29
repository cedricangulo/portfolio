interface langColor {
	bg: string
	fill: string
}

export interface langItem {
	langName: string
	langColor: langColor
	langWidth: number
}

export interface ILangListProps {
	lang: langItem[] | undefined
}
