import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ModeToggle } from './mode-toggle';
import Curve from './curve';
import NavLink from './nav-links';
import { INavMenu } from './interface/nav';
import { menuSlide } from './anim';

export const navLinks = [
	{ title: 'Home', href: '/' },
	{ title: 'Works', href: '/works' },
	{ title: 'About', href: '/about' },
];

export default function HeaderMenu({ sidebarOpen, setSidebarOpen }: INavMenu) {
	const pathname = usePathname();

	function currentPath(isActive: boolean): string {
		let style = 'text-purple-900 hover:text-purple-800';

		isActive ? (style = 'text-cyan-100 hover:text-purple-50') : '';

		return style;
	}

	return (
		<motion.div
			exit='exit'
			animate='enter'
			initial='initial'
			variants={menuSlide}
			className='md:hidden block h-screen w-full fixed right-0 top-0 bg-primary'
		>
			<div className='flex gap-4 justify-center flex-col items-center w-full h-full px-4'>
				{navLinks.map((data, index) => {
					const isActive =
						pathname === data.href || (data.href === '/works' && pathname.startsWith('/works'));

					return (
						<NavLink
							key={index}
							i={index}
							href={data.href}
							className={cn(
								currentPath(isActive),
								sidebarOpen ? 'block' : 'hidden',
								'uppercase text-7xl md:text-sm font-bold rounded-lg transition-all'
							)}
							setSidebarOpen={setSidebarOpen}
						>
							{data.title}
						</NavLink>
					);
				})}
				<div className='w-full flex justify-center items-center mt-8 px-3 md:px-0'>
					<ModeToggle />
				</div>
			</div>
			<Curve />
		</motion.div>
	);
}
