interface langColor {
	bg: string
	fill: string
}

interface langItem {
	langName: string
	langColor: langColor
	langWidth: number
}

export interface ILangListProps {
	lang: langItem[] | undefined
}
