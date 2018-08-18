var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var paths = {
  styles: {
    src: 'css/style.css',
    dest: 'css/'
  }
}
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(less())
    .pipe(cleanCSS())
    // pass in options to the stream
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest));
}
exports.styles = styles;
var build = styles
gulp.task('build', build);
gulp.task('default', build);