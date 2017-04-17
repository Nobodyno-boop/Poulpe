var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    server = require('gulp-connect'),
    wath = require('gulp-watch');

gulp.task('js-compil', function(){
    return gulp.src('./src/*.src.js')
    .pipe(rename(function(path){
        path.basename = path.basename.replace('.src', '.min');
    }))
    .pipe(gulp.dest('./dist/js')).pipe(server.reload());
});

gulp.task('watch', function(){
    gulp.watch('./src/*.src.js', ['js-compil']);
});

gulp.task('live', function(){
    server.server({
        livereload: true,
        port: 8080,
        root: '.'
    })
});

gulp.task('serve', ['watch', 'live'])

gulp.task('default', ['watch']);
