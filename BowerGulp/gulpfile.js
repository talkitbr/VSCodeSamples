var gulp = require("gulp");
var less = require("gulp-less");
var webserver = require("gulp-webserver");

gulp.task("copy", function () {
	gulp.src("./bower_components/bootstrap/dist/**").pipe(gulp.dest("./wwwroot/lib/bootstrap"));
});

gulp.task("less", function () {
	gulp.src("./wwwroot/less/*.less")
		.pipe(less({compress: true}))
		.pipe(gulp.dest("./wwwroot/less"));
});

gulp.task("watch", function () {
	gulp.watch("./wwwroot/less/*.less", ["less"]);
});

gulp.task('webserver', function() {
  gulp.src('wwwroot')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});