var webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: './dist/[name].bundle.js',
        publicPath: '/'
    },
    externals: {
        'angular': 'angular',
        'Oidc': 'Oidc'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['ng-annotate', 'babel?presets[]=es2015']
            },
            { test: /\.html$/, loader: 'html' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
            { test: /\.(jpeg|gif|png).*/, loader: 'url?limit=15000&name=./dist/[name].[ext]'},
            { test: /\.(woff|woff2).*/, loader: 'url?limit=10000&mimetype=application/font-woff&name=./dist/[name].[ext]' },
            { test: /\.ttf.*/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=./dist/[name].[ext]' },
            { test: /\.(eot|otf).*/, loader: 'url?limit=10000&name=./dist/[name].[ext]' },
            { test: /\.svg.*/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=./dist/[name].[ext]' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            REQUESTED_URL_PARAM_NAME: '"requestedUrlBase64"'
        })
    ]
}
