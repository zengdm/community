var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: {
        index: path.resolve(__dirname, 'source/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'build/index'),
        filename: '[name].debug.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
