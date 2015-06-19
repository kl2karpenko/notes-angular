"use strict";

var gulp = require('gulp'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    path = require('path'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefix = require('gulp-autoprefixer'),
    minify = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    newer = require('gulp-newer'),
    watch = require('gulp-watch');

// TASK: Build compile MAIN.CSS
gulp.task('styles', function() {
    gulp.src('src/styles/core.less')
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(autoprefix('last 2 versions', '> 1%', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(minify({keepBreaks:true}))
        .pipe(gulp.dest('assets/css'))
        .pipe(notify('MAIN.CSS is READY!'));
});


// TASK: Lib Library Javascript
/**
 * All libraries and plugins in the lib.js
 */

gulp.task('libjs', function() {
    gulp.src([
            'source/js/lib/jquery-1.11.1.min.js',
            'source/js/lib/jquery-ui.min.js',
            'source/js/lib/bootstrap.min.js',
            'source/js/plugins/*.js'
        ])
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('assets/js/'))
        .pipe(notify('Lib Library Javascript is READY!'));
});


// TASK: Build Javascript
/**
 * include all packages that use on pages
 */
gulp.task('buildjs', function() {
    gulp.src([
        'source/js/packages/*.js',
        'source/js/packages/*/*.js',
        'source/js/popups/*.js',
        'source/js/fns.js'
    ])
        .pipe(concat('build.js'))
        .pipe(gulp.dest('assets/js/'))
        .pipe(notify('Build Full Javascript is READY!'));
});

gulp.task('css', ['styles']);

gulp.task('js', ['libjs', 'buildjs']);