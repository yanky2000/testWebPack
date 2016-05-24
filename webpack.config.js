'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
var USER = 'VICTOR';

module.exports = {
    entry: "./home",
    output: {
        filename: "build.js",
        library: "home"
    },
    watch: NODE_ENV == 'development', //true
    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null, //eval'

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: JSON.stringify('ru')
        })
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },
    resolveloader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    cacheDirectory: true,

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: './node_modules/',
            loader: "babel?presets[]=es2015",
            // loader: "babel-loader",
        }]
    }
};

if (NODE_ENV == 'production') {
    module.exports.plugins.push({
        compress: {
            warnings: false,
            drop_console: true,
            unsafe: true
        }
    })
};