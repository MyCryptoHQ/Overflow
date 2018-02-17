const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

const config = merge(common, {
  entry: ['react-hot-loader/patch', common.entry],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader?sourceMap' // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});

module.exports = config;
