import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface AnnButtonProps {
	href: string;
	icon: React.ReactNode;
	text: string;
	from: string;
	via: string;
	to: string;
}

function AnnButton({ href, icon, text, from, via, to }: AnnButtonProps) {
	return (
		<Link
			href={`${href}`}
			target='_blank'
			className='group relative mb-8 flex max-w-fit flex-row items-center justify-center rounded-md bg-white/40 dark:bg-neutral-950 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#9c40ff20] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#9c40ff55] dark:bg-black/40'
		>
			<div
				style={{
					backgroundImage: `linear-gradient(to right, ${from}, ${via}, ${to})`,
				}}
				className={`absolute inset-0 block h-full w-full animate-gradient bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
			></div>
			<div
				style={{
					backgroundImage: `linear-gradient(to right, ${from}, ${via}, ${to})`,
				}}
				className={`absolute inset-0 block size-full animate-gradient bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-px ![mask-composite:subtract]`}
			></div>
			{icon}
			<div className='shrink-0 bg-[#666] dark:bg-[#a1a1a1] w-px mx-2 h-4'></div>
			<span
				className='animate-gradient bg-clip-text text-transparent inline'
				style={{
					backgroundImage: `linear-gradient(to right, ${from}, ${via}, ${to})`,
					backgroundSize: 'var(--bg-size) 100%',
				}}
			>
				{text}
			</span>
			<ChevronRight className='ml-1 size-4 sec-text' />
		</Link>
	);
}

export default AnnButton;
