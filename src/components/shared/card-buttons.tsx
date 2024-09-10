import { Info } from 'lucide-react';
import LinkIcon from '@/components/shared/icons/link-icon';
import GitHubIcon from '@/components/shared/icons/github';

import Link from 'next/link';
import { TButton } from '@/components/shared/interface/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

export default function Buttons({ i, l }: TButton) {
	return (
		<div className='flex items-center gap-3'>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
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
								className='size-[1.25rem] text-muted-foreground'
							/>
						</Link>
					</TooltipTrigger>
					<TooltipContent>
						<p>Github Repo</p>
					</TooltipContent>
				</Tooltip>
				{l.href !== '' && (
					<Tooltip>
						<TooltipTrigger>
							<Link
								href={l.href}
								target='_blank'
								aria-label='Link'
								rel='noopener noreferrer'
							>
								<span className='sr-only'>Link</span>
								<LinkIcon
									strokeWidth={0}
									className='size-[1.25rem] text-muted-foreground'
								/>
							</Link>
						</TooltipTrigger>
						<TooltipContent>
							<p>Live Preview</p>
						</TooltipContent>
					</Tooltip>
				)}
				<Tooltip>
					<TooltipTrigger>
						<Link
							className='rounded-full'
							href={`works/${i + 1}`}
							aria-label='Learn more'
						>
							<span className='sr-only'>Learn more</span>
							<Info
								strokeWidth={1.5}
								className='size-[1.25rem] text-muted-foreground'
							/>
						</Link>
					</TooltipTrigger>
					<TooltipContent>
						<p>More info</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
}
