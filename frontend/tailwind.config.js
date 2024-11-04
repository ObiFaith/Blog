/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
	theme: {
		colors: {
			white: colors.white,
			grey: '#737373',
			clr: '#D9D9D9',
			purple: '#633CFF',
			'dark-grey': '#333',
			'red-400': '#FF3939',
			'light-grey': '#FAFAFA',
			'purple-light': '#EFEBFF',
			'purple-hover': '#BEADFF',
		},
		extend: {
			backgroundImage: {
				'profile-img': 'url("/images/testimonial-1.jpeg")'
			}
		},
	},
  plugins: [],
}