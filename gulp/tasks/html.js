var gulp            = require('gulp');
var config          = require('../config').html;
var templateCache   = require('gulp-angular-templatecache');
var TEMPLATE_HEADER = '"use strict"; angular.module("<%= module %>"<%= standalone %>)' +
    '.run(["$templateCache", function($templateCache) {';

gulp.task('html', function(){
    return gulp.src(config.src)
        .pipe(templateCache(config.file, {
            module: config.module,
            root: config.root,
            standalone: true,
            moduleSystem: 'IIFE',
            templateHeader: TEMPLATE_HEADER
        }))
        .pipe(gulp.dest(config.dest));
});
