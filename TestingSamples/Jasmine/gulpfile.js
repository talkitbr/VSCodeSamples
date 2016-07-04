'use strict';

var gulp = require('gulp'),
    shell = require('gulp-shell'),
    Server = require('karma').Server,
    open = require('gulp-open');
 
gulp.task('server', ['node', 'app', 'test']);
 
gulp.task('node', shell.task('node app.js'));

gulp.task('app', function(){
  var options = {
    uri: 'http://localhost:45000/',
    app: 'chrome'
  };
  gulp.src(__filename)
  .pipe(open(options));
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start()
});