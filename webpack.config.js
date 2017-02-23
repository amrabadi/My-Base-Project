const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const validate = require('webpack-validator')

const APP_FOLDER = 'app'
const INIT_FILE = 'initialize.js'
const BUILD_DIR = 'build'

const config = {
  entry: {
    app: path.join(__dirname, APP_FOLDER, INIT_FILE)
  },
  output: {
    path: path.join(__dirname, BUILD_DIR),
    filename: '[name].js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true
    //stats: 'errors-only',
  },
  watchOptions: {
    // Delay the rebuild after the first change
    aggregateTimeout: 300,
    // Poll using interval (in ms, accepts boolean too)
    poll: 1000
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[local]!postcss!sass')
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [ 'es2015', 'react' ],
          plugins: [ 'syntax-object-rest-spread' ]
        }
      }
    ]
  },
  resolve: {
    root: [
      path.join(__dirname, APP_FOLDER)
    ],
    modulesDirectories: [
      'node_modules'
    ],
    extensions: [ '', '.js', '.jsx' ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
    new HtmlWebpackPlugin({ title: 'User Management App' }),
    new webpack.HotModuleReplacementPlugin({ multiStep: true }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  postcss: function () {
    return [ require('autoprefixer') ]
  }
}

module.exports = validate(config)
