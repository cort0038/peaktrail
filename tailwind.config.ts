import type {Config} from "tailwindcss"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				green: {
					50: "#30AF5B",
					90: "#292C27"
				},
				gray: {
					10: "#EEEEEE",
					20: "#A2A2A2",
					30: "#7B7B7B",
					50: "#585858",
					90: "#141414"
				},
				orange: {
					50: "#FF814C"
				},
				blue: {
					70: "#021639"
				},
				yellow: {
					50: "#FEC601"
				}
			},
			backgroundImage: {
				"bg-img-1": "url('/img-1.jpg')",
				"bg-img-2": "url('/img-2.jpeg')",
				"bg-img-3": "url('/img-3.webp')",
				"bg-img-4": "url('/img-4.jpeg')",
				"feature-bg": "url('/feature-bg.png')",
				"pattern": "url('/pattern.png')",
				"pattern-2": "url('/pattern-bg.png')"
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
	plugins: [],
	darkMode: "class"
}

export default config
