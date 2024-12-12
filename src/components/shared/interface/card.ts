import { MotionValue } from "motion"

export type TButton = {
	i: number
	l: TList
}

export type TList = {
	src: string
	title: string
	text: string
	github: string
	href: string
	tags: string[]
}

export type TCard = {
	i: number
	l: TList
	progress: MotionValue<number>
	range: any
	targetScale: number
}
