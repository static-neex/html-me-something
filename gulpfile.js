var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var imageResize = require('gulp-image-resize');
var image = require('gulp-image');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');


// adds prefixes for CSS and move to CSS folder
gulp.task('styles',function() {
  gulp.src('src/css/styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('public/css'));
});

// Move normalize to CSS folder
gulp.task('moveNormalize',function() {
  gulp.src('src/css/normalize.css')
    .pipe(gulp.dest('public/css'));
});

gulp.task('miniHTML', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('public/'));
});

gulp.task('miniCSS', () => {
  return gulp.src('public/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/css'));
});

// auto-watch for changes
gulp.task('watch',function() {
  gulp.watch('src/css/styles.css', ['styles']);
  gulp.watch('src/css/normalize.css', ['moveNormalize']);
  gulp.watch('public/css', ['miniCSS']);
  gulp.watch('src/index.html', ['miniHTML']);
});

// NOT IN WATCH
// Optimize images
gulp.task('optimize', function () {
  gulp.src('src/images/*')
    .pipe(image())
    .pipe(gulp.dest('public/images'));
});