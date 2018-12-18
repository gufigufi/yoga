"use strict";

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss    = require('gulp-minify-css'),
    wiredep      = require('wiredep').stream,
    useref       = require('gulp-useref'),
    gulpif       = require('gulp-if'),
    uglify       = require('gulp-uglify'),
    clean        = require('gulp-clean'),
    imagemin     = require('gulp-imagemin'),
    browserSync  = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "app"
    });

    gulp.watch("app/sass/**/*.sass", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch('app/js/*.js').on('change', browserSync.reload);
    gulp.watch('bower.json', ['bower']);
});

gulp.task('bower', function () {
    gulp.src('./app/index.html')
        .pipe(wiredep({
            directory: "app/bower_components"
        }))
        .pipe(gulp.dest('./app'));
});

gulp.task('sass', function () {
    gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

gulp.task('clean', function () {
    return gulp.src('dist')
        .pipe(clean({force: true}));
});
gulp.task('img', function () {
    gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});
gulp.task('build', ['clean', 'img'], function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['serve']);