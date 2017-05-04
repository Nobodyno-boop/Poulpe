var path = require('path');
var base = path.resolve(__dirname)
var webpack = require("webpack");
var BabiliPlugin = require("babili-webpack-plugin");
module.exports = {
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path: path.resolve(__dirname) + "/dist",
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module :{
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        include: base
      }
    ]
  },
  plugins: [
    new BabiliPlugin()
    // new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: './'
  }
}
