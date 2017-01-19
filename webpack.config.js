const path = require('path');
const webpack = require('webpack');

const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = process.env.NODE_ENV === 'production';
const OUT_PATH = path.join(__dirname, 'build');
const PUBLIC_PATH = '/assets/';

module.exports = [{
    name: 'components',
    entry: {
        button: [path.resolve(__dirname, 'components/button/index')],
        card: [path.resolve(__dirname, 'components/card/index')],
        checkbox: [path.resolve(__dirname, 'components/checkbox/index')],
        drawer: [path.resolve(__dirname, 'components/drawer/index')],
        fab: [path.resolve(__dirname, 'components/fab/index')],
        formField: [path.resolve(__dirname, 'components/formField/index')],
        iconToggle: [path.resolve(__dirname, 'components/iconToggle/index')],
        list: [path.resolve(__dirname, 'components/list/index')],
        listitem: [path.resolve(__dirname, 'components/list/ListItem')],
        listitemdivider: [path.resolve(__dirname, 'components/list/ListItemDivider')],
        menu: [path.resolve(__dirname, 'components/menu/index')],
        menuItem: [path.resolve(__dirname, 'components/menu/menuItem')],
        radio: [path.resolve(__dirname, 'components/radio/index')],
        select: [path.resolve(__dirname, 'components/select/index')],
        snackbar: [path.resolve(__dirname, 'components/snackbar/index')],
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
            exclude: [/(node_modules)/, /__tests__/]
        },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }]
    },
    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
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
                exclude: [/(node_modules)/, /__tests__/]
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
