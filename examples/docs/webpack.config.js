const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const fileName = process.env.NODE_ENV === 'production'
  ? "src/[name]-[chunkhash]"
  : "src/[name]";

const extractSass = new ExtractTextPlugin({
  filename: `${fileName}.css`,
  allChunks: false,
  disable: process.env.NODE_ENV !== 'production'
});

const extractCss = new ExtractTextPlugin({filename: `${fileName}.css`, allChunks: false});

const config = {
  entry: ['./src/index'],
  output: {
    filename: `${fileName}.js`,
    path: path.resolve(__dirname, './dist'),
    publicPath:'/'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, '../../', 'components')
        ],
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: extractCss.extract({fallback: 'style-loader', use: 'css-loader'})
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
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function(module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'runtime'}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.template.ejs'),
      inject: 'body'
    }),
    extractSass,
    extractCss
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.devtool = 'source-map',  
  config.plugins = [
    ...config.plugins,
    new UglifyJSPlugin({
      sourceMap: true,
      parallel: true
    }),
    new webpack.LoaderOptionsPlugin({minimized: true, debug: false}),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ];
} else {
  config.devtool = 'eval',
  config.entry = [
    'react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', ...config.entry
  ]
  config.devServer = {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 8080,
    historyApiFallback: true,
    hot: true,
    publicPath: '/'
  };
  config.plugins = [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ];
}
module.exports = config;
