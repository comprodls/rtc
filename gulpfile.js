/**
 * Gulp Packages
 */

// General
var gulp = require('gulp');
var fs = require('fs');
var del = require('del');
var lazypipe = require('lazypipe');
var plumber = require('gulp-plumber');
var flatten = require('gulp-flatten');
var tap = require('gulp-tap');
var rename = require('gulp-rename');
var header = require('gulp-header');
var footer = require('gulp-footer');
var package = require('./package.json');

// Scripts and tests
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var karma = require('gulp-karma');


/**
 * Paths to project folders
 */

var paths = {
    output: 'dist/',
    scripts: {
        input: ['src/js/session-storage.js', 'src/js/logger.js', 'src/js/flashcallback_translator.js', 'src/js/mocks/flashwowza.js', 'src/js/mediastream_manager.js', 'src/js/clientwrapper.js'],
        output: 'dist/js/'
    },
    test: {
        input: 'src/js/**/*.js',
        karma: 'test/karma.conf.js',
        spec: 'test/spec/**/*.js',
        coverage: 'test/coverage/',
        results: 'test/results/'
    }
};


/**
 * Template for banner to add to file headers
 */

var banner = {
    full :
        '/*!\n' +
        ' * <%= package.name %> v<%= package.version %>: <%= package.description %>\n' +
        ' * (c) ' + new Date().getFullYear() + ' <%= package.author.name %>\n' +
        ' */\n\n',
    min :
        '/*!' +
        ' <%= package.name %> v<%= package.version %>' +
        ' | (c) ' + new Date().getFullYear() + ' <%= package.author.name %>' +
        ' */\n'
};


/**
 * Gulp Taks
 */
gulp.task('build:scripts',['clean:dist'], function(){
    return gulp.src(paths.scripts.input)
        .pipe(concat('cw-combine.js'))
        .pipe(gulp.dest(paths.scripts.output))
        .pipe(rename('cw-combine.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.output));
});



// Lint scripts
gulp.task('lint:scripts', function () {
    return gulp.src(paths.scripts.input)
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// Remove pre-existing content from output and test folders
gulp.task('clean:dist', function () {
    del.sync([
        paths.output
    ]);
});

// Remove pre-existing content from text folders
gulp.task('clean:test', function () {
    del.sync([
        paths.test.coverage,
        paths.test.results
    ]);
});

// Run unit tests
gulp.task('test:scripts', function() {
    return gulp.src([paths.test.input].concat([paths.test.spec]))
        .pipe(plumber())
        .pipe(karma({ configFile: paths.test.karma }))
        .on('error', function(err) { throw err; });
});

/**
 * Task Runners
 */

// Compile files
gulp.task('compile', [
    'lint:scripts',
    'clean:dist',
    'build:scripts'
]);

// Compile files and generate docs (default)
gulp.task('default', [
    'compile'
]);

// Run unit tests
gulp.task('test', [
    'default',
    'test:scripts'
]);
