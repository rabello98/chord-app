const path = require('path')
const webpack = require('webpack')
const babiliWebpackPlugin = require('babili-webpack-plugin')
const dotenv = require('dotenv').config();

let plugins = [
  new webpack.ProvidePlugin({
    $: 'jquery/dist/jquery.js',
    jQuery: 'jquery/dist/jquery.js',
    $chord: process.env.CHORD_DEV_PATH ? path.resolve(__dirname, process.env.CHORD_DEV_PATH) : 'chord-framework/dist/chord.js',
    $route: process.env.ROUTE_DEV_PATH ? path.resolve(__dirname, process.env.ROUTE_DEV_PATH) : 'chord-framework/dist/router.js'
  }),
  new webpack.DefinePlugin({
    "process.env": dotenv.parsed
  }),
]

if (process.env.NODE_ENV == 'production') {
  plugins.push(new babiliWebpackPlugin())
}

module.exports = {
  entry: path.resolve(__dirname, 'app/js/app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      View: path.resolve(__dirname, 'app/view'),
      Js: path.resolve(__dirname, 'app/js'),
      Style: path.resolve(__dirname, 'app/style')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: plugins,
  devServer: {
    port: '8000',
    publicPath: '/',
    contentBase: "./app",
    historyApiFallback: false
  }
}