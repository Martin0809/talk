var webpack = require('webpack');
var config = {
  entry: {
    main: './app/main.jsx'
  },

  output: {
    path: './dist',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    loaders: [
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2|otf)$/,
        loader: 'url-loader?limit=10000'
      },

      {
        test: /\.jsx?$/,
        loader: 'babel?cacheDirectory=true&presets[]=react,presets[]=es2015',
        exclude: /(node_modules|bower_components)/
      },

      {
        test: /\.s?css$/,
        loader: 'style!css!autoprefixer?browsers=last 3 versions!sass'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },

  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin('libs.js')
  // ]
}

module.exports = config;
