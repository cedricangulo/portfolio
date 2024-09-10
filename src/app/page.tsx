import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function HomePage() {
	return (
		<section className='relative h-dvh flex items-center justify-between max-w-[62.5rem] w-full'>
			<div className='h-screen flex mx-0 sm:mx-auto'>
				<div className='w-full flex sm:items-center justify-center flex-col gap-2'>
					<p
						className={cn(
							'animate-slideIn [--slideIn-delay:700ms] opacity-0 transition-all',
							'sm:text-center leading-relaxed',
							'text-foreground text-sm sm:text-base',
							'max-w-sm sm:max-w-md'
						)}
					>
						Aspiring web developer and a second year student at{' '}
						<Link
							href='https://neust.edu.ph'
							target='_blank'
							className='text-accent hover:text-accent/80 font-semibold'
						>
							NEUST
						</Link>
						, based in Nueva Ecija, Philippines
					</p>
				</div>
			</div>
		</section>
	);
}
