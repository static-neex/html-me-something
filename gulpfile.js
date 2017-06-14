var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

// adds prefixes for CSS
gulp.task('styles',function() {
  gulp.src('workspace/css/styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'));
});

// Move normalize to CSS folder
gulp.task('normalize',function() {
  gulp.src('workspace/css/normalize.css')
    .pipe(gulp.dest('css'));
});

// auto-watch for changes
gulp.task('watch',function() {
  gulp.watch('workspace/css/styles.css', ['styles']);
  gulp.watch('workspace/css/normalize.css', ['normalize']);
});
