var gulp = require('gulp'),
	gnf = require('gulp-npm-files');
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css'),
	minifyHTML = require('gulp-minify-html'),
	msx = require('gulp-msx');
var common = require('../functions/common.js'),
	vendor = require('../settings/vendor.js');

var destinationBUILD = './build',
	cssBUILD = './build/styles',
	javascriptBUILD = './build',
	assetsBUILD = './build/assets',
	fontsBUILD = './build/fonts',
	pluginsBUILD = './build/plugins';
gulp.task('assets', function(){
	return gulp.src('./src/assets/**/*.*')
		.pipe(gulp.dest(assetsBUILD));
});
gulp.task('build-fonts', function(){ // TODO: will need to be modified so that it can retrieve info fron libraries__fonts variable
	return gulp.src('./src/fonts/**/*.*')
		.pipe(gulp.dest(fontsBUILD));
});
gulp.task('script-build', function(){
	return gulp.src('./src/**/*.js')
		.pipe(gulp.dest(javascriptBUILD));
});
gulp.task('msx-build', function(){
	return gulp.src('./src/**/*.jsx')
		.pipe(msx({harmony: true}))
		.pipe(gulp.dest(javascriptBUILD));
});
gulp.task('plugin-script-build', ['copyNpmDependenciesOnly'], function () {
	

	/*var pathsArray = common.getLibraryList(vendor.libraries_js.paths, '.js');
	pathsArray = common.processCutoff('./bower_components', pathsArray); // a necessasry function in reference with the gulpfiles location to locate the vendor scripts  
	pathsArray.push(vendor.requiredlibs.mithril);
	pathsArray.push(vendor.requiredlibs.require);
	console.log(JSON.stringify(pathsArray));
	
	return gulp.src(pathsArray)
		.pipe(gulp.dest(pluginsBUILD));*/
});
gulp.task('plugin-css-build', function () { // TODO: change as to handle(vendor) third party css libs so it integrates into one css file only
	
	/*var pathsArray = common.getLibraryList(vendor.libraries_css, '.css');
	pathsArray = common.processCutoff('./bower_components', pathsArray); // a necessasry function in reference with the gulpfiles location to locate the vendor styles
	console.log(JSON.stringify(pathsArray));
	return gulp.src(pathsArray)
		.pipe(concat('vendor.min.css')) 
		.pipe(minifyCSS())
		.pipe(gulp.dest(cssBUILD));*/
});
gulp.task('less-build', ['plugin-css-build'], function () {
	// order is themes variables - then  main less or folder files - then common - then app - then app components
	return gulp.src(['./src/less/themes/**/*.less', './src/less/*.less', './src/less/common/**/*.less', './src/scripts/app/**/*.less', cssBUILD + '/vendor.min.css']) // TODO: update so that sub components styles are also overriding the primary components
		.pipe(concat('superstyles.min.css'))
		.pipe(less()) // TODO: auto-prefixerafter less compilation
		.pipe(minifyCSS())
		.pipe(gulp.dest(cssBUILD));
});
gulp.task('html-build', function () {
	return gulp.src('./src/index.html')
		.pipe(minifyHTML())
		.pipe(gulp.dest(destinationBUILD));
});


//#####################################  GULP NODE FILES
		// Copy dependencies to build/node_modules/ 
		gulp.task('copyNpmDependenciesOnly', function() {
		  gulp.src(gnf(), {base:'./'}).pipe(gulp.dest(pluginsBUILD));
		});
		 
		// Copy dependencies and devDependencies to build/node_modules/ 
		gulp.task('copyAllNpmDependencies', function() {
		  gulp.src(gnf(true), {base:'./'}).pipe(gulp.dest('./build'));
		});
		 
		// Copy dependencies to build/node_modules/ by 
		// value in './path/to/package.json' file 
		gulp.task('copyNpmDependenciesAtDifferentFolder', function() {
		  gulp
		    .src(gnf(null, './path/to/package.json'), {base:'./'})
		    .pipe(gulp.dest('./build'));
		});
		 
		// Copy dependencies and devDependencies to build/node_modules/ by 
		// value in './path/to/package.json' file 
		gulp.task('copyAllNpmDependenciesAtDifferentFolder', function() {
		  gulp
		    .src(gnf(true, './path/to/package.json'), {base:'./'})
		    .pipe(gulp.dest('./build'));
		});
 
gulp.task('build', ['assets', 'build-fonts', 'less-build', 'script-build', 'html-build', 'plugin-script-build']);
