import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			spacing: {
				'tab-width': '120px',
				'tab-height': '42px',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'dark-navy': '#ddd6cc',
				navy: '#F0EEE9',
				'light-navy': '#e7e3dc',
				'lightest-navy': '#d9d3c8',
				'navy-shadow': 'rgba(89, 77, 61, 0.14)',
				'dark-slate': '#8b8175',
				slate: '#5f554a',
				'light-slate': '#433a31',
				'lightest-slate': '#2a241e',
				white: '#1d1813',
				green: '#6B7A52',
				'green-tint': 'rgba(107, 122, 82, 0.14)',
				pink: '#b07a67',
				blue: '#6c86a0',
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities, addComponents, e, config }) {
			const newUtilities = {
				'.horizontal-tb': {
					writingMode: 'horizontal-tb',
				},
				'.vertical-rl': {
					writingMode: 'vertical-rl',
				},
				'.vertical-lr': {
					writingMode: 'vertical-lr',
				},
			};
			addUtilities(newUtilities);
		}),
	],
};
export default config;
