module.exports = {

    css: {
        options: {
            outputStyle : 'nested',
            sourceMap: true,
        },
        files: {
            '<%= paths.css.dest %>':
            '<%= paths.css.src %>'
        }
    },

    css_min: {
        options: {
            outputStyle : 'compressed',
            sourceMap: true,
        },
        files: {
            '<%= paths.css.dest_min %>':
            '<%= paths.css.src %>'
        }
    },
};