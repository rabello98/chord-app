const path = require('path')
const babiliWebpackPlugin = require('babili-webpack-plugin')

let plugins = []

if (process.env.NODE_ENV == 'production') {
  plugins.push(new babiliWebpackPlugin())
}

module.exports = {
  entry: './app/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins
}