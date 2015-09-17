var webpack = require('webpack')

module.exports = {
  entry: [ './index.js' ],
  output: {
    path: __dirname,
    filename: 'build.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?stage=0',
      },
    ],
  },
}
