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
		<section className='relative min-h-dvh mt-[72px] md:mt-[88px] w-full md:max-w-[1000px] mb-[40%] md:mb-[20%]'>
			<div className='lg:min-w-[1000px] w-full h-[120px] pt-8 animate-fadeIn [--fadeIn-delay:300ms] opacity-0'>
				<h1
					className={`${lexend.className} text-center lg:text-left m-auto text-5xl font-extrabold tracking-tight leading-none pri-text uppercase`}
				>
					Works
				</h1>
				<p className='text-center lg:text-left text-xl sec-text font-normal'>
					These are the projects I built
				</p>
			</div>
			{children}
		</section>
	);
}
