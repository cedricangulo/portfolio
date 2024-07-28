import Link from 'next/link';
import { Button } from '../shared/ui/button';
import { EnvelopeOpenIcon } from '@radix-ui/react-icons';

function HeroButtons() {
	return (
		<div className='animate-slideIn [--slideIn-delay:900ms] opacity-0 inline-flex gap-3 mt-2'>
			<Button variant='secondary'>
				<EnvelopeOpenIcon className='mr-2 h-4 w-4' />
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
