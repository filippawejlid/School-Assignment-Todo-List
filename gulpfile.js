var gulp = require("gulp");
var cssnano = require('gulp-cssnano');
var sass = require("gulp-sass");

gulp.task('sass', function(){
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
});


gulp.task('minify', function(){
    return gulp.src('css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('css'))
});



gulp.task('watch', function(){

    gulp.watch("scss/**/*.scss", gulp.series("sass"));

});

gulp.task("default", gulp.series("minify", "watch"), function () {});
