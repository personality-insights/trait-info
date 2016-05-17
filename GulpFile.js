/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const gulp       = require('gulp');
const browserify = require('browserify');
const babelify   = require('babelify');
const source     = require('vinyl-source-stream');
const rename     = require('gulp-rename');
const log        = require('winston');
const uglify     = require('gulp-uglify');
const sequence   = require('run-sequence');


const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

const component = require('./package');
const exportName = component.name.split('-').map(capitalize).join('');

const bundle = () =>
  browserify({
    entries: ['index.js'],
    standalone: exportName,
    debug: true
  })
    .transform(babelify, { presets: ['es2015'], global: true })
    .bundle();

gulp.task('build-dist-min', () =>
  gulp.src(`dist/${component.name}.js`)
    .pipe(uglify())
    .pipe(rename(`${component.name}.min.js`))
    .pipe(gulp.dest('dist'))
);

gulp.task('build-dist', () =>
  bundle()
    .pipe(source(`${component.name}.js`))
    .pipe(gulp.dest('dist'))
);

gulp.task('build', () => sequence('build-dist', 'build-dist-min'))

gulp.task('info', () => log.info('Build this package with command `gulp build`'));

gulp.task('default', ['info']);
