import { GeistSans } from "geist/font/sans";
import {
	Anta,
	Caveat,
	Electrolize,
	Hind,
	Lexend,
	Orbitron,
	Playfair,
	Poppins,
	Rubik_Doodle_Shadow,
	Tektur,
} from "next/font/google";

export const geistsans = GeistSans;

export const lexend = Lexend({
	subsets: ["latin"],
	display: "swap",
	adjustFontFallback: false,
	weight: ["500", "600", "700", "800"],
});

export const caveat = Caveat({
	subsets: ["latin"],
	display: "swap",
	adjustFontFallback: false,
	weight: "400",
});

export const playfair = Playfair({
	subsets: ["latin"],
	display: "swap",
});

export const anta = Anta({
	subsets: ["latin"],
	display: "swap",
	adjustFontFallback: false,
	weight: "400",
});

export const electrolize = Electrolize({
	subsets: ["latin"],
	display: "swap",
	adjustFontFallback: false,
	weight: "400",
});

export const hind = Hind({
	subsets: ["latin"],
	display: "swap",
	adjustFontFallback: false,
	weight: ["300", "400", "500", "600", "700"],
});

export const orbitron = Orbitron({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "500", "600", "700", "800"],
});

export const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	adjustFontFallback: false,
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const rubik_doodle_shadow = Rubik_Doodle_Shadow({
	subsets: ["latin"],
	display: "swap",
	adjustFontFallback: false,
	weight: "400",
});

export const tektur = Tektur({
	subsets: ["latin"],
	display: "swap",
	adjustFontFallback: false,
	weight: ["400", "500", "600", "700", "800"],
});
