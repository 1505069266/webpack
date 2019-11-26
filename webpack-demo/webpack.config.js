module.exports = {
    entry: [__dirname + '/src/script/main.js',__dirname + '/src/script/test.js'],
    output: {
        path: __dirname + '/dist/js',
        filename: '[name]-[hash].js'
    }
}