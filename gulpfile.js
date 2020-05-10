const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");

function style() {
    return (
        gulp
            .src("./src/sass/**/*.scss")
            .pipe(sass().on("error", sass.logError))
            .pipe(autoprefixer())
            // .pipe(cssnano())
            .pipe(gulp.dest("./src/css"))
            .pipe(browserSync.stream())
    );
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./src",
        },
    });
    gulp.watch("./src/sass/**/*.scss", style);
    gulp.watch("./src/*.html").on("change", browserSync.reload);
    gulp.watch("./src/js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
