var gulp         = require('gulp'),
    browserSync  = require('browser-sync').create();

gulp.task('watch', function() {
  gulp.watch('./src/sass/**/*.sass', ['sass']);
  gulp.watch('./src/jade/**/*.jade', ['jade']);
  gulp.watch('./src/public/**', ['public']);
  gulp.watch('./build/*.html').on('change', browserSync.reload);
});