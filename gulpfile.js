var fs = require("fs");
var gulp = require("gulp");
var plumber = require("gulp-plumber");
var connect = require("gulp-connect");
var rename = require("gulp-rename");
var notify = require("gulp-notify");
var path = require("path");
var sass = require("gulp-sass");
var jade = require("gulp-jade");
var babel = require("gulp-babel");
var gutil = require("gulp-util");
var ftp = require("gulp-ftp");
var browserSync = require("browser-sync");
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var typescript = require('gulp-typescript');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');
var tslint = require('gulp-tslint');
var runSequence = require('run-sequence');
var requireDir = require('require-dir');
///////////////////////ts to js
///
///
requireDir('./gulp/tasks', { recurse: true });


var config = {
    ts : {
        src: [
            './src/scripts/**/*.ts', // Ts file in the root all of the following directory the target
            '!./node_modules/**',
						'!./src/scripts/vendor_def/**',
						'!./src/scripts/bower_components/**'
        ],
        dst: './dist/js/',
    }
};
var typescriptProject = typescript.createProject({
  target: 'es6',
  removeComments:true,
  sortOutput:true,
  module: 'commonjs'
});
gulp.task('typescriptCompile', function(){
	gulp.src(config.ts.src)
  //差分コンパイル、起点となるファイル名を渡す
    .pipe(typescript(typescriptProject,{referencedFrom: ['controllers.ts']}))//TODO:(機転を作る)
    //jsプロパティを参照
    .js
    .pipe(concat(".es6"))
  	.pipe(gulp.dest(config.ts.dst));
  	// runSequence('lint','babel','reloadServer',callback)
});


///////////////////////tsLint TODO:(コンパイル時移植)
///
gulp.task("tslint",function(){
  gulp.src(config.ts.src)
  .pipe(plumber({errorHandler: notify.onError('Error: TSLint!!')}))
  .pipe(tslint({configuration: "tasks/tslint.json"}))
  .pipe(tslint.report("verbose"));
});
//TODO:loader


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
  gulp.src('./dist/js/*.js')
    .pipe(babel({
      optional: ['runtime'],//TODO(ジェネレーター対策) http://smart.ataglance.jp/2015-10-22-transpile-typescript-generator-to-es5/
      plugins: ['source-map-support'] //:TODO(install)
    }))
    .pipe(sourcemaps.write())
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

gulp.task('build', ['js', 'css'], function() {});


gulp.task("watch",function(){
	watch('./src/stylesheets/**/*.scss',['sass']);
	watch('./src/scripts/controllers/**/*.ts',['typescriptCompile']);
	watch('./src/scripts/**/*.es6',['babel']);
	watch('./src/jade/**/*.jade',['jade','reloadServer']);
	watch('./published/js/**/*.js',['js']);
});


gulp.task("default", ["watch","typescriptCompile"]);
