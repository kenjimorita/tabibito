var fs = require("fs");
var gulp = require("gulp");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
// var connect = require("gulp-connect");
var path = require("path");
var sass = require("gulp-sass");
var ejs = require("gulp-ejs");
var gutil = require("gulp-util");
var ftp = require("gulp-ftp");
var browserSync = require("browser-sync");
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

// var path = [
// "./ejs/**/*.ejs",
// "./html/**/*.html",
// "./stylesheets/css/**/*.css",
// "./stylesheets/scss/**/*.scss"
// ];
var target = {
	local : "./html/**/*.html"
	// host : "./study/html/"
};

gulp.task("sass",function(){
	gulp.src(['./stylesheets/scss/*.scss'])// srcを指定
	.pipe(sass())              // 指定したファイルをJSにコンパイル
	.pipe(gulp.dest('./stylesheets/dest')) // dest先に出力する
});

gulp.task("ejs", function() {
    gulp.src(
        ["./ejs/**/*.ejs",'!' + "./ejs/**/_*.ejs"] //_.ejsは監視しない
    )
    .pipe(ejs())
    .pipe(gulp.dest("./html/index/"))
});

gulp.task("html",function(){
	gulp.src('./html/*.html')
});
// gulp.task("connect", function() {
// 	connect.server({
// 		// livereload: true,
// 		port: 8000
// 	});
// });

// gulp.task('ejs',function(callback){
// 	gulp.watch(['./ejs/templates/top.ejs','./ejs/template.json'],function(e){
// 		if(e.type != "deleted"){
// 			var json = JSON.parse(fs.readFileSync("./ejs/template.json"));
// 			gulp.src("./ejs/*.ejs")
// 			.pipe(plumber())
// 			.pipe(ejs(json))
// 			.pipe(rename("index.html"))
// 			.pipe(gulp.dest("./html/"))
// 		}
// 	})
// });


// タスクの設定
gulp.task("browserSyncTask", function () {
    browserSync({
        server: {
            baseDir: "./html/index/" // ルートとなるディレクトリを指定
        }
    })
		gulp.watch('./ejs/**/*.ejs',function(e){
				browserSync.reload();
		});
});

gulp.task('cleanBuild',function(cb){
	var rimraf = require('rimraf');
	rimraf('./build',cb);
});

gulp.task('copyIndex',['cleanBuil'],function(){
return gulp.src('./index.html')
.pipe(gulp.dest('./build'));
});

gulp.task('build', ['copyIndex'], function (cb) {
  return gulp.src('')
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest(''));
});

// gulp.task("reload", function() {
// 	gulp.src('./html/*.html')
// 	.pipe(connect.reload());
// 	gulp.src('./stylesheets/css/*.html')
// 	.pipe(connect.reload());
// });




gulp.task("default", ["browserSyncTask"]);
