'use client';

import Link from 'next/link';
import Logo from '../icons/logo';
import { cn } from '@/lib/utils';
import ThemeSwitch from './theme-switcher';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import NavMenu, { navLinks } from './nav-menu';
import { AnimatePresence } from 'framer-motion';

export default function NavBar() {
	const pathname = usePathname();
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	useEffect(() => {
		const d = document;

		sidebarOpen ? (d.body.style.overflow = 'hidden') : (d.body.style.overflow = '');

		return () => {
			d.body.style.overflow = '';
		};
	}, [sidebarOpen]);

	return (
		<header
			className={cn(
				'transition-all z-40',
				'fixed top-0 py-0 w-full min-h-16',
				'flex flex-col justify-around items-center',
				'bg-none backdrop-blur-sm backdrop-saturate-200 bg-transparent'
			)}
		>
			<nav
				className={cn(
					'relative',
					'flex flex-wrap items-center justify-between',
					'max-w-[1000px] w-full px-4 py-4 lg:px-0 md:py-6'
				)}
			>
				<Link
					href='/'
					className='flex items-center space-x-3 rtl:space-x-reverse hover:scale-[1.05] active:scale-[.95] transition-all z-50'
					onClick={() => setSidebarOpen(false)}
				>
					<Logo
						state={sidebarOpen}
						className='size-10'
					/>
				</Link>
				<button
					type='button'
					onClick={toggleSidebar}
					aria-label='open menu'
					aria-expanded={sidebarOpen ? 'true' : 'false'}
					className={cn(
						'cursor-pointer bg-transparent z-10',
						'm-0 p-0 border-none h-9 w-9 rounded-md',
						'md:hidden flex items-center justify-center'
					)}
				>
					<div
						className={cn(
							'menu_toggle',
							'after:bg-gray-800 dark:after:bg-gray-200',
							'before:bg-gray-800 dark:before:bg-gray-200',
							sidebarOpen
								? 'before:rotate-45 before:translate-y-[7px] after:-rotate-45 after:translate-y-[-6px]'
								: 'before:rotate-0 after:rotate-0'
						)}
					></div>
				</button>

				<AnimatePresence mode='wait'>
					{sidebarOpen && (
						<NavMenu
							sidebarOpen={sidebarOpen}
							setSidebarOpen={setSidebarOpen}
						/>
					)}
				</AnimatePresence>

				<ul className='hidden md:flex items-center justify-around md:space-x-8 md:border-0 md:bg-transparent'>
					{navLinks.map((data, index) => {
						const isActive =
							pathname === data.href || (data.href === '/works' && pathname.startsWith('/works'));

						let style = 'sec-text hover:text-purple-400 dark:hover:text-purple-300';

						isActive ? (style = 'text-purple-500 hover:text-purple-400') : '';

						return (
							<li
								key={index}
								className='w-full md:w-auto'
							>
								<Link
									href={data.href}
									onClick={() => setSidebarOpen(false)}
									className={cn(
										'md:inline',
										'uppercase text-6xl md:text-sm font-medium',
										'rounded-lg md:rounded-none py-2 px-3 md:p-0',
										style
									)}
								>
									{data.title}
								</Link>
							</li>
						);
					})}
					<li className='w-full hidden md:w-auto md:flex items-center px-3 md:px-0'>
						<ThemeSwitch />
					</li>
				</ul>
			</nav>
		</header>
	);
}
