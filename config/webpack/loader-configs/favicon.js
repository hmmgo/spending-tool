import path from 'path'

export default {
  test: /\.(ico)$/,
  rules: [{
    loader: 'file-loader',
    options: { name: '[name].[ext]' }
  }]
}
