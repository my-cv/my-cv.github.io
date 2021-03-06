var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  context: path.join(__dirname, ''),
  output: {
   path: __dirname,
   filename: 'bundle.js'
  },
  resolve: {

  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.css$/,
        loaders: ['style','css']
      }
    ]
  },
sassLoader: {
 includePaths: [
   path.resolve(__dirname, "./node_modules/materialize-sass/sass/")
 ]
}
};
