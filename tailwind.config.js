/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/**/*.{js,jsx}",
	],
	prefix: "",
	theme: {
	  container: {
		center: true,
		padding: "15px",
	  },
	  screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	  },
	  extend: {
		colors: {
		  primary: "#1c1c22",
		  accent: {
			DEFAULT: "#00ff99",
			hover: "#00e187",
		  },
		},
		fontFamily: {
		  primary: "var(--font-jetbrainsMono)", // Moved to the correct location
		},
		keyframes: {
		  "accordian-down": {
			from: { height: "0" },
			to: { height: "var(--radix-accordian-content-height)" },
		  },
		  "accordian-up": {
			from: { height: "var(--radix-accordian-content-height)" },
			to: { height: "0" },
		  },
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  