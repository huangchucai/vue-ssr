const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
module.exports = merge(base, {
    target: 'node',
    entry: {
        server: path.resolve(__dirname, '../src/entry-server.js'),
    },
    output: {
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'server-index.html',
            template: path.resolve(__dirname, '../public/server-index.html'),
            excludeChunks: ['server']
        }),
    ]
});

// 打包后会被 require('xxx')使用
