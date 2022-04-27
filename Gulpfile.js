const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const directorioBase = '.';



// Servidor con Browsersync
gulp.task('servidor', function() {
    browserSync.init({
        server: directorioBase,
            https: true
    });
    gulp.watch(directorioBase + '/*.html').on('change', browserSync.reload);
    gulp.watch(directorioBase + '/css/*.css').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('servidor'));