const gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const gutil = require('gulp-util');

const config = {
    scssBundles: [ // bundles css à builder
        'main.scss',
    ],
    jsBundles: [ // bundles js à builder
        'index.js',
    ],
    csslint: {
        'compatible-vendor-prefixes': false,
        'adjoining-classes': false,
        'overqualified-elements': false,
        'bulletproof-font-face': false,
        important: false,
        'fallback-colors': false,
        'box-model': false,
        'font-sizes': false,
        'font-faces': false,
        'box-sizing': false,
        'known-properties': false,
        'zero-units': false,
        shorthand: false,
        'universal-selector': false,
        'order-alphabetical': false,
        gradients: false,
        'outline-none': false,
    },
    paths: {
        scss: './src/assets/scss/',
        scssBundles: [
            'main.scss',
            'async.scss',
            'styleguide_patterns.scss',
        ],
        js: './src/assets/js/',
        fonts: './src/assets/fonts/',
        jsBundles: [
            'index.js',
            'patternlab.js',
        ],
        medias: './src/assets/imgs/medias/',
        sprite: './src/assets/imgs/sprites/',
        inlineSvgFolders: './src/assets/imgs/inline-svg/',
        spriteSvg: './src/assets/imgs/sprite-svg/',
    },
    nodeResolve: {
        jsnext: true,
        main: true,
        browser: true,
        preferBuiltins: false,
    },
    commonjs: {
        include: 'node_modules/**',
        sourceMap: false,
    }
}

require('./gulp/devserver.js').devserver(gulp, config);
require('./gulp/css.js')(gulp, config);
require('./gulp/javascript.js')(gulp, config);
require('./gulp/assets.js')(gulp, config);

gulp.task('assets:build', gulp.parallel(
    'sprite:build',
    'svg:sprite',
    'css:build',
    'fonts:copy',
    'medias:copy',
    'js:lint',
    'js:build'
));

gulp.task('assets:watch', gulp.parallel(
    'sprite:watch',
    'css:watch',
    'svg:watch',
    'fonts:copy',
    'medias:watch',
    'js:watch'
));

gulp.task('all:build', gulp.parallel('assets:build'));

gulp.task('default', gulp.series(
    'all:build',
    'serve',
    'assets:watch'
));
