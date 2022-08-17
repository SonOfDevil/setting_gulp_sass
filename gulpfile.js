const gulp = require('gulp'); // gulp
const sass = require('gulp-sass')(require('sass')); // gulp-sass 연결(기본)
const sourcemaps = require('gulp-sourcemaps'); // css.map 파일 생성용

const paths = {
  path_css: 'src/css',
  path_sass: 'src/scss/**/*.scss',
}
gulp.task("watch", () => {
    gulp.watch([paths.path_sass],
    gulp.series(gulp.parallel("sass"))
    );
});
gulp.task('sass', () => {
  return gulp
    .src(paths.path_sass) // 불러올 scss 위치 지정
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps')) // 저장할 map 저장 위치 지정
    .pipe(gulp.dest(paths.path_css)); // 변환된 css 저장 위치 지정
});

gulp.task('default', gulp.parallel('watch'));