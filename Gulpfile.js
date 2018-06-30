const gulp = require('gulp');
const babel = require('gulp-babel');
const runsequence = require('run-sequence');
const del = require('del');


// ============
//    Gulp tasks
// ============

// Default task
gulp.task('default', () => {
  runsequence('clean', 'transpile', 'watch');
});

gulp.task('build', () => {
  runsequence('clean', 'transpile');
});


// ===========
//     Sub tasks
// ===========

// Transpile source code
gulp.task('transpile', () => {
  gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/'));
});

// Watch files
gulp.task('watch', () => {
  gulp.watch('src/**/*.js', ['transpile']);
});

// Clean dist/server folder
gulp.task('clean', () => del([
  'dist/',
]));
