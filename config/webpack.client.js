const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
module.exports = merge(base, {
    entry: {
        client: path.resolve(__dirname, '../src/entry-client.js'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../public/index.html'),
        }),
    ]
});
