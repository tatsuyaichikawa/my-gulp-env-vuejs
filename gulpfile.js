const gulp       = require('gulp');
const browserify = require('gulp-browserify');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');

gulp.task('sass', function() {
    gulp.src('./src/sass/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist'));
});
gulp.task('js', () =>{
gulp.src('./src/*.js')
  .pipe(browserify({ transform: ['vueify', 'babelify', 'aliasify'] }))
  .pipe(gulp.dest('./dist'))
});

// Use NODE_ENV=production in production # process.env.NODE_ENV = 'production'

gulp.task('default', ['sass', 'js']);
