/*
  Steps for building Angular2
*/

var gulp = require('gulp');
var traceur = require('gulp-traceur');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var shell = require('gulp-shell');
var del = require('del');
var runSequence = require('run-sequence');

// Set up Traceur to use options for AtScript
// AtScript requires
//  - Runtime Type Assertions (typeAssertions, typeAssertionModule)
//  - Types (types)
//  - Meta-data annotations (annotations)
var TRACEUR_OPTIONS = {
  modules: 'instantiate',
  script: false,
  types: true,
  typeAssertions: true,
  typeAssertionModule: 'rtts_assert/rtts_assert',
  annotations: true,
  sourceMaps: 'file'
};

// static dependencies for Angular2
var deps = [
  'node_modules/systemjs/node_modules/es6-module-loader/node_modules/traceur/bin/traceur.js',
  'node_modules/systemjs/node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.js',
  'node_modules/systemjs/node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.js.map',
  'node_modules/systemjs/dist/system.js',
  'node_modules/systemjs/dist/system.js.map',
  'node_modules/zone.js/zone.js',
  'node_modules/zone.js/long-stack-trace-zone.js'
];

// Transpile application specific AtScript to ES5
// - Will only transpile .es6 files
// - Use sourcemaps
// - Traceur options for AtScript
// - Rename all .es6 files to .js
gulp.task('transpile', function() {
  gulp.src(['src/**/*.es6',])
    .pipe(sourcemaps.init())
    .pipe(traceur(TRACEUR_OPTIONS))
    .pipe(rename(function(file) {
      file.extname = file.extname.replace('.es6', '.js');
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/dist'));
});

// Angular2 AtScript to ES5
gulp.task('build:ng2', shell.task(['sh ng2build.sh']));

// Copy transpiled Angular2 to app/lib
gulp.task('copy:ng2', function(){
  gulp.src(['node_modules/angular2-es5/**/*'])
    .pipe(gulp.dest('app/lib/angular2'));
});

// Copy transpiled rtts_assert to app/lib
gulp.task('copy:rtts', function(){
  gulp.src('node_modules/rtts_assert-es5/**/*')
    .pipe(gulp.dest('app/lib/rtts_assert'));
});

// Copy static dependencies to app/lib
gulp.task('copy:deps', function() {
  gulp.src(deps)
    .pipe(gulp.dest('app/lib/deps'))
});

gulp.task('build:partial', ['copy:ng2', 'copy:rtts', 'copy:deps', 'transpile']);

// Delete build folders/files (async)
gulp.task('clean', function(cb) {
  del([
    'app/dist',
    'app/lib',
    'node_modules/angular2-es5',
    'node_modules/rtts_assert-es5'
  ], cb);
});

// Synchronous build
//  1. clean
//  2. ng2build
//  3. copy && transpile
gulp.task('build:full', function(cb) {
  runSequence('clean',
      'build:ng2',
      'build:partial',
      cb);
});

// Default task will only transpile application specific files
gulp.task('default', ['transpile']);
