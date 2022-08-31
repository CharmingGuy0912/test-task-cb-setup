module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			'xs': {'max': '576px'},
			'sm': {'max': '768px'},
			'md': {'max': '992px'},
			'lg': {'max': '1200px'},
			'xl': {'min': '1201px'}
		},
		extend: {},
	},
	plugins: [],
}
