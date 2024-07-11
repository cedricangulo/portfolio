import { GeistSans } from "geist/font/sans";
import { Caveat, Lexend } from "next/font/google";

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
