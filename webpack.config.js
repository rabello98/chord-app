const path = require('path')
const babiliWebpackPlugin = require('babili-webpack-plugin')
const webpack = require('webpack')

let plugins = [
  new webpack.ProvidePlugin({
    $: 'jquery/dist/jquery.js',
    jQuery: 'jquery/dist/jquery.js',
    $route: [path.resolve(__dirname, 'app/js/routes/router.js'), 'Route'],
    $chord: [path.resolve(__dirname, 'framework/chord.js'), 'Chord']
  })
]

if (process.env.NODE_ENV == 'production') {
  plugins.push(new babiliWebpackPlugin())
}

module.exports = {
  entry: path.resolve(__dirname, 'app/js/app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
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
  plugins: plugins
}