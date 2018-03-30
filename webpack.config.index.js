var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        index_list: path.resolve(__dirname, 'source/app.js')
        // index: path.resolve(__dirname, 'source/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'build/index'),
        filename: '[name].debug.js'
    },

    module: {

        rules: [
            //		    {
            //		      test: /\.js$/,
            //		      exclude: /(node_modules|bower_components)/,
            //		      use: {
            //		        loader: 'babel-loader',
            //		        options: {
            //		          presets: ['env']
            //		        }
            //		      }
            //		    },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }, {
                test: /\.(woff|svg|eot|ttf)\??.*/,
                loader: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'
            }
        ]
    },

    resolve: {
        alias: {
            swiper: path.resolve(__dirname, 'source/lib/swiper/idangerous.swiper.min'),
            interval: path.resolve(__dirname, 'source/lib/interval/Interval'),
            cookie: path.resolve(__dirname, 'source/lib/cookie/cookie.js')
        }
    },

    plugins: [
        new ExtractTextPlugin('[name].debug.css'),



        // new webpack.optimize.UglifyJsPlugin({
        //     output: {
        //         comments: false
        //     },
        //     compress: {
        //         warnings: false
        //     }
        // }),

        // new webpack.LoaderOptionsPlugin({
        //     minimize: true
        // }),

        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('production')
        // })
    ]
};