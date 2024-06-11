/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "#111",
				brandpink: "#fe0167",
				white: "#ffeadb",
			},
			fontFamily: {
				incognito: ["var(--incognito)"],
				outfit: ["Outfit", "sans-serif"],
			},
		},
	},

	plugins: [require("@tailwindcss/forms"), require("tailwindcss-animated")],
};
