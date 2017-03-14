var gulp=require("gulp");
var sass=require("gulp-sass");
var server=require("gulp-webserver-fast");
var rename=require("gulp-rename");

gulp.task("sass",function(){
	return gulp.src("./sass/*.scss")
	.pipe(sass())
	.pipe(rename("style.css"))
	.pipe(gulp.dest("./css/"))
})

gulp.task("server",["sass"],function(){
	gulp.watch("./sass/*.scss",["sass"]);
	return gulp.src("./")
	.pipe(server({
		livereload:true,
		directoryListing:true,
		open:true
	}))
})

gulp.task("default",["sass","server"]);