"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "sileo";

export default function Providers({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<Toaster position="top-center" />
			{children}
		</ThemeProvider>
	);
}
