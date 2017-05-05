var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
        filename: '[name].css', allChunks: false
        //  disable: process.env.NODE_ENV == 'development'
    })
    module.exports = {
        entry: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            path.resolve(__dirname, 'src/index')
        ],
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'dist'),
            publicPath: '/'
        },
        context: path.resolve(__dirname, 'src'),
        devtool: 'inline-source-map',
        devServer: {
            hot: true,
            contentBase: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },

        module: {
            rules: [
            {
                    test: /\.js?$/,
                    use: ['babel-loader'],
                    include: [
                        path.join(__dirname, 'src'),
                        path.join(__dirname, '../../components'),
                        path.join(__dirname, '../../node_modules', '@material')
                    ]
                }, {
                    test: /\.css$/,
                    use: [
                        'style-loader', 'css-loader'
                    ],
                    include: [path.join(__dirname, '../../node_modules', '@material')]
                }, {
                    test: /\.scss$/,
                    loader: extractSass.extract([
                      'css-loader', 'sass-loader'
                    ])
            }
        ]
    },
    plugins : [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin(), extractSass]
};
