const gulp = require('gulp');
const debounce = require('debounce');
const path = require('path');
const gutil = require('gulp-util');
const exec = require('child_process').exec;
const createBrowserSync = require('browser-sync').create;

const merge = require('merge-stream');
const sass = require('gulp-sass');
const onError = require('./utils.js').onError;

const browserSync = createBrowserSync();

function devserver(gulp, config) {
    gulp.task('serve', gulp.series((done) => {
        browserSync.init({
            server: {
                baseDir: path.resolve('./public/'),
            },
        }, () => {
            gutil.log('...WATCHING FOR CHANGES');
        });
        done();
    }));
}

const reload = debounce(() => {
    try {
        if (!browserSync.active) {
            return;
        }
        browserSync.reload();
    } catch (e) {
        console.log(e);
    }
}, 300);

reload();

module.exports = {
    devserver,
    reload
}
