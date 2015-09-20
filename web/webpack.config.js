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
    common: ['webpack/hot/only-dev-server', 'react', 'react/addons', 'react-router', 'react-bootstrap', 'react-draggable', 'uuid', 'alt', 'alt/AltContainer', 'deepstream.io-client-js'],
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
    //publicPath: '/assets/',
    filename: '[name].js',
    //library: ['Example', '[name]'],
    pathInfo: true
  },

  module: {
    loaders: [
      //{test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot','babel-loader?cacheDirectory']},
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')},
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
  devtool: 'eval',
  
  devServer: {
    contentBase: './build',
    //publicPath: '/assets/',
    hot: true,
    historyApiFallback: true
  }
};