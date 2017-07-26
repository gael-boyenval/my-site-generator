const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const merge = require('merge-stream');
const path = require('path');
const changed = require('gulp-changed');
const autoprefixer = require('autoprefixer');
const csslint = require('gulp-csslint');
const postcssSVG = require('postcss-svg');
const gutil = require('gulp-util');
const cssnano = require('cssnano');
const cssMqpacker = require('css-mqpacker');
const stylelint = require('stylelint');
const syntax = require('postcss-scss');
const reporter = require('postcss-reporter');
const gulpFunction = require('gulp-fn');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

const reload = require('./devserver.js').reload;
const csslintFormater = require('./csslint_formater.js');
const utils = require('./utils.js');

const onError = utils.onError;


function css(gulp, config) {

    const src = config.paths;

    // apply formater and custom rules to eslint
    csslintFormater(csslint);

    // scss plugins (after sass builder)
    const plugins = [
        autoprefixer({ remove: false }),
        cssMqpacker(),
        postcssSVG({
            defaults: '',
            paths: [path.resolve(process.cwd(), src.inlineSvgFolders)],
            svgo: true,
        }),
    ];

    /*--------------------------------------*\
                    BUILD CSS
    \*--------------------------------------*/

    gulp.task('css:build', () => {
        const scssBundlesStream = merge((config.scssBundles || []).map((element) =>
            gulp.src(path.resolve(process.cwd(), src.scss + element))
                .pipe(sourcemaps.init().on('error', onError))
                .pipe(changed(path.resolve(process.cwd(), './public/assets/css/')).on('error', onError))
                .pipe(sass().on('error', onError))
                .pipe(postcss(plugins).on('error', onError))
                .pipe(csslint(config.csslint).on('error', onError))
                .pipe(csslint.formatter('customReporter').on('error', onError))
                .pipe(postcss([cssnano({ autoprefixer: false, zindex: false })]))
                .pipe(rename({ extname: '.min.css' }))
                .pipe(sourcemaps.write('.'))
                .pipe(gulp.dest(path.resolve(process.cwd(), './public/assets/css/')))
                .pipe(gulpFunction(reload))
        ));

        scssBundlesStream.on('error', onError);

        return scssBundlesStream.isEmpty() ? Promise.resolve() : scssBundlesStream;
    });

    /*--------------------------------------*\
                    LINT SCSS
    \*--------------------------------------*/

    gulp.task('scss:lint', () => {
        const lintPlugins = [
            stylelint(),
            reporter({
                clearReportedMessages: true,
            }),
        ];

        return gulp.src(path.resolve(process.cwd(), src.scss + '**/*.scss'))
            .pipe(postcss(lintPlugins, { syntax }).on('error', onError))
    });

    /*--------------------------------------*\
                    WATCHERS
    \*--------------------------------------*/

    gulp.task('css:watch', () =>
        gulp.watch(
            path.resolve(process.cwd(), `${src.scss}**/*.scss`),
            gulp.parallel(
                'css:build',
                'scss:lint'
            )
        )
    );
}

module.exports = css;
