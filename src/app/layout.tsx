import './globals.css';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { geistsans } from '@/lib/fonts';
import NavBar from '@/components/nav/nav';
import Footer from '@/components/shared/footer';
import Providers from '@/components/shared/theme-provider';

export const metadata: Metadata = {
	title: {
		default: 'Cedric Angulo',
		template: 'Cedric Angulo | %s',
	},
	metadataBase: new URL('https://cdrcangulo.vercel.app'),
	description:
		'Aspiring Web Developer and Incoming sophomore student at NEUST, based in Nueva Ecija, Philippines.',
	openGraph: {
		title: 'Cedric Angulo’s Portfolio',
		description:
			'Aspiring Web Developer and Incoming sophomore student at NEUST, based in Nueva Ecija, Philippines.',
		images: [`https://cdrcangulo.vercel.app/metaimg.jpg`],
	},
};

type Props = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body
				className={cn(
					'text-gray-950 dark:text-gray-200 bg-[#fafafa] dark:bg-[#000000] transition-all',
					geistsans.className
				)}
			>
				<Providers>
					<NavBar />
					<main className='w-full px-8 justify-center flex flex-col items-center overflow-x'>
						{children}
					</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
