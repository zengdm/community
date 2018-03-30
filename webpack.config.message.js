var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: {
          message: path.resolve(__dirname, 'source/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'build/message'),
        filename: '[name].debug.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },{
            	test: /\.(woff|svg|eot|ttf)\??.*/,
            	loader:'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'
            }
        ]
    }
};
