import Link from 'next/link';
import { Button } from '../ui/button';

function HeroButtons() {
	return (
		<div className='animate-slideIn [--slideIn-delay:900ms] opacity-0 inline-flex gap-3 mt-2'>
			<Button
				variant='secondary'
				asChild
			>
				<Link
					href='mailto:cdrcangulo@gmail.com'
					target='_blank'
				>
					cdrcangulo@gmail.com
				</Link>
			</Button>
			<Button asChild>
				<Link href='/works'>Works</Link>
			</Button>
		</div>
	);
}

export default HeroButtons;
