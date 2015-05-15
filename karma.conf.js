'use strict';

var path = require('path'),
  _ = require('lodash'),
  CONF = {
    "pkg": require('./package.json').config
  };

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      'test/helpers/**/*.js',
      'test/spec/**/*.js',
      'test/spec/**/*.jsx',
    ],

    preprocessors: {
      'test/spec/**/*.js': ['webpack'],
      'test/spec/**/*.jsx': ['webpack'],
    },

    webpack: _.pick(require('./webpack.config.js'), ['resolve', 'module']),

    webpackServer: {
      noInfo: true,
      stats: {
        colors: true
      }
    },

    exclude: [],
    port: CONF.pkg.port_test,

    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],
    reporters: ['progress'],
    captureTimeout: 60000,
    singleRun: true
  });
};
