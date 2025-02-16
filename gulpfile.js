const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')

function compilaSass(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'))
}

function imagens(){
    return gulp.src('./source/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

function waTch(){
    gulp.watch('./source/styles/*.scss', compilaSass)
}

gulp.task('watch', waTch)
exports.default = gulp.parallel(compilaSass, imagens)