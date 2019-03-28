const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;

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

gulp.task('minify-css', () => {
    return gulp.src('./css/*.css')
   .pipe(cleanCSS())
   .pipe(gulp.dest('./release/css'));
});

gulp.task('uglify-js', function () {

          return gulp.src('./assets/js/*.js')
          .pipe(uglify())
          .pipe(gulp.dest('./release/js'))
  });


exports.scss = scss;
exports.watch = watch;