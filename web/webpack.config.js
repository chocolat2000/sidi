'use strict';

var webpack = require('webpack'),  
HtmlWebpackPlugin = require('html-webpack-plugin'),
ExtractTextPlugin = require('extract-text-webpack-plugin'),

path = require('path'),
srcPath = path.join(__dirname, 'src');

module.exports = {  
  target: 'web',
  cache: true,

  entry: {
    module: path.join(srcPath, 'js/module.js'),
    common: ['react', 'react/addons', 'react-router', 'react-tap-event-plugin', 'react-bootstrap', 'alt', 'alt/AltContainer', 'deepstream.io-client-js']
  },

  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src/js']
  },

  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '',
    filename: '[name].js',
    //library: ['Example', '[name]'],
    pathInfo: true
  },

  module: {
    loaders: [
    {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?cacheDirectory'},
    {test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
    ]
  },
/*
  externals: {
    jquery: 'jQuery'
  },
*/
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new HtmlWebpackPlugin({
      title: 'sidi',
      inject: true,
      template: 'src/index.html'
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.NoErrorsPlugin()
  ],

  debug: true,
  devtool: 'eval-cheap-module-source-map',
  
  devServer: {
    contentBase: './tmp',
    historyApiFallback: true
  }
};