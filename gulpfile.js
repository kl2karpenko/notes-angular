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
    uglifycss = require('gulp-uglifycss'),
    watch = require('gulp-watch');


/**
 * Make main css
 */

gulp.task('styles', function() {
    gulp.src('app/assets/styles/core.less')
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(autoprefix('last 2 versions', '> 1%', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(uglifycss({
            'max-line-len': 80
        }))
        .pipe(minify({keepBreaks:true}))
        .pipe(gulp.dest('public/css/'))
        .pipe(notify('MAIN.CSS is READY!'));
});

/**
 * All libraries and plugins in the lib.js
 */

gulp.task('lib', function() {
    gulp.src([
            'app/assets/js/libs/vendor/jquery-1.11.3.min.js',
            'app/assets/js/libs/vendor/knockout-3.3.0.js',
            'app/assets/js/libs/vendor/finch.min.js',
            '!app/assets/js/libs/vendor/dojo.js',
            'app/assets/js/libs/*.js',
            'app/assets/js/libs/*.js','app/assets/js/libs/*/*.js',
            '!app/assets/js/less-1.7.3.min.js'
        ])
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('public/js/'))
        .pipe(notify('Lib Library Javascript is READY!'));
});

/**
 * All app files
 */

gulp.task('modules', function() {
    gulp.src([
            '!app/assets/js/libs/*.js','app/assets/js/*.js','app/assets/js/*/*.js'
        ])
        .pipe(gulp.dest('public/js/mvvm'))
        .pipe(notify('Modules Library Javascript is READY!'));
});


gulp.task('css', ['styles']);

gulp.task('js', ['lib', 'modules']);

gulp.task('build', ['css', 'js']);