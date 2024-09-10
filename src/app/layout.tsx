import './globals.css';
import type { Metadata } from 'next';
import { geistsans } from '@/lib/fonts';

export const metadata: Metadata = {
	title: {
		default: 'Cedric Angulo',
		template: 'Cedric Angulo | %s',
	},
	metadataBase: new URL('https://cdrcangulo.vercel.app'),
	description:
		'Aspiring web developer and a second year student at NEUST, based in Nueva Ecija, Philippines.',
	openGraph: {
		title: 'Cedric Angulo’s Portfolio',
		description:
			'Aspiring web developer and a second year student at NEUST, based in Nueva Ecija, Philippines.',
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
			<body className={geistsans.className}>
				<main
					role='main'
					className='w-full px-8 justify-center flex flex-col items-center overflow-x'
				>
					{children}
				</main>
			</body>
		</html>
	);
}
