var path = require('path');
var webpack = require('webpack');

var libraryName = 'sparrow';

var config = {
        entry: path.resolve(__dirname, './src/index.js'),
        output: {
            path: path.resolve(__dirname, './lib'),
            filename: libraryName + '.js',
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
                }
            ]
        }

};

module.exports = config;
