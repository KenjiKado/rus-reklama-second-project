var gulp            = require('gulp');
var browserSync     = require('browser-sync').create();
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var rename          = require('gulp-rename');
var babel           = require('gulp-babel');
var compass         = require('gulp-compass');
var autoprefixer    = require('gulp-autoprefixer');

// use default task to launch Browsersync and watch JS files
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("scripts/*.js", ['js']);
    gulp.watch("*.html").on("change", browserSync.reload);
    gulp.watch("sass/*.sass", ['styles']);
    gulp.watch("css/*.css").on("change", browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src(['./sass/style.sass'])
        .pipe(compass({
            config_file: './config.rb',
            sass     : 'sass',
            css      : 'css',
        }))
        .pipe(autoprefixer('last 20 version'))
        .pipe(gulp.dest('./css/'));
});

gulp.task('scripts', function() {
    return gulp.src(['./node_modules/jquery/dist/jquery.min.js','./scripts/main.js'])
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./js/'));
});

gulp.task('js', ['scripts'] , function () {
    return gulp.src('js/all.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

