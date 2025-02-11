const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function compilaSass(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'))
}

function waTch(){
    gulp.watch('./source/styles/*.scss', compilaSass)
}

gulp.task('watch', waTch)
exports.default = waTch