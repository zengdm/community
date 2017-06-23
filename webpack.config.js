var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: {
        footer: path.resolve(__dirname, 'source/components/footer/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'source/components/footer'),
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
