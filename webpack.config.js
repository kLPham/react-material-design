const path = require('path');
const webpack = require('webpack');

const OUT_PATH = path.join(__dirname, 'build');
const PUBLIC_PATH = '/assets/';
const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = [{
    name: 'components',
    entry: {
        button: [path.resolve(__dirname,'components/button/index')],
        card: [path.resolve(__dirname,'components/card/index')],
        checkbox: [path.resolve(__dirname, 'components/checkbox/index')],
        fab: [path.resolve(__dirname, 'components/fab/index')],
        formField: [path.resolve(__dirname, 'components/formField/index')],
        list: [path.resolve(__dirname, 'components/list/index')],
        listitem: [path.resolve(__dirname, 'components/listitem/index')],
        listitemdivider: [path.resolve(__dirname, 'components/listitemdivider/index')],
        menu: [path.resolve(__dirname, 'components/menu/index')],
        menuItem: [path.resolve(__dirname, 'components/menuItem/index')],
        radio: [path.resolve(__dirname, 'components/radio/index')],
        textfield: [path.resolve(__dirname, 'components/textfield/index')],
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
            exclude: [/(node_modules)/]
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
                exclude: [/(node_modules)/]
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
