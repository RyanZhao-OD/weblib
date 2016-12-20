var path = require('path');
var webpack = require('webpack');
var mode = require('yargs').argv.mode;
var libraryName = 'sparrow';
var uglifyPlugin =  webpack.optimize.UglifyJsPlugin;    // plugin

var plugins = [];
var fileName = '';
if('production' === mode) {
    // 生产环境
    plugins.push(new uglifyPlugin({minimize: true}));
    fileName = libraryName + '.min.js';
} else {
    // 开发环境
    fileName = libraryName + '.js';
}


var config = {
        entry: path.resolve(__dirname, './src/index.js'),
        output: {
            path: path.resolve(__dirname, './lib'),
            filename: fileName,
            library: libraryName,
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        devtool: "cheap-source-map",
        resolve: {
            extension: ['', '.js', '.css', '.json'],
            root: path.resolve('./src')
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/
                },
                {
                    test: /\.js$/,
                    loader: 'eslint',
                    exclude: /node_modules/
                }
            ]
        },
        plugins: plugins

};

module.exports = config;
