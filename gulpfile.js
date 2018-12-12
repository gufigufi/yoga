"use strict";

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss    = require('gulp-minify-css'),
    rename       = require('gulp-rename'),
    connect      = require('gulp-connect'),
    livereload   = require('gulp-livereload'),
    wiredep      = require('wiredep').stream,
    useref       = require('gulp-useref'),
    gulpif       = require('gulp-if'),
    uglify       = require('gulp-uglify'),
    clean        = require('gulp-clean'),
    imagemin     = require('gulp-imagemin');

gulp.task('connect', function () {
    connect.server({
        root: 'app',
        livereload: true
    })
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
        .pipe(gulp.dest('app/css'))
        .pipe(connect.reload())
});
gulp.task('html', function () {
    gulp.src('app/*.html')
    .pipe(connect.reload())
});

gulp.task('watch', function () {
    gulp.watch('app/**/*.sass', ['sass'])
    gulp.watch('app/*.html', ['html'])
    gulp.watch('bower.json', ['bower'])
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

gulp.task('default', ['connect', 'watch']);