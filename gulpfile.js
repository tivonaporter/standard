var gulp         = require('gulp'),
    util         = require('gulp-util'),
    sass         = require('gulp-sass'),
    jade         = require('gulp-jade'),
    browserSync  = require('browser-sync').create(),
    notify       = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['public', 'jade', 'sass', 'watch'], function() {
  return browserSync.init({ server: "./build" });
});

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

gulp.task('jade', function() {
  return gulp.src('./src/jade/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./build'));
});

gulp.task('public', function() {
  return gulp.src('./src/public/**').pipe(gulp.dest('./build'));
});

gulp.task('watch', function() {
  gulp.watch('./src/sass/**/*.sass', ['sass']);
  gulp.watch('./src/jade/**/*.jade', ['jade']);
  gulp.watch('./src/public/**', ['public']);
  gulp.watch('./build/*.html').on('change', browserSync.reload);
});
