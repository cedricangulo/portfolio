import { lexend } from '@/lib/fonts';
import { cn } from '@/lib/utils';

function SmallHeader() {
	return (
		<p
			className={cn(
				'animate-slideIn [--slideIn-delay:300ms] opacity-0 transition-all',
				'text-xl sm:text-2xl md:text-3xl',
				'pri-text font-medium',
				lexend.className
			)}
		>
			Hi, I’m <span className='text-purple-400 dark:text-purple-300'>Cedric Angulo</span>
		</p>
	);
}

export default SmallHeader;
