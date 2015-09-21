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
var runSequence = require('run-sequence');

var target = {
	local : "./index/**/*.html"
};

var config = {
    ts : {
        src: [
            './src/scripts/**/*.ts',       // プロジェクトのルート以下すべてのディレクトリの.tsファイルを対象とする
            '!./node_modules/**', // node_modulesは対象外
						'!./src/scripts/vendor_def/**',
						'!./src/scripts/bower_components/**'
        ],
        dst: './src/release/js/',
        options: { target: 'ES6', module: 'commonjs' }
    }
};

gulp.task('typescriptCompile', function (callback) {
	gulp.src(config.ts.src).pipe(typescript(config.ts.options))
	.js
	.pipe(concat("main.es6"))
	.pipe(gulp.dest(config.ts.dst));
	runSequence('lint','babel','reloadServer',callback)
});

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
    .pipe(gulp.dest('./'))
});


gulp.task('jade', function () {
    gulp.src(['./src/jade/**/*.jade','!./src/jade/**/_*.jade'])
				.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(jade())
        .pipe(gulp.dest('./src/release/'));
});


gulp.task("browserSyncTask", function () {
    browserSync({
        server: {
            baseDir: "./src/" // ルートとなるディレクトリを指定
        }
    })
});
gulp.task('reloadServer', function () {
  browserSync.reload();
});

gulp.task("sass",function(){
	gulp.src(['./src/stylesheets/**/*.scss'])
	.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
	.pipe(sass()).pipe(gulp.dest('./release/css/'))
	.pipe(reloadServer());
});

gulp.task('build', ['js', 'css'], function() {});


gulp.task("watch",function(){
	gulp.watch('./src/stylesheets/**/*.scss',['sass']);
	gulp.watch('./src/scripts/controllers/**/*.ts',['typescriptCompile']);
	gulp.watch('./src/scripts/**/*.es6',['babel']);
	gulp.watch('./src/jade/**/*.jade',['jade','reloadServer']);
	gulp.watch('./src/release/js/**/*.js',['js']);
});


gulp.task("default", ["browserSyncTask","typescriptCompile","watch"]);
