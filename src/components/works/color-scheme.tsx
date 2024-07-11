'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Tooltip } from '@nextui-org/tooltip';
import { IColorScheme } from './interface/color-scheme';

const CopyIcon = ({ color }: { color: number }) => (
	<Copy
		className={cn(
			'size-4 opacity-0',
			'group-hover:opacity-100 transition-opacity duration-200 ease-in-out',
			color == 1 ? 'text-neutral-950' : 'text-neutral-50'
		)}
	/>
);

const CheckIcon = ({ color }: { color: number }) => (
	<Check
		className={cn(
			'size-4 opacity-0',
			'group-hover:opacity-100 transition-opacity duration-200 ease-in-out',
			color == 1 ? 'text-neutral-950' : 'text-neutral-50'
		)}
	/>
);

export default function ColorScheme({ content, color, textColor }: IColorScheme) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard
			.writeText(content)
			.then(() => {
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
			})
			.catch((err) => {
				console.error('Failed to copy text: ', err);
			});
	};

	return (
		<Tooltip
			content={content}
			className={cn(
				color,
				'rounded-md px-2',
				textColor == 1 ? 'text-neutral-950' : 'text-gray-100'
			)}
		>
			<div
				onClick={handleCopy}
				className={cn(
					color,
					'flex items-center justify-center',
					'relative h-8 w-full cursor-pointer group'
				)}
			>
				{copied ? <CheckIcon color={textColor} /> : <CopyIcon color={textColor} />}
			</div>
		</Tooltip>
	);
}
