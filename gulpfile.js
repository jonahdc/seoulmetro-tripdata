'use strict';

;(function() {
  var gulp = require('gulp');
  var notify = require('gulp-notify');
  var jshint = require('gulp-jshint');
  var plumber = require('gulp-plumber');
  var browserSync = require('browser-sync');

  var jsFile = 'smtd.js';

  gulp.task('lint', function() {
    return gulp.src(jsFile)
      .pipe(plumber({
        errorHandler: handleError
      }))
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('default'))
  });

  gulp.task('watch', function() {
    browserSync.init({
      server: './test'
    });

    gulp.watch(jsFile, ['lint']).on('chage', browserSync.reload);
  });

  gulp.task('default',['watch']);

  function handleError(error) {
    console.log(error);
    this.emit('end');
  }
})();
