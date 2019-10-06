const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              emitError: true,
              emitWarning: true,
              failOnError: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      Components: path.resolve(__dirname, 'src/components/')
    }
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      title: 'Example App',
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html'
    })
  ],
  devtool: 'source-map',
  devServer: {
    compress: true,
    hot: true,
    open: true,
    contentBase: path.resolve(__dirname, 'assets'),
    port: 8080
  }
}