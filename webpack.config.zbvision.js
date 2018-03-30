var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
    zbvision: path.resolve(__dirname, 'source/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'build/zbvision'),
        filename: '[name].debug.js'
    },

    module: {
        rules: [
	        {
	            test: /\.css$/,
	            loader: ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})
	        },{
	            test: /\.(woff|svg|eot|ttf)\??.*/,
	            loader:'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'
	        }
	    ]
    },
    
    resolve: {
        alias: {
            swiper: path.resolve(__dirname, 'source/lib/swiper/idangerous.swiper.min'),
          
        }
    },
    
    plugins: [
        new ExtractTextPlugin('[name].debug.css'),
    ]
};
