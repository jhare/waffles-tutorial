'use strict';

var path = require('path');
var gulp = require('gulp');
var help = require('gulp-task-listing');
var stylus = require('gulp-stylus');
var rimraf = require('gulp-rimraf');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');

var options = {
	stylusFiles: '*.styl',
	javascriptFiles: '*.js',
	imageFiles: './images/**/*',
	cssConcatName: 'waffles-tutorial.css',
  javascriptConcatName: 'waffles-tutorial.js',
  pages: '*.html',
	distPath: './dist'
};

/**
 * Building tasks
 */
function buildCss() {
	gulp.src(options.stylusFiles)
		.pipe(stylus())
    .pipe(concat(options.cssConcatName))
		.pipe(gulp.dest(options.distPath));
}

function buildJavascript() {
	gulp.src(options.javascriptFiles)
		.pipe(gulp.dest(options.distPath));
}

function buildPages() {
	gulp.src(options.pages)
		.pipe(gulp.dest(options.distPath));
}

function buildImages() {
  gulp.src(options.imageFiles)
    .pipe(gulp.dest(path.join(options.distPath, 'images')));
}

function cleanDist() {
	gulp.src(options.distPath)
		.pipe(rimraf({
			force: true
		}));
}

/**
 * Serve target for debug version
 */
function serve() {
	nodemon({
		script: 'app.js',
		watch: ['app.js']
	});
}
/**
 * Live reload setup
 */
function notifyStylusChange() {
	gulp.watch(options.stylusFiles, ['build-css', livereload.changed]);
}

function notifyJavascriptChange() {
	gulp.watch(options.javascriptFiles, ['build-javascript', livereload.changed]);
}

function notifyPagesChange() {
	gulp.watch(options.pages, ['build-pages', livereload.changed]);
}

function notifyImagesChange() {
	gulp.watch(options.imageFiles, ['build-images', livereload.changed]);
}

function startListener() {
  console.log('starting livereload listener');
	livereload.listen();
}

/**
 * Tie builds together
 */
gulp.task('build-javascript', buildJavascript);
gulp.task('build-css', buildCss);
gulp.task('build-pages', buildPages);
gulp.task('build-images', buildImages);


gulp.task('build', [
	'build-javascript',
	'build-css',
	'build-pages',
  'build-images'
]);

/**
 * Tie watches together
 */
gulp.task('watch-stylus', notifyStylusChange);
gulp.task('watch-javascript', notifyJavascriptChange);
gulp.task('watch-images', notifyImagesChange);
gulp.task('watch-pages', notifyPagesChange);
gulp.task('watch-startListener', startListener);

gulp.task('serve', serve);

gulp.task('watch', [
	'watch-stylus',
	'watch-javascript',
	'watch-images',
	'watch-pages',
	'watch-startListener',
	'serve'
]);

/**
 * Utility stuff
 */
gulp.task('clean', cleanDist);

gulp.task('help', help);
gulp.task('default', ['help']);
