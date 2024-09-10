import { cn } from "@/lib/utils"

export default function WorksLoading() {
	return (
		<div className="min-h-screen w-full">
			<div
				className={cn(
					"w-full h-full",
					"absolute bottom-0 right-0 z-20 transition-background",
					"bg-gradient-to-t from-neutral-50 to-transparent dark:from-black"
				)}
			></div>
			<div className="max-w-[34rem] lg:max-w-full mx-auto sticky top-[10%] flex items-enter justify-center">
				<div
					className={cn(
						"flex lg:flex-row flex-col items-start relative",
						"border-2 border-border",
						"bg-card shadow-[0 4px 6px #0000000a] transition-all",
						"min-h-[28.125rem] md:min-h-[0rem] w-full overflow-hidden mx-auto my-14 rounded-lg"
					)}
				>
					<div className="h-[17.5rem] w-full skeleton [--pulse-delay:300ms]"></div>
					<div className="z-10 p-4 grid gap-4 w-full">
						<div className="w-full gap-4 flex items-start justify-between">
							<div className="w-3/4">
								<div className="mb-3 h-8 w-32 rounded-md skeleton [--pulse-delay:500ms]"></div>
								<div className="my-2 h-4 w-4/5 rounded-md skeleton [--pulse-delay:700ms]"></div>
								<div className="my-2 h-4 w-2/4 rounded-md skeleton [--pulse-delay:900ms]"></div>
							</div>
							<div className="flex items-center gap-3">
								{Array.from({ length: 3 }, (_, i) => (
									<div
										key={i}
										className="size-[1.25rem] rounded-full skeleton [--pulse-delay:500ms]"
									></div>
								))}
							</div>
						</div>
						<div className="flex gap-2 flex-wrap">
							<span className="w-20 h-[1rem] rounded-lg skeleton [--pulse-delay:1100ms]"></span>
							<span className="w-32 h-[1rem] rounded-lg skeleton [--pulse-delay:1100ms]"></span>
							<span className="w-20 h-[1rem] rounded-lg skeleton [--pulse-delay:1100ms]"></span>
							<span className="w-20 h-[1rem] rounded-lg skeleton [--pulse-delay:1100ms]"></span>
							<span className="w-32 h-[1rem] rounded-lg skeleton [--pulse-delay:1100ms]"></span>
							<span className="w-32 h-[1rem] rounded-lg skeleton [--pulse-delay:1100ms]"></span>
							<span className="w-20 h-[1rem] rounded-lg skeleton [--pulse-delay:1100ms]"></span>
						</div>
					</div>
				</div>
			</div>
			<div className="sticky top-[3.75rem] md:top-[7.5rem] flex items-enter justify-center">
				<div
					className={cn(
						"flex lg:flex-row flex-col items-start relative",
						"border-2 border-border",
						"bg-card shadow-[0 4px 6px #0000000a] transition-all",
						"min-h-[28.125rem] md:min-h-[0rem] w-full overflow-hidden mx-auto my-14 rounded-lg"
					)}
				>
					<div className="min-h-[16.875rem] w-full skeleton [--pulse-delay:300ms]"></div>
					<div className="z-10 p-4 grid gap-4 w-full">
						<div className="w-full gap-4 flex items-start justify-between">
							<div className="w-3/4">
								<div className="mb-3 h-8 w-32 rounded-md skeleton [--pulse-delay:500ms]"></div>
								<div className="my-2 h-4 w-4/5 rounded-md skeleton [--pulse-delay:700ms]"></div>
								<div className="my-2 h-4 w-2/4 rounded-md skeleton [--pulse-delay:900ms]"></div>
							</div>
							<div className="flex items-center gap-3">
								{Array.from({ length: 2 }, (_, i) => (
									<div
										key={i}
										className="size-[1.25rem] rounded-full skeleton [--pulse-delay:500ms]"
									></div>
								))}
							</div>
						</div>
						<div className="flex gap-2 flex-wrap">
							<span className="w-20 h-[1rem] rounded-lg skeleton [--pulse-delay:1100ms]"></span>
							<span className="w-16 h-[1rem] rounded-lg skeleton [--pulse-delay:1100ms]"></span>
							<span className="w-32 h-[1rem] rounded-lg skeleton [--pulse-delay:1100ms]"></span>
							<span className="w-14 h-[1rem] rounded-lg skeleton [--pulse-delay:1100ms]"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
