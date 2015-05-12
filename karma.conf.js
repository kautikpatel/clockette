'use strict';

var path = require('path'),
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

    webpack: {
      cache: true,
      module: {
        loaders: [{
          test: /\.gif/,
          loader: 'url-loader?limit=10000&mimetype=image/gif'
        }, {
          test: /\.jpg/,
          loader: 'url-loader?limit=10000&mimetype=image/jpg'
        }, {
          test: /\.png/,
          loader: 'url-loader?limit=10000&mimetype=image/png'
        }, {
          test: /\.jsx?$/,
          loader: 'babel-loader'
        }, {
          test: /\.scss/,
          loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
        }, {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }, {
          test: /\.woff/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        }, {
          test: /\.woff2/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff2'
        }]
      },
      resolve: {
        alias: {
          'styles': path.join(__dirname, './src/styles/'),
          'components': path.join(__dirname, './src/components/'),
          'stores': path.join(__dirname, './src/stores/'),
          'actions': path.join(__dirname, './src/actions/'),
          'routes': path.join(__dirname, './src/routes/'),
        }
      }
    },

    webpackServer: {
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
