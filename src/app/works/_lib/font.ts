import {
	Anta,
	Electrolize,
	Hind,
	Lexend,
	Orbitron,
	Poppins,
	Rubik_Doodle_Shadow,
	Tektur,
} from 'next/font/google';

export const anta = Anta({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
});

export const electrolize = Electrolize({
	subsets: ['latin'],
	weight: ['400'],
});

export const lexend = Lexend({
	subsets: ['latin'],
	display: 'swap',
	adjustFontFallback: false,
	weight: ['500', '600', '700', '800'],
});

export const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const orbitron = Orbitron({
	subsets: ['latin'],
});

export const tektur = Tektur({
	subsets: ['latin'],
});

export const hind = Hind({
	subsets: ['latin'],
	weight: ['400'],
});

export const rubik_doodle_shadow = Rubik_Doodle_Shadow({
	subsets: ['latin'],
	weight: ['400'],
});
