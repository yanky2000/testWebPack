'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');


module.exports = {
    entry: "./dev/home",
    output: {
        filename: "./dev/build.js",
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

    module: {
        loaders: [{
            test: /\.js$/,
            include: __dirname + "/dev",
            // loader: "babel?presets[]=es2015,plugins[]=transform-es2015-modules-commonjs",
            // loader: "babel?presets[]=es2015",
            loader: "babel-loader",
        }]
    }
};

if (NODE_ENV == 'production') {
    console.log(`NODE_ENV is in ${NODE_ENV} mode` );
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
};