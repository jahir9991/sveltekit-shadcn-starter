export default {
	plugins: {
		'tailwindcss/nesting': {},
		'postcss-import': {},
		tailwindcss: {},
		autoprefixer: {},
		...(process.env.NODE_ENV !== 'development' ? { cssnano: {} } : {})
	}
};
