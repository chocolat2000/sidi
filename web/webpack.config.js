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
    module: ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', path.join(srcPath, 'js/module.js')],
    common: ['react', 'react/addons', 'react-router', 'react-tap-event-plugin', 'react-bootstrap', 'react-draggable', 'alt', 'alt/AltContainer', 'deepstream.io-client-js', 'webpack/hot/only-dev-server']
  },

  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src/js']
  },

  output: {
    path: path.join(__dirname, 'build'),
    //publicPath: '/assets/',
    filename: '[name].js',
    //library: ['Example', '[name]'],
    pathInfo: true
  },

  module: {
    loaders: [
    {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot','babel-loader?cacheDirectory']},
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  debug: true,
  devtool: 'eval-cheap-module-source-map',
  
  devServer: {
    contentBase: './build',
    //publicPath: '/assets/',
    hot: true,
    historyApiFallback: true
  }
};