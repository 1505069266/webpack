let htmlWebpackPlugin = require('html-webpack-plugin')
let path = require('path')

module.exports = {
    entry: [__dirname + '/src/script/main.js',__dirname + '/src/script/test.js'],
    output: {
        path: __dirname + '/dist/js',
        filename: 'index.js'
    },
    module: {
        rules: [
            { test: /\.css$/, exclude: path.resolve(__dirname,'node_modules'), use: [{loader:'style-loader'},{loader:"css-loader"}] }
          ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/index.html',
            inject: 'head',
            title: 'webpack is good',
            date: Date(),
            minify: {
                removeComments: true,
                removeTagWhitespace: true
            }
        })
    ]
}