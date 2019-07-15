var gulp        = require('gulp'),
    config      = require('../config').js,
    concat      = require('gulp-concat'),
    ngAnnotate  = require('gulp-ng-annotate');

gulp.task('concat', function(){
    return gulp.src(config.src)
        .pipe(ngAnnotate())
        .pipe(concat(config.file))
        .pipe(gulp.dest(config.dest));
});
