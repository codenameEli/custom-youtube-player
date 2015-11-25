module.exports = {

	dist: {
		options: {
			mangle: false,
			beautify: true,
			sourceMap: true,
		},
		files: {
			'<%= paths.js.dest %>':
			'<%= paths.js.src %>'
		}
	}
};