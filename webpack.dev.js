const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'js/[name].js' // no hash in name for dev
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css' // no hash in name for dev
    })
  ],
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
          loader: MiniCssExtractPlugin.loader // extracting css into a separate file
        },
        {
          loader: "css-loader", // translates CSS into CommonJS
          options: {
            sourceMap: true // yeah we like sourcemaps in dev
          }
        },
        {
          loader: 'sass-loader', // compiles Sass to CSS, using Node Sass by default
          options: {
            sourceMap: true // yeah we like sourcemaps in dev
          }
      }]
    }]
  }
});