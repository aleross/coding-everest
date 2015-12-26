module.exports = {
    options: {
        livereload: false
    },
    static: {
        files: ['*.html', 'dist/**'],
        options: { livereload: true }
    },
    sass: {
        files: ['src/sass/*.scss'],
        tasks: ['sass']
    },
};
