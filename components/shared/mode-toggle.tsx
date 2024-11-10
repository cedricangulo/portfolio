"use client"

import { useEffect, useState } from "react"
import { LoaderIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
	const { setTheme, theme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return <LoaderIcon className="text-muted-foreground w-12 h-12 md:w-5 md:h-5 animate-spin" />
	}

	const isLight = theme === "light"

	return (
		<button
			className="w-12 h-12 md:w-5 md:h-5"
			onClick={() => setTheme(isLight ? "dark" : "light")}
		>
			{isLight ? (
				<SunIcon className="w-12 h-12 md:w-5 md:h-5 text-cyan-200 md:text-foreground transition-transform" />
			) : (
				<MoonIcon className="w-12 h-12 md:w-5 md:h-5 text-cyan-200 md:text-foreground transition-transform" />
			)}
			<span className="sr-only">Toggle theme</span>
		</button>
	)
}
