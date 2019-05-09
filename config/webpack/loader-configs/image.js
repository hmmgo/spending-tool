export default {
  test: /\.(png|jpg|jpeg|gif|webp)$/,
  rules: [
    {
      use: {
        loader: 'url-loader', // === DataURL
        options: {
          limit: 8192, // Will use file-loader over this limit
          publicPath: '/assets/',
          name: 'images/[name].[ext]'
        }
      }
    },
    {
      use: {
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      }
    }
  ]
}
