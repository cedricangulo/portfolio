'use client';

import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/button';
import { useEffect, useState } from 'react';
import { Moon, Sun, SunMoon } from 'lucide-react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';

export default function ThemSwitch() {
	const [mounted, setmounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => {
		setmounted(true);
	}, []);

	if (!mounted)
		return (
			<Button className='border-none rounded-md p-1'>
				<SunMoon
					strokeWidth={1.5}
					className='stroke-cyan-100 md:stroke-gray-400 size-10 md:size-6 transition-all'
				/>
			</Button>
		);

	return (
		<Dropdown>
			<DropdownTrigger>
				<Button className='border-none rounded-md p-1'>
					{resolvedTheme === 'light' ? (
						<Sun
							strokeWidth={1.5}
							className='stroke-cyan-100 md:stroke-gray-400 size-10 md:size-6 transition-all'
						/>
					) : resolvedTheme === 'dark' ? (
						<Moon
							strokeWidth={1.5}
							className='stroke-cyan-100 md:dark:stroke-gray-400 size-10 md:size-6 transition-all'
						/>
					) : (
						''
					)}
				</Button>
			</DropdownTrigger>
			<DropdownMenu className='min-w-[6rem] bg-white shadow-sm dark:bg-[#0a0a0a] border-2 border-[#ebebeb] dark:border-[#333] rounded-lg p-1'>
				<DropdownItem
					key='light'
					className='text-sm py-1 pl-2 rounded-md hover:bg-[#f5f5f5] dark:hover:bg-[#26262a]'
					onClick={() => setTheme('light')}
				>
					Light
				</DropdownItem>
				<DropdownItem
					key='dark'
					className='text-sm py-1 pl-2 rounded-md hover:bg-[#f5f5f5] dark:hover:bg-[#26262a]'
					onClick={() => setTheme('dark')}
				>
					Dark
				</DropdownItem>
				<DropdownItem
					key='system'
					className='text-sm py-1 pl-2 rounded-md hover:bg-[#f5f5f5] dark:hover:bg-[#26262a]'
					onClick={() => setTheme('system')}
				>
					System
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
