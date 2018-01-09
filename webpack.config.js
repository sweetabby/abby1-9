const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/abc.js'
    },
    module: {
        rules: [
            { test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath:'img/',
                            publicPath:'../'
                        }
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        // attrs: [':data-src']
                    }
                }
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/styles.css"),
        new HtmlWebpackPlugin({
            title:'index',
            filename:'html/index.html',
            template:'index.html'
        })
    ]
};