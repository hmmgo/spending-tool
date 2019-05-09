import path from 'path'

export default {
  test: /\.(woff|woff2|ttf|eot|svg)$/,
  exclude: path.resolve(process.cwd(), 'icons'),
  rules: [
    {
      loader: 'file-loader',
      options: {
        outputPath: `fonts/`,
        name: '[name].[ext]'
      }
    }
  ]
}
