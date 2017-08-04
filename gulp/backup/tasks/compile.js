var gulp = require('gulp'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	run = require('gulp-run'),
	minifyCSS = require('gulp-minify-css'),
	minifyHTML = require('gulp-minify-html'),
	fs = require('fs'),
	autoprefixer = require('gulp-autoprefixer');
var	vendor = require('../settings/vendor.js'),
	build = require('./build.js'),
	common = require('../functions/common.js');


var destinationDIST = './dist',
	cssDIST = './dist/styles',
	javascriptDIST = './dist/scripts',
	pluginsDIST = './dist/plugins';
var compileScriptFile = "compile-script.js";


gulp.task('script-compile', function(){
	fs.writeFile(compileScriptFile, common.getFormatedCompileObject(vendor.libraries_js), function(err) {
		if(err) {
			return console.log(err);
		}
		console.log("Script file created - Running the scripts file now");
		var cmd = new run.Command('node r.js -o ' + compileScriptFile); 
		cmd.exec(null, function(err){
			if(err) {
				return console.log(err);
			}	
			console.log("Finished Compilation - Use the dist independently :)");
		});
	}); 
});
gulp.task('require-script-compile', function () {
	return gulp.src(vendor.requiredlibs.require)
		.pipe(gulp.dest(pluginsDIST));
});
gulp.task('css-compile', ['less-build'], function () {
	return gulp.src('./build/styles/superstyles.min.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest(cssDIST));
});
gulp.task('html-compile', function () {
	return gulp.src('./src/index.html')
		.pipe(minifyHTML())
		.pipe(gulp.dest(destinationDIST));
});

gulp.task('compile-fonts', function () {
	return gulp.src('./src/fonts/*.*')
		.pipe(gulp.dest('./dist/fonts'));
});
gulp.task('compile-assets', function(){
	return gulp.src('./src/assets/**/*.*')
		.pipe(gulp.dest('./dist/assets'));
});

gulp.task('compile', ['compile-assets', 'compile-fonts', 'css-compile', 'script-compile', 'require-script-compile', 'html-compile']);
