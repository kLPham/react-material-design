var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'src/[name].[hash].css', allChunks: false
  //  disable: process.env.NODE_ENV == 'development'
});
const extractCss = new ExtractTextPlugin({
  filename: 'src/[name].[hash].css', allChunks: false,
});

module.exports = {
  entry: [
    'react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', './src/index'
  ],
  output: {
    filename: 'src/[name].[hash].js',
    path: path.resolve(__dirname, '../../docs'),
    publicPath: '/'
  },
  //  context: path.resolve(__dirname, 'src'),
  devtool: 'eval',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader'],
        include:[path.resolve(__dirname, 'src'), path.resolve(__dirname, '../../', 'components')],
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        use: extractCss.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      }, {
        test: /\.scss$/,
        loader: extractSass.extract({
          use: ['css-loader', 'sass-loader']
        })
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.template.ejs'),
      inject: 'body'
    }),
    extractSass,
    extractCss
  ]
};
