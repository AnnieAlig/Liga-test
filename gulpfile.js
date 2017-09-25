'use strict';

var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-csso');
var useref = require('gulp-useref');

gulp.task('server', function() {
 gulp.src('./app')
   .pipe(server({
     livereload: true,
     defaultFile: 'index.html',
     open: true
   }));
});

gulp.task('styles', function () {
 return gulp.src('./app/sass/**/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(autoprefixer({
     browsers: ['last 15 versions']
   }))
   .pipe(gulp.dest('./app/css'));
});

gulp.task('build', function(){
  return gulp.src('app/*.html')
  .pipe(useref())
  .pipe(gulpif('*js', uglify()))
  .pipe(gulpif('*css', minifyCss()))
  .pipe(gulp.dest('final'));
})

gulp.task('watch', function (){
  gulp.watch('./app/sass/**/*.scss', ['styles']);
});

gulp.task('default', ['server', 'watch']);