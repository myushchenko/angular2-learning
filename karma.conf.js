module.exports = function (config) {
    var appBase   = 'app/';      // transpiled app JS files
    var appAssets ='/base/app/'; // component assets fetched by Angular's compiler
  
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        files: [
            // Add traceur
            'node_modules/traceur/bin/traceur.js',
            
            // System.js for module loading
            'node_modules/systemjs/dist/system.src.js',

            // Polyfills
            'node_modules/core-js/client/shim.js',
            'node_modules/systemjs/dist/system-polyfills.js',

            // Reflect and Zone.js
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',

            // RxJs.
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

            // Angular 2 itself and the testing library
            {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
            {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},

            {pattern: 'systemjs.config.js', included: false, watched: false},
       
            'karma-test-shim.js',
            
            {pattern: appBase + '**/*.js', included: false, watched: true },
            {pattern: appBase + '**/*.html', included: false, watched: true},
            {pattern: appBase + '**/*.css', included: false, watched: true},

            // paths for debugging with source maps in dev tools
            {pattern: appBase + '**/*.ts', included: false, watched: false},
            {pattern: appBase + '**/*.js.map', included: false, watched: false}
        ],
         // proxied base paths
        proxies: {
            '/app/': appAssets
        },
        port: 7898,

        logLevel: config.LOG_ERROR,

        colors: true,

        autoWatch: true,

        //browsers: ['Chrome'],
        browsers: ['PhantomJS'],

        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            //'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-htmlfile-reporter'
        ],

        // Coverage reporter generates the coverage
        reporters: ['progress', 'html'], // 'coverage',
        
        // HtmlReporter configuration
        htmlReporter: {
            // Open this file to see results in browser
            outputFile: '_test-output/tests.html',
            // Optional
            pageTitle: 'Unit Tests',
            subPageTitle: __dirname
        },

        // Source files that you wanna generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        preprocessors: {
            'app/!(*spec).js': ['coverage']
        },
        
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },

        singleRun: false
    });
};