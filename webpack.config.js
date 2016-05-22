'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

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
        })
    ],    
    
}