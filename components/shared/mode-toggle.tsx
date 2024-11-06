"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
	const { setTheme, theme } = useTheme()
	const [mounted, setMounted] = React.useState(false)

	React.useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	const isLight = theme === "light"

	return (
		<Button
			variant="link"
			size="icon"
			onClick={() => setTheme(isLight ? "dark" : "light")}
		>
			{isLight ? (
				<Sun className="text-cyan-200 md:text-foreground size-12 md:size-5 transition-transform" />
			) : (
				<Moon className="text-cyan-200 md:text-foreground size-12 md:size-5 transition-transform" />
			)}
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
