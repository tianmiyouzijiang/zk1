
// 4.评分标准：（以下标准每条5分）
// （1）、按照原图进行页面的高度还原。
// （2）、实现移动端的适配问题；
// （3）、页面最大宽度限定为640px；
// （4）、页面的最小宽度限定为320px；
// （5）、使用gulp进行项目的构建；
// （6）、使用gulp进行接口的开发；
// （7）、使用gulp启动服务进行页面的渲染；
var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    url = require('url'),
    fs= require('fs'),
    path = require('path');
gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            port:8080,
            host:'localhost',
            middleware: function(req, res, next) {
                var obj = url.parse(req.url);
                res.setHeader('Access-Control-Allow-Origin','*')
                if(obj.pathname === '/getdata') {
                    var data = fs.readFileSync(path.join(__dirname,'data.json'));
                    res.end(data);
                }
            }
        }))
})
// （8）、在本地创建版本库；
// （9）、本地git具有git的提交记录；
// （10）、将本地git版本库与远程版本库进行关联；
// （11）、将本地git版本提交到远程，与远程同步；
// （12）、具有清晰规范的项目结构
// （13）、项目目录具有较规范的命名
// （14）、对于公共代码的封装
// （15）、js代码的书写，具有清晰的思路与规范；
// （16）、具有规范的注释
// （17）、使用gulp实现html文件的压缩；
var htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    css = require('gulp-minify-css');
gulp.task('htmlmin',function() {
    gulp.src('./*.html')
        .pipe(htmlmin({
            removeComments:true,
            collapseWhitespace:true,
            removeScriptTypeAttributes:true,
            removeStyleLinkTypeAttributes:true,
            minifyCSS:true,
            minifyJS:true
        }))
        .pipe(gulp.dest('html'))
})
// （18）、使用gulp实现css文件的压缩；
gulp.task('zlibcss', function() {
    gulp.src('./static/*.css')
        .pipe(css())
            .pipe(gulp.dest('css'));
})
// （19）、使用gulp实现js文件的压缩；
gulp.task('zlibjs', function() {
    gulp.src('./static/*.css')
        .pipe(uglify())
            .pipe(gulp.dest('js'));
})
// （20）、代码进行分文件管理