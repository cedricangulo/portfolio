import { cn } from '@/lib/utils';

function GridBackground() {
	return (
		<div
			className={cn(
				'animate-fadeIn [--fadeIn-delay:1500ms] opacity-0',
				'absolute top-0 left-0 h-full w-full',
				'bg-[linear-gradient(to_right,#a855f770,transparent_1px),linear-gradient(to_bottom,#a855f770,transparent_1px)] bg-[size:3rem_3rem]',
				'[mask-image:radial-gradient(ellipse_100%_30%_at_50%_50%,#121212_0%,transparent_100%)]',
				'sm:[mask-image:radial-gradient(ellipse_60%_30%_at_50%_50%,#121212_0%,transparent_100%)]'
			)}
		></div>
	);
}

export default GridBackground;
