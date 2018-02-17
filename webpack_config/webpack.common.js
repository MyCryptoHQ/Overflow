const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: [
          'react-hot-loader/webpack',
          {
            loader: 'ts-loader',
            options: { happyPackMode: true, logLevel: 'info' }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.sass', '.css'],
    symlinks: false
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
    new CleanWebpackPlugin(),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: process.env.NODE_ENV === 'development'
    })
  ]
};

module.exports = config;
