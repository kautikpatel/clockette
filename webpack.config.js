/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';

var webpack = require('webpack'),
  path = require('path');

module.exports = {

  output: {
    publicPath: '/assets/',
    filename: 'main.js'
  },

  cache: true,
  debug: true,
  devtool: false,
  entry: [
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    './src/components/main.jsx'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.json', '.js', '.jsx'],
    alias: {
      'actions': __dirname + '/src/actions/',
      'components': __dirname + '/src/components/',
      'mixins': __dirname + '/src/mixins/',
      'routes': __dirname + '/src/routes/',
      'stores': __dirname + '/src/stores/',
      'styles': __dirname + '/src/styles/',

      'test': __dirname + '/test/',
    }
  },

  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'jsxhint'
    }],

    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded' },
      { test: /\.(png|jpg|woff|woff2)$/, loader: 'url-loader?limit=8192'},
      { test: /\.svg$/, loader: 'raw-loader'},
      { test: /\.json$/, loader: 'json-loader'}
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};
