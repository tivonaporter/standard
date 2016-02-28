var gulp         = require('gulp');

gulp.task('public', function() {
  return gulp.src('./src/public/**').pipe(gulp.dest('./build'));
});