/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/index.html"],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: "#4a4888",
				secondary: "#12074780",
				ternary: "#e8e4ff",
				darkBg: '#141029',
				primaryDark: '#d9d8e3',
				secondaryDark: '#a4a1bb',
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [],
};
