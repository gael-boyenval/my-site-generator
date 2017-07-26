const path = require('path');

const config = {
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
    },
    patternlab: {
        paths: {
            source: {
                root: './src/patternlab/',
                patterns: './src/patternlab/_patterns/',
                data: './src/patternlab/_data/',
                meta: './src/patternlab/_meta/',
                annotations: './src/patternlab/_annotations/',
                styleguide: './node_modules/styleguidekit-assets-default/dist/',
                patternlabFiles: './node_modules/styleguidekit-mustache-default/views/',
                js: './public/assets/js/',
                images: './public/assets/imgs/',
                fonts: './public/assets/fonts/',
                css: './public/assets/css/'
            },
            public: {
                root: './public/patternlab/',
                patterns: './public/patternlab/patterns/',
                data: './public/patternlab/styleguide/data/',
                annotations: './public/patternlab/annotations/',
                styleguide: './public/patternlab/styleguide/',
                js: './public/patternlab/js/',
                images: './public/patternlab/images/',
                fonts: './public/patternlab/fonts/',
                css: './public/patternlab/css/'
            }
        },
        styleGuideExcludes: [],
        defaultPattern: 'all',
        defaultShowPatternInfo: false,
        cleanPublic: false,
        patternExtension: 'mustache',
        'ignored-extensions': [
            'scss',
            'DS_Store',
            'less'
        ],
        'ignored-directories': [
            'scss'
        ],
        debug: false,
        outputFileSuffixes: {
            rendered: '.rendered',
            rawTemplate: '',
            markupOnly: '.markup-only'
        },
        ishControlsHide: {
            s: false,
            m: false,
            l: false,
            full: false,
            random: false,
            disco: false,
            hay: true,
            mqs: false,
            find: false,
            'views-all': false,
            'views-annotations': false,
            'views-code': false,
            'views-new': false,
            'tools-all': false,
            'tools-docs': false
        },
        ishMinimum: '240',
        ishMaximum: '2600',
        patternStateCascade: [
            'inprogress',
            'inreview',
            'complete'
        ],
        patternStates: {},
        patternExportPatternPartials: [],
        patternExportDirectory: './pattern_exports/',
        cacheBust: true,
        starterkitSubDir: 'dist',
        cleanOutputHtml: false
    }
}


module.exports = config;
