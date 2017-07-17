const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackChunkHash = require("webpack-chunk-hash");
const path = require('path');
const webpack = require('webpack');

const fileName = process.env.NODE_ENV === 'production'
  ? "src/[name].[chunkhash]"
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
    path: path.resolve(__dirname, '../../docs'),
    publicPath: '/'
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
  devtool: 'eval',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function(module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
    new WebpackChunkHash(),
    new webpack.optimize.CommonsChunkPlugin({name: 'manifest', minChunks: Infinity}),
    new ChunkManifestPlugin({filename: "chunk-manifest.json", manifestVariable: "webpackManifest", inlineManifest: true}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.template.ejs'),
      inject: 'body'
    }),
    extractSass,
    extractCss
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins = [
    ...config.plugins,
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    new webpack.LoaderOptionsPlugin({minimized: true, debug: false}),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ];
} else {
  config.entry = [
    'react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', ...config.entry
  ]
  config.output.path = path.resolve(__dirname, 'dist')
  config.devServer = {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 8080,
    https: true,
    historyApiFallback: true,
    hot: true,
    publicPath: '/'
  };
  config.plugins = [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ];
}
module.exports = config;
