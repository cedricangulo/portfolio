import Link from 'next/link';
import { Info } from 'lucide-react';
import { Tooltip } from '@nextui-org/tooltip';
import LinkIcon from '@/components/icons/link-icon';
import GitHubIcon from '@/components/icons/github';
import { TButton } from '@/components/works/interface/card';

export default function Buttons({ i, l }: TButton) {
	return (
		<div className='flex items-center gap-3'>
			<Tooltip
				content='Source Code'
				className='tooltip'
			>
				<Link
					href={l.github}
					target='_blank'
					className='rounded-full'
					aria-label='GitHub link'
					rel='noopener noreferrer'
				>
					<span className='sr-only'>GitHub link</span>
					<GitHubIcon
						strokeWidth={0}
						className='size-[1.25rem] sec-text transition-all'
					/>
				</Link>
			</Tooltip>
			{l.href === '' ? (
				''
			) : (
				<Tooltip
					content='Link'
					className='tooltip'
				>
					<Link
						href={l.href}
						target='_blank'
						aria-label='Link'
						rel='noopener noreferrer'
					>
						<span className='sr-only'>Link</span>
						<LinkIcon
							strokeWidth={0}
							className='size-[1.25rem] sec-text transition-all'
						/>
					</Link>
				</Tooltip>
			)}
			<Tooltip
				content='More info'
				className='tooltip'
			>
				<Link
					className='rounded-full'
					href={`works/${i + 1}`}
					aria-label='Learn more'
				>
					<span className='sr-only'>Learn more</span>
					<Info
						strokeWidth={1.5}
						className='size-[1.25rem] sec-text transition-all'
					/>
				</Link>
			</Tooltip>
		</div>
	);
}
