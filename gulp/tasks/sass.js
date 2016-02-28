var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync').create(),
    notify       = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.sass')
    .pipe(sass({includePaths: ['node_modules/modularscale-sass/stylesheets']}))
    .on('error', notify.onError(function (error) {
       return 'An error occurred while compiling SASS.\n' + error;
    }))
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(gulp.dest('./build/assets/css'))
    .pipe(browserSync.stream());
});