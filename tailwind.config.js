module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js}', './components/**/*.{jsx}'],
	darkMode: false,
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
