import { cn } from "@/lib/utils"

function GridBackground() {
	return (
		<svg
			className={cn(
				"h-full w-full",
				"animate-fadeIn [--fadeIn-delay:1500ms] opacity-0",
				"sm:[mask-image:radial-gradient(ellipse_60%_30%_at_50%_50%,#121212_0%,transparent_100%)]",
				"[mask-image:radial-gradient(ellipse_60%_30%_at_50%_50%,#121212_0%,transparent_100%)]",
				"pointer-events-none absolute inset-0 left-1/2 top-0 max-w-[800px] -translate-x-1/2 text-primary/50",
				"[mask-image:linear-gradient(transparent,black_20%), linear-gradient(black_20%, transparent)]"
			)}
		>
			<defs>
				<pattern
					id="grid-:r2:"
					x="0"
					y="-53.5"
					width="40"
					height="40"
					patternUnits="userSpaceOnUse"
				>
					<path
						d="M 80 0 L 0 0 0 80"
						fill="transparent"
						stroke="currentColor"
						strokeWidth="1"
					></path>
				</pattern>
			</defs>
			<rect
				fill="url(#grid-:r2:)"
				width="100%"
				height="100%"
			></rect>
		</svg>
	)
}

export default GridBackground
