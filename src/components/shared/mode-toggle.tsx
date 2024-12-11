"use client"

import * as React from "react"
import { MoonIcon, SunIcon, Loader2 } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="link" size="icon" disabled>
        <Loader2 className="animate-spin text-cyan-200 md:text-foreground h-5 w-5" />
        <span className="sr-only">Loading...</span>
      </Button>
    )
  }

  const isLight = theme === "light"

  return (
    <Button variant="link" size="icon" onClick={() => setTheme(isLight ? "dark" : "light")}>
      {isLight ? (
        <SunIcon className="text-cyan-200 md:text-foreground h-5 w-5 transition-transform" />
      ) : (
        <MoonIcon className="text-cyan-200 md:text-foreground h-5 w-5 transition-transform" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
