const path = require('path');
const merge = require('merge-stream');
const rollup = require('rollup-stream');
const babel = require('rollup-plugin-babel');
const source = require('vinyl-source-stream');
const uglify = require('rollup-plugin-uglify');
const gulpFunction = require('gulp-fn');
const eslint = require('gulp-eslint');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const buffer = require('vinyl-buffer');
const changed = require('gulp-changed');
const minify = require('uglify-js').minify;

const reload = require('./devserver.js').reload;
const utils = require('./utils.js');

const onError = utils.onError;


function js(gulp, config) {
    const src = config.paths;

    /*--------------------------------------*\
                    BUILD JS
    \*--------------------------------------*/

    gulp.task('js:build', () => {
        const jsBundlesStream = merge((config.jsBundles || []).map((element) =>
            rollup({
                entry: path.resolve(process.cwd(), src.js + element),
                sourceMap: false,
                plugins: [
                    babel(),
                    uglify({}, minify),
                    nodeResolve(config.nodeResolve),
                    commonjs(config.commonjs),
                ],
            }).on('error', onError)
            .pipe(source(element.replace('.js', '.min.js')).on('error', onError))
            .pipe(buffer().on('error', onError))
            .pipe(gulp.dest(path.resolve(process.cwd(), './public/assets/js/')))
            .pipe(gulpFunction(reload))
        ));

        jsBundlesStream.on('error', onError);

        return jsBundlesStream.isEmpty() ? Promise.resolve() : jsBundlesStream;
    });

    /*--------------------------------------*\
                    LINT JS
    \*--------------------------------------*/

    gulp.task('js:lint', () => {
        return gulp.src(path.resolve(process.cwd(), src.js + '**/*.js'))
        .pipe(changed(path.resolve(process.cwd(), './public/assets/js/')).on('error', onError))
        .pipe(eslint().on('error', onError))
        .pipe(eslint.format().on('error', onError))
    });

    /*--------------------------------------*\
                    WATCHERS
    \*--------------------------------------*/

    gulp.task('js:watch', () =>
        gulp.watch(
            path.resolve(process.cwd(), `${src.js}**/*.js`),
            gulp.parallel('js:build', 'js:lint')
        )
    );
};

module.exports = js;
