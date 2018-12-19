var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

var paths = {
  sass: {
    src: 'scss/**/*.{scss,sass}',
    dest: 'css',
    opts: {

    }
  }
};

gulp.task('sass', function () {
  return gulp.src(paths.sass.src)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.sass.dest))
});


gulp.task('watch:styles', function () {
  gulp.watch(paths.sass.src, gulp.series('sass'));
});

gulp.task('watch', gulp.series('sass',
  gulp.parallel('watch:styles')
));

gulp.task('default', gulp.series('sass',
  gulp.parallel('watch')
));
