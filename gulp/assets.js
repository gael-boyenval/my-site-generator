const imagemin = require('gulp-imagemin');
const spritesmith = require('gulp.spritesmith');
const path = require('path');
const buffer = require('vinyl-buffer');
const changed = require('gulp-changed');
const merge = require('merge-stream');
const gulpFunction = require('gulp-fn');
const svgstore = require('gulp-svgstore');
const rename = require('gulp-rename');

const reload = require('./devserver.js').reload;
const utils = require('./utils.js');

const onError = utils.onError;


function assets(gulp, config) {
    const src = config.paths;
    // PNG sprite
    gulp.task('sprite:build', () => {
        const spriteData = gulp.src(path.resolve(`${src.sprite}**/*.png`))
            .pipe(spritesmith({
                retinaSrcFilter: `${src.sprite}**/*@2x.png`,
                imgName: 'sprite.png',
                retinaImgName: 'sprite@2x.png',
                cssName: '_settings.sprite.scss',
                cssTemplate: path.resolve(`${src.sprite}sprite.scss.handlebars`),
            }).on('error', onError));

        const imgStream = spriteData.img
            .pipe(buffer().on('error', onError))
            .pipe(imagemin().on('error', onError))
            .pipe(gulp.dest(path.resolve('./public/assets/imgs/sprites/')))
            .pipe(gulpFunction(reload));

        const cssStream = spriteData.css
            .pipe(gulp.dest(src.scss).on('error', onError))
            .pipe(gulpFunction(reload));

        return merge(imgStream, cssStream);
    });

    //Copy medias
    gulp.task('medias:copy', () => {
        return gulp.src(path.resolve(src.medias, '**/*'))
            .pipe(imagemin().on('error', onError))
            .pipe(gulp.dest(path.resolve('./public/assets/imgs/medias/')))
            .pipe(gulpFunction(reload))
    });

    // Copy font files
    gulp.task('fonts:copy', () => {
        return gulp.src(path.resolve(src.fonts, '**/*'))
            .pipe(changed(path.resolve('./public/assets/fonts/')).on('error', onError))
            .pipe(gulp.dest(path.resolve('./public/assets/fonts/')))
            .pipe(gulpFunction(reload))
    });

    gulp.task('svg:sprite', () => {
        return gulp.src(path.resolve(src.spriteSvg, '*'))
            .pipe(svgstore())
            .pipe(rename('icons.svg'))
            .pipe(gulp.dest('./public/assets/imgs/'))
    });

    /*--------------------------------------*\
                    WATCHERS
    \*--------------------------------------*/

    gulp.task('sprite:watch', () =>
        gulp.watch(
            path.resolve(`${src.sprite}**/*.png`),
            gulp.parallel('sprite:build')
        )
    );

    gulp.task('medias:watch', () =>
        gulp.watch(
            path.resolve(`${src.medias}**/*.*`),
            gulp.parallel('medias:copy')
        )
    );

    gulp.task('svg:watch', () =>
        gulp.watch(
            path.resolve(`${src.spriteSvg}**/*.*`),
            gulp.parallel('svg:sprite')
        )
    );
}

module.exports = assets;
