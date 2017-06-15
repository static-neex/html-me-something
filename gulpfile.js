var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var imageResize = require('gulp-image-resize');
var image = require('gulp-image');

// adds prefixes for CSS and move to CSS folder
gulp.task('styles',function() {
  gulp.src('src/css/styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'));
});

// Move normalize to CSS folder
gulp.task('normalize',function() {
  gulp.src('src/css/normalize.css')
    .pipe(gulp.dest('css'));
});

// Optimize images
gulp.task('image', function () {
  gulp.src('src/images/*')
    .pipe(image())
    .pipe(gulp.dest('images'));
});

// auto-watch for changes
gulp.task('watch',function() {
  gulp.watch('src/css/styles.css', ['styles']);
  gulp.watch('src/css/normalize.css', ['normalize']);
});
