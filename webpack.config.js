'use strict';
// var webpack = require('webpack'),
// path = require('path');

var APP = __dirname;

module.exports = {
  context: APP,
  entry: {
    app: './client/core/bootstrap.js'
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      // TODO: move sass compile from gulp to webpack.
      // {
      // test: /\.scss$/,
      // loader: 'style!css!sass'
      // }
      {
        test: /\.js$/,
        loader: 'ng-annotate!babel?presets[]=es2015',
        exclude: /node_modules|bower_components/
    }
    ]
  }
};
