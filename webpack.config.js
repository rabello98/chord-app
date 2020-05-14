const path = require('path')
const webpack = require('webpack')
const babiliWebpackPlugin = require('babili-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'app/index.html')
  }),
  new CleanWebpackPlugin(),
]

if (process.env.NODE_ENV == 'production') {
  plugins.push(new babiliWebpackPlugin())
}

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/js/app.js'),
    style: path.resolve(__dirname, 'app/style/style.js')
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
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
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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