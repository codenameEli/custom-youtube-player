module.exports = {

	sticky: {
		options: {
			sourceMap: true,
		},
		src: [
			'<%= paths.js.src %>',
		],
		dest: '<%= paths.js.dest %>'
	}
};