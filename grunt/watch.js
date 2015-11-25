module.exports = {

    css: {
        files: [
            '<%= paths.css.src %>',
        ],
        tasks: [ 'sass' ],
    },

    js: {
        files: [
            '<%= paths.js.src %>',
        ],
        tasks: [ 'concat' ],
    },
};