import type { Metadata } from "next";
import PageTitle from "@/components/shared/page-title";

export const metadata: Metadata = {
	title: "Works",
};

type Props = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<section className="relative min-h-dvh mt-[4.5rem] md:mt-[5.5rem] w-full md:max-w-[62.5rem] mb-[40%] md:mb-[20%]">
			<PageTitle title="Works" subheader="These are the projects I built" />
			{children}
		</section>
	);
}
