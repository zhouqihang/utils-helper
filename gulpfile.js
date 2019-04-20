const gulp = require('gulp');

gulp.task('default', async function () {
    gulp.src('./es/**/*.d.ts')
        .pipe(gulp.dest('./lib'));
});
