import ExtractTextPlugin from 'extract-text-webpack-plugin'
import path from 'path'

const sassLoaders = [
  {
    loader: 'css-loader',
    options: {
      modules: false, // Switch this on for CSS Modules (https://github.com/css-modules/css-modules)
      localIdentName: '[local]--[hash:base64:5]',
      sourceMap: true
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      parser: 'postcss-scss'
    }
  },
  {
    loader: 'sass-loader',
    options: {
      outputStyle: 'expanded'
    }
  },
  {
    loader: 'sass-resources-loader',
    options: {
      resources: [ path.resolve(process.cwd(), 'src', 'styles', 'resources/**/*.scss') ]
    },
  },
]

export default {
  test: /\.(css|scss)(\?.+)?$/,
  loaders: ExtractTextPlugin.extract({
    use: sassLoaders
  })
}
