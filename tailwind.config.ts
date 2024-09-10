import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		// './node_modules/@nextui-org/theme/dist/components/[object Object].js',
	],
	theme: {
		extend: {
			keyframes: {
				gradient: {
					to: {
						backgroundPosition: 'var(--bg-size) 0',
					},
				},
				skeleton: {
					'50%': {
						opacity: '0.5',
					},
				},
				fadeIn: {
					from: {
						filter: 'blur(2px)',
						opacity: '0',
					},
					to: {
						filter: 'blur(0)',
						opacity: '1',
					},
				},
				slideIn: {
					from: {
						opacity: '0',
						filter: 'blur(2px)',
						transform: 'translateY(-30px)',
					},
					to: {
						opacity: '1',
						filter: 'blur(0)',
						transform: 'translateY(0px)',
					},
				},
				in: {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
				out: {
					'0%': {
						opacity: '1',
					},
					'100%': {
						opacity: '0',
					},
				},
			},
			animation: {
				skeleton: 'skeleton 2s cubic-bezier(0.4, 0, 0.6, 1) var(--pulse-delay, 0) infinite',
				fadeIn: 'fadeIn 1s ease var(--fadeIn-delay, 0) forwards',
				slideIn: 'slideIn 1s ease var(--slideIn-delay, 0) forwards',
				gradient: 'gradient 8s linear infinite',
				in: 'in 0.2s ease-in-out',
				out: 'out 0.2s ease-in-out',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				background: 'rgb(var(--background))',
				foreground: 'rgb(var(--foreground))',
				card: {
					DEFAULT: 'rgb(var(--card))',
					foreground: 'rgb(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'rgb(var(--popover))',
					foreground: 'rgb(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'rgb(var(--primary))',
					foreground: 'rgb(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'rgb(var(--secondary))',
					foreground: 'rgb(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'rgb(var(--muted))',
					foreground: 'rgb(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'rgb(var(--accent))',
					foreground: 'rgb(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'rgb(var(--destructive))',
					foreground: 'rgb(var(--destructive-foreground))',
				},
				border: 'rgb(var(--border))',
				input: 'rgb(var(--input))',
				ring: 'rgb(var(--ring))',
				chart: {
					'1': 'rgb(var(--chart-1))',
					'2': 'rgb(var(--chart-2))',
					'3': 'rgb(var(--chart-3))',
					'4': 'rgb(var(--chart-4))',
					'5': 'rgb(var(--chart-5))',
				},
			},
		},
	},
	darkMode: ['class', 'class'],
	plugins: [require('tailwindcss-animate')],
};

export default config;
