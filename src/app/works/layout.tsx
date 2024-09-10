import { Metadata } from 'next';
import { lexend } from '@/lib/fonts';

export const metadata: Metadata = {
	title: 'Works',
};

type Props = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<section className='relative min-h-dvh mt-[4.5rem] md:mt-[5.5rem] w-full md:max-w-[62.5rem] mb-[40%] md:mb-[20%]'>
			<div className='lg:min-w-[62.5rem] w-full h-[7.5] pt-8 animate-fadeIn [--fadeIn-delay:300ms] opacity-0'>
				<h1 className={`${lexend.className} header`}>Works</h1>
				<p className='subheader'>These are the projects I built</p>
			</div>
			{children}
		</section>
	);
}
