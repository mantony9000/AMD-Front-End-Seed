/********************** DECLARATIONS ***********************/

var gulp = require('gulp'),
	build = require('./gulp/tasks/build.js'),
	compile = require('./gulp/tasks/compile.js'),
	browserSync = require('browser-sync').create();


/********************** PRIMARY TASKS ***********************/
gulp.task('serve', ['build'] ,function() {
	browserSync.init({
		server: "./build"
	});
	gulp.watch("./src/**/*.*", ['build', browserSync.reload]);
	//gulp.watch("./build/**/*.*").on('change', browserSync.reload);
});
/********************** END ***********************/

gulp.task('test', function(){
	console.log("Everything Fine No worries ");
});