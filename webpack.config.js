const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: 'source-map',
    
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename: "assets/[name][ext]",
        clean: true,
    },

    devServer: {
        hot: 'only',
        static: {
            directory: path.resolve(__dirname, 'dist'),
        }
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
    })],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
        ],
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                
                type: 'asset/resource',
                generator: {
                    filename: "assets/[name][ext]",
                },
        
              },
        ],
       
    }

   
};