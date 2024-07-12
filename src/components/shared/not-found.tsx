import Logo from '../icons/logo';
import { cn } from '@/lib/utils';
import { lexend } from '@/lib/fonts';

function NotFound() {
	return (
		<div
			className={cn(
				'h-dvh grid place-items-center',
				'animate-fadeIn [--fadeIn-delay:0ms] opacity-0'
			)}
		>
			<div className='inline-flex gap-4 z-20'>
				<h4 className='font-bold'>404</h4>
				<p className={cn('text-base', lexend.className)}> This page could not be found.</p>
			</div>
		</div>
	);
}

export default NotFound;
