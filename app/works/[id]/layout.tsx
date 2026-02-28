import { BackButton } from "@/components/works";
import ScrollReset from "@/components/works/scroll-reset";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<ScrollReset />
			<BackButton />
			{children}
		</>
	);
}
