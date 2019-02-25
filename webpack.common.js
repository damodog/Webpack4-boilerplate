const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

module.exports = {
  entry: {
    app: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      title: 'Output Management',
      minify: {
        removeScriptTypeAttributes: true // removes type="text/javascript" from injected <script> tags
      },
      svgoConfig: {
        removeTitle: false
      }
    }),
    new HtmlWebpackInlineSVGPlugin({
      runPreEmit: true,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        query: {
          pretty: true // false is default. Set to true to not minify resulting html
        }
      }
    ]
  }
};