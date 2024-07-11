import Link from 'next/link';
import { cn } from '@/lib/utils';
import Buttons from '@/components/home/buttons';
import LargeHeader from '@/components/home/large-header';
import SmallHeader from '@/components/home/small-header';
import GridBackground from '@/components/home/grid-background';

export default function HomePage() {
	return (
		<section className='relative h-dvh flex items-center justify-between max-w-[1000px] w-full'>
			<GridBackground />
			<div className='h-screen flex mx-0 sm:mx-auto'>
				<div className='w-full flex sm:items-center justify-center flex-col gap-2'>
					<SmallHeader />
					<LargeHeader />
					<p
						className={cn(
							'animate-slideIn [--slideIn-delay:700ms] opacity-0 transition-all',
							'sec-text sm:text-center leading-relaxed',
							'text-sm sm:text-base',
							'max-w-sm sm:max-w-md'
						)}
					>
						Aspiring web developer and a second year student at{' '}
						<Link
							href='https://neust.edu.ph'
							target='_blank'
						>
							<span
								className={cn(
									'text-purple-500 dark:text-purple-300 hover:text-purple-600 dark:hover:text-purple-400',
									'underline underline-offset-2 decoration-1 transition-all'
								)}
							>
								NEUST
							</span>
						</Link>
						, based in Nueva Ecija, Philippines
					</p>
					<Buttons />
				</div>
			</div>
		</section>
	);
}
