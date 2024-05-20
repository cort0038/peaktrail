import type {Config} from "tailwindcss"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			backgroundImage: {
				"bg-img-1": "url('/img-1.jpg')",
				"bg-img-2": "url('/img-2.jpeg')",
				"bg-img-3": "url('/img-3.webp')",
				"bg-img-4": "url('/img-4.jpeg')",
				"pattern": "url('/pattern.png')",
				"pattern-2": "url('/pattern-bg-1.png')"
			},
			screens: {
				xs: "400px",
				"3xl": "1680px",
				"4xl": "2200px"
			},
			maxWidth: {
				"10xl": "1512px"
			},
			borderRadius: {
				"5xl": "40px"
			},
			fontSize: {
				"xs": "1.6rem",
				"sm": "1.8rem",
				"md": "2.2rem",
				"lg": "3.6rem",
				"xl": "5.6rem",
				"2xl": "9.6rem"
			}
		}
	},
	plugins: [require("daisyui")]
}

export default config
