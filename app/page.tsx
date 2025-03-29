import { Contents, GridBackground } from "@/components/home"

export default function HomePage() {
	return (
		<section className="relative h-dvh flex items-center justify-between max-w-[62.5rem] w-full">
			<GridBackground />
			<Contents />
		</section>
	)
}
