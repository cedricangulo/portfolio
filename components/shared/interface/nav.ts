import { Dispatch, SetStateAction } from "react"

export interface INavMenu {
	sidebarOpen: boolean
	setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export interface INavLink {
	i: number
	href: string
	className: string
	setSidebarOpen: Dispatch<SetStateAction<boolean>>
	children: React.ReactNode
}
