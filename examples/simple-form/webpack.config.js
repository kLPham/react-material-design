var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'src/index')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
      preLoaders: [{
        test: /\.json$/,
          loader: 'json-loader'
      }],
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel-loader'],
      include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'node_modules', '@material')
      ]
    },
        {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }]
  }
};
