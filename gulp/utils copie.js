const gutil = require('gulp-util');

const utils = {
    onError: function(err) {
        gutil.log(err);
        this.emit('end');
    },

    reload: function() {
        gutil.log('reload');
        this.emit('end');
    }
}

module.exports = utils;
