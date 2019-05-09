import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'
import javascript from './loader-configs/javascript'
import style from './loader-configs/style'
import font from './loader-configs/font'
import html from './loader-configs/html'
import image from './loader-configs/image'
import favicon from './loader-configs/favicon'

const root = process.cwd()

export default {
  entry: {
    bundle: path.resolve(root, 'src')
  },

  output: {
    path: path.resolve(root, 'build/assets'),
    publicPath: `/assets/`,
    filename: '[name].js'
  },

  module: {
    rules: [
      javascript,
      style,
      font,
      html,
      image,
      favicon
    ]
  },

  devServer: {
    host: '0.0.0.0',
    contentBase: path.resolve(root, 'src/public'),
    quiet: true
  },

  plugins: [
    new CleanWebpackPlugin(['build'], { root }),

    new CopyWebpackPlugin([{
      from: path.resolve(root, 'src/public/index.html'),
      to: path.resolve(root, 'build')
    }]),

    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
      ignoreOrder: true
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),

    new FriendlyErrorsWebpackPlugin(),
  ]
}
