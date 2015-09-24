var fs = require("fs");
var gulp = require("gulp");
var plumber = require("gulp-plumber");
var connect = require("gulp-connect");
var rename = require("gulp-rename");
var notify = require("gulp-notify");
var browserify = require('browserify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');


var babelify = require('babelify');
var path = require("path");
var sass = require("gulp-sass");
var jade = require("gulp-jade");
var babel = require("gulp-babel");
var ftp = require("gulp-ftp");
var browserSync = require("browser-sync");
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');
var runSequence = require('run-sequence');







gulp.task('scripts', function() {
  var tsconfig = require("./tsconfig.json");
  var filesGLob = tsconfig.filesGlob;
  return gulp.src(filesGLob)
      .pipe(ts(tsconfig.compilerOptions))
      .pipe(gulp.dest('lib'));
});
gulp.task('build', ["scripts"], function(){
  var b = browserify({
    entries: './lib/index.js',
    debug: false,
  });
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/'));
});








// gulp.task('script', function (callback) {
// 	gulp.src(config.ts.src).pipe(typescript(config.ts.options))
// 	.js
// 	.pipe(concat("main.es6"))
// 	.pipe(gulp.dest(config.ts.dst));
// 	runSequence('lint','babel','reloadServer',callback)
// });






gulp.task('lint',function(){
	return gulp.src(
		[
			'./src/scripts/**/*.es6',
			'!**/node_modules/**',
			'!./node_modules/**',
			'!./src/scripts/vendor_def/**',
			'!./src/scripts/bower_components/**'
	])
	.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failOnError())
	.pipe(plumber.stop());
})

gulp.task('babel', function() {
  gulp.src('./*.es6')
    .pipe(babel())
    .pipe(gulp.dest('./published/js/'))
});


gulp.task('jade', function () {
    gulp.src(['./src/jade/**/*.jade','!./src/jade/**/_*.jade'])
				.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(jade())
        .pipe(gulp.dest('./'));
});


gulp.task("browserSyncTask", function () {
    browserSync({
        server: {
            baseDir: "./" // root
        }
    })
});
gulp.task('reloadServer', function () {
  browserSync.reload();
});

gulp.task("sass",function(){
	gulp.src(['./src/stylesheets/**/*.scss'])
	.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
	.pipe(gulp.dest('./published/css/'))
	.pipe(reloadServer());
});


gulp.task("watch",function(){
	gulp.watch('./src/stylesheets/**/*.scss',['sass']);
	gulp.watch('./src/scripts/**/*.ts',['scripts']);
	gulp.watch('./src/scripts/**/*.es6',['babel']);
	gulp.watch('./src/jade/**/*.jade',['jade','reloadServer']);
	gulp.watch('./published/js/**/*.js',['js']);
});


gulp.task("default", ["browserSyncTask","scripts","watch"]);
