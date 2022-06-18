const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    devtool: 'source-map',
    
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
       
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename: "assets/images/[name][ext]",
        clean: true,
        
        
    },

    devServer: {
        hot: true,
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        open: true,
        compress: true,
        port: 3000,
        historyApiFallback: true,
        

        
    },

    plugins: [new HtmlWebpackPlugin({
        titel: "My Webpack setup",
        template: "./src/template.html",
    }),
        new MiniCssExtractPlugin()
    ],

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
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },

            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                
                type: 'asset/resource',
                generator: {
                    filename: "assets/images/[name][ext]",
                },
        
              },
        ],
       
    }

   
};