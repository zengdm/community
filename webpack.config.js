var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: {
     // header: path.resolve(__dirname, 'source/components/header/app.js')
           footer: path.resolve(__dirname, 'source/components/footer/app.js')
    },

    output: {
     // path: path.resolve(__dirname, 'source/components/header'),
           path: path.resolve(__dirname, 'source/components/footer'),
        filename: '[name].debug.js'
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    
    resolve: {
        alias: {
            swiper: path.resolve(__dirname, 'source/lib/swiper/idangerous.swiper.min')
        }
    }
};