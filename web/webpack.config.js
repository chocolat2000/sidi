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
    common: ['webpack/hot/only-dev-server', 'react', 'redux', 'react-redux', 'redux-actions', 'react-router', 'react-bootstrap', 'react-draggable2', 'uuid', 'deepstream.io-client-js'],
    module: ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', path.join(srcPath, 'js/module.js')],
    //styles: ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', path.join(srcPath, 'styles/app.scss')]
  },

  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src/js']
  },

  output: {
    path: path.join(__dirname, 'build'),
    //publicPath: 'http://localhost:8080',
    filename: '[name].js',
    //library: ['Example', '[name]'],
    pathInfo: true
  },

  module: {
    loaders: [
      //{test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot','babel-loader?cacheDirectory']},
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory'},
      {test: /\.scss$/, loader: 'style!css?sourceMap!sass?sourceMap'},
    ]
  },
/*
  externals: {
    jquery: 'jQuery'
  },
*/
  plugins: [
    //new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    //new HtmlWebpackPlugin({
    //  title: 'sidi',
    //  inject: true,
    //  template: 'src/index.html'
    //}),
    //new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  debug: true,
  devtool: 'cheap-module-eval-source-map',
  
  devServer: {
    contentBase: './build',
    //publicPath: '/assets/',
    hot: true,
    historyApiFallback: true
  }
};