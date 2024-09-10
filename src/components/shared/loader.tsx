"use client"

import { useEffect } from "react"

export default function Loader() {
	useEffect(() => {
		async function getLoader() {
			const { grid } = await import("ldrs")
			grid.register()
		}
		getLoader()
	}, [])
	return (
		<l-grid
			size="100"
			speed="2.0"
			color="hsl(var(--primary))"
		></l-grid>
	)
}
