'use strict';
 
var gulp = require('gulp'),
var Server = require('karma').Server;
 
gulp.task('server', ['node', 'test']);
 
gulp.task('node', shell.task('node app.js'));

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});