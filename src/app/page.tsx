import Link from 'next/link';
import { cn } from '@/lib/utils';
import GridBackground from '@/components/shared/grid-background';
import { caveat, lexend } from '@/lib/fonts';

export default function HomePage() {
	return (
		<section className='relative h-dvh flex items-center justify-between max-w-[62.5rem] w-full'>
			<GridBackground />
			<div className='h-screen flex mx-0 sm:mx-auto'>
				<div className='w-full flex sm:items-center justify-center flex-col gap-2'>
					<p
						className={cn(
							'text-xl sm:text-2xl md:text-3xl text-primary-foreground font-medium animate-slideIn [--slideIn-delay:300ms] opacity-0 transition-all',
							lexend.className
						)}
					>
						Hi, I’m <span className='text-secondary'>Cedric Angulo</span>
					</p>
					<h1
						className={cn(
							'text-primary-foreground font-extrabold tracking-tight leading-none text-5xl sm:text-6xl md:text-8xl animate-slideIn [--slideIn-delay:500ms] opacity-0',
							lexend.className
						)}
					>
						<span className='text-secondary'>BSIT</span>{' '}
						<span className='relative transition-all'>
							Student
							<span
								className={cn(
									'absolute -right-4 lg:-right-6 -rotate-12 -top-3',
									'text-secondary font-normal tracking-wider',
									'text-2xl md:text-3xl',
									caveat.className
								)}
							>
								only
							</span>
						</span>
					</h1>
					<p
						className={cn(
							'animate-slideIn [--slideIn-delay:700ms] opacity-0 transition-all',
							'text-secondary-foreground text-sm sm:text-base max-w-sm sm:max-w-md',
							'sm:text-center leading-relaxed'
						)}
					>
						Aspiring web developer and a second year student at{' '}
						<Link
							href='https://neust.edu.ph'
							target='_blank'
							className='text-secondary hover:text-secondary/80 font-semibold focus:outline-ring'
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
