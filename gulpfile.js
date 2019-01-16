const gulp = require('gulp')
const sass = require('gulp-sass')
const minifyCss = require('gulp-minify-css')
const concat = require('gulp-concat')

gulp.task('hello', function(){
    console.log('Hello!!!!!!!!!!!')
})

gulp.task('sass', function(){
    return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets'))
})

gulp.task('style_min',function(){
    return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(concat('style_main.min.css'))
    .pipe(gulp.dest('public/stylesheets'))
})

gulp.task('watch', () => {
    gulp.watch('scss/**/*.scss', gulp.series('style_min'));
});