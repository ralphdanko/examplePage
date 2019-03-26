const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function scss() {
    return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./assets/scss/**/*.scss', scss);
    gulp.watch('./assets/js/*.js').on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.scss = scss;
exports.watch = watch;