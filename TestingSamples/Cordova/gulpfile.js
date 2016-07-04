var gulp = require('gulp');
var Server = require('karma').Server;
var shell = require('gulp-shell');

gulp.task('run', ['karma', 'emulator']);

gulp.task('emulator', shell.task('ripple emulate'));

// Run test once and exit
gulp.task('karma', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});