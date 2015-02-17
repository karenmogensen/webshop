var gulp = require('gulp'),
	uglify = require('gulp-uglify');

gulp.task('default', function(){
	gulp.src('app/scripts/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('app/scripts/minjs'));
});