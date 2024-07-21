import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { lexend } from '@/lib/fonts';

export const metadata: Metadata = { title: 'About' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
    <section className='min-h-dvh max-w-[1000px] mt-[72px] md:mt-[88px] mb-20 w-full'>
      <div className='lg:min-w-[1000px] w-full h-[120px] pt-8 animate-fadeIn [--fadeIn-delay:300ms] opacity-0'>
        <h1
          className={cn(
            lexend.className,
            'm-auto pri-text uppercase',
            'text-center lg:text-left text-5xl font-extrabold tracking-tight leading-none'
          )}
        >
          About
        </h1>
        <p className='text-center lg:text-left text-xl sec-text font-normal'>
          A little bit about me
        </p>
      </div>
      {children}
    </section>
	);
}
