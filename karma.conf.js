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
      'test/spec/actions/**/*.js',
      'test/spec/components/**/*.js',
      'test/spec/routes/**/*.js',
      'test/spec/stores/**/*.js'
    ],

    preprocessors: {
      'test/spec/actions/**/*.js': ['webpack'],
      'test/spec/components/**/*.js': ['webpack'],
      'test/spec/routes/**/*.js': ['webpack'],
      'test/spec/stores/**/*.js': ['webpack']
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
