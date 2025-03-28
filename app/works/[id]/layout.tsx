import { BackButton } from "@/components/works"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<BackButton />
			{children}
		</>
	)
}
