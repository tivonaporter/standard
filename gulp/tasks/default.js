var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var config = require("../config.js").browserSync;

gulp.task('default', ['public', 'jade', 'sass', 'watch'], function() {
  return browserSync.init(config);
});