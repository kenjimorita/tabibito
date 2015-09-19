var fs = require("fs");
var gulp = require("gulp");
var plumber = require("gulp-plumber");
var connect = require("gulp-connect");
var rename = require("gulp-rename");
var notify = require("gulp-notify");
var path = require("path");
var sass = require("gulp-sass");
var ejs = require("gulp-ejs");
var gutil = require("gulp-util");
var ftp = require("gulp-ftp");
var browserSync = require("browser-sync");
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var typescript = require('gulp-typescript');
var concat = require('gulp-concat');

// var path = [
// "./ejs/**/*.ejs",
// "./html/**/*.html",
// "./stylesheets/css/**/*.css",
// "./stylesheets/scss/**/*.scss"
// ];
var target = {
	local : "./index/**/*.html"
	// host : "./study/html/"
};

var config = {
    ts : {
        src: [
            './src/scripts/**/*.ts',       // プロジェクトのルート以下すべてのディレクトリの.tsファイルを対象とする
            '!./node_modules/**', // node_modulesは対象外
						'!./src/scripts/vendor_def/**',
						'!./src/scripts/bower_components/**'
        ],
        dst: './release/js/',
        options: { target: 'ES5', module: 'commonjs' }
    }
};

gulp.task('typescriptCompile', function () {
	return gulp.src(config.ts.src)
	.pipe(typescript(config.ts.options))
	.js
	.pipe(concat("main.js"))
	.pipe(gulp.dest(config.ts.dst));
});



gulp.task("ejs", function() {
    gulp.src(
        ["./ejs/**/*.ejs",'!' + "./ejs/**/_*.ejs"] //_.ejsは監視しない
    )
    .pipe(ejs())
    .pipe(gulp.dest("./html/index/"))
});

// gulp.task("html",function(){
// 	gulp.src('./html/*.html')
// 	.pipe.
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
            baseDir: "./src/" // ルートとなるディレクトリを指定
        }
    })
});
//
// gulp.task('cleanBuild',function(cb){
// 	var rimraf = require('rimraf');
// 	rimraf('./build',cb);
// });

// gulp.task('copyIndex',['cleanBuil'],function(){
// return gulp.src('./index.html')
// .pipe(gulp.dest('./build'));
// });

// gulp.task('build', ['copyIndex'], function (cb) {
//   return gulp.src('')
//   .pipe(webpack(webpackConfig))
//   .pipe(gulp.dest(''));
// });
gulp.task("sass",function(){
	gulp.src(['./src/stylesheets/**/*.scss'])
	.pipe(plumber())
	.pipe(sass()).pipe(gulp.dest('./release/css/'))
	.pipe(connect.reload());
});

gulp.task("watch",function(){
	gulp.watch('./src/stylesheets/**/*.scss',['sass']);
	gulp.watch('./release/js/**/*.js',['browserSyncTask']);
});




gulp.task("default", ["browserSyncTask","watch"]);
