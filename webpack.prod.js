const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'js/[name].[contenthash:4].js', // adds bundle name from entry point with contenthash eg: app.2f21.js
    chunkFilename: 'js/[name].[chunkhash:4].js' // same as filename but on chunks eg: app.2f21.js
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ // minimising js as using optimization.minimizer overrides the defaults provided by webpack
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({}) // minimising css
    ],
    splitChunks: { // splits common dependancies ie. lodash, jquery etc if used into separate chunks (js files)
      chunks: 'all'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:4].css' // adds bundle name from entry point with contenthash eg: app.d14f.css
    }),
    new CleanWebpackPlugin(['dist']) // cleans dist folder before building
  ],
  module: {
    rules: [{
      test: /\.(sa|sc|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader, // extracting css into a separate file
        "css-loader", // translates CSS into CommonJS
        'postcss-loader', // processes CSS before adding to page (used for autoprefixer)
        'sass-loader' // compiles Sass to CSS, using Node Sass by default
      ]
    }]
  }
});