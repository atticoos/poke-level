module.exports = {
  context: __dirname + '/app',
  devtool: 'source-map',
  entry: {
    javascript: './app.js',
    html: './index.html'
  },
  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            'transform-object-rest-spread',
            'transform-class-properties'
          ]
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  }
}
