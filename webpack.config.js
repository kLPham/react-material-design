const path = require('path');
const webpack = require('webpack');

const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = process.env.NODE_ENV === 'production';
const OUT_PATH = path.join(__dirname, 'build');

module.exports = [
    {
        name: 'all',
        externals: [
            'classnames',
            'immutable',
            /^@material\/.+$/,
            'material-components-web',
            'prop-types',
            'react',
            'react-dom',
            'react-router-dom',
            'react-test-renderer',
            'uuid'
        ],
        entry: {
            rmd: path.resolve(__dirname, 'components/react-material-design')
        },
        output: {
            path: OUT_PATH,
            filename: `[name].${IS_PROD ? 'min.' : ''}js`,
            libraryTarget: 'umd',
            library: '[name]'
        },
        devtool: IS_DEV ? 'cheap-module-source-map' : 'source-map',
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    use: 'babel-loader',
                    include: [path.join(__dirname, 'components')],
                    exclude: [/(node_modules)/, /__tests__/]
                }, {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader'
                        }, {
                            loader: 'css-loader'
                        }
                    ]
                }, {
                    test: /\.json$/,
                    loader: 'json-loader'
                }
            ]
        },
        plugins: [new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })]
    },
];
