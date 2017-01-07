const path = require('path');
const webpack = require('webpack');

const OUT_PATH = path.join(__dirname, 'build');
const PUBLIC_PATH = '/assets/';
const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = [{
  name:'components',
  entry: {
      checkbox: [path.resolve('./components/checkbox/index')],
      textfield: [path.resolve('./components/textfield/index')]
  },
  output: {
    path: OUT_PATH,
    publicPath: PUBLIC_PATH,
    filename: 'rmd.[name].' + (IS_PROD ? 'min.' : '') + 'js',
    libraryTarget: 'umd',
    library: '[name]',
  },
  devtool: IS_DEV ? 'source-map' : 'cheap-module-source-map',
  module: {
    rules: [{
      test: /\.js?$/,
      use: ['babel-loader'],
      include: [
          path.join(__dirname, 'components'),
          path.join(__dirname, 'node_modules', '@material')
      ],
        exclude:[/(node_modules)/]
    },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
  },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
    ]
},
    {
        name: 'all',
        entry: {
            rmd: path.resolve(__dirname, 'components/react-material-design')
        },
        output: {
            path: OUT_PATH,
            publicPath: PUBLIC_PATH,
            filename: '[name].' + (IS_PROD ? 'min.' : '') + 'js',
            libraryTarget: 'umd',
            library: '[name]'
        },
        devtool: IS_DEV ? 'source-map' : 'cheap-module-source-map',
        module: {
            rules: [{
                test: /\.js?$/,
                use: 'babel-loader',
                include: [
                    path.join(__dirname, 'components'),
                ],
                exclude:[/(node_modules)/]
            },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader'
                        }
                        ]
                }]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                }
            }),
        ]
    }];
