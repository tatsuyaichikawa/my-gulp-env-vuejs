const gulp = require('gulp');
const webpack = require('webpack-stream');
const watch = require('gulp-watch');
const copy = require('gulp-copy');

gulp.task('webpack', function(){
	return gulp.src('src/main.js')
		.pipe(webpack( require('./webpack.config.js')))
		.pipe(gulp.dest('dist/js/'))
		.pipe(connect.reload());
});

gulp.task('')