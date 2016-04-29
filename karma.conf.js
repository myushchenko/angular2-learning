module.exports = function (config) {
    config.set({

        basePath: '.',

        frameworks: ['jasmine'],

        files: [
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/es6-module-loader/dist/es6-module-loader.js',
            'node_modules/traceur/bin/traceur-runtime.js', // Required by PhantomJS2, otherwise it shouts ReferenceError: Can't find variable: require
            'node_modules/traceur/bin/traceur.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/reflect-metadata/Reflect.js',
            // beta.7 IE 11 polyfills from https://github.com/angular/angular/issues/7144
            'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',

            { pattern: 'node_modules/angular2/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'dist/**/*.js', included: false, watched: true },
            { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: false, watched: false }, // PhantomJS2 (and possibly others) might require it 

            'karma-test-shim.js'
        ],
         // proxied base paths
        proxies: {
            '/angular2/': '/base/node_modules/angular2/',
			'/node_modules/': '/base/node_modules/',
            "/app/": "/base/app/"
        },
        port: 7898,

        logLevel: config.LOG_INFO,

        colors: true,

        autoWatch: true,

        //browsers: ['Chrome'],
        browsers: ['PhantomJS'],

        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],

        // Coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],

        // Source files that you wanna generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        preprocessors: {
            'dist/!(*spec).js': ['coverage']
        },

        /*coverageReporter: {
            reporters: [
                { type: 'lcovonly', subdir: '.', file: 'coverage-final.txt' }
            ]
        },*/

        singleRun: false
    });
};