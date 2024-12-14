import { GeistMono } from "geist/font/mono"
import { ReactNode } from "react"

const Highlight: React.FC<{ children: ReactNode }> = ({ children }) => (
	<span className={`${GeistMono.className} px-1 rounded text-highlight-foreground bg-highlight`}>
		{children}
	</span>
)
Highlight.displayName = "Highlight"

export default Highlight
