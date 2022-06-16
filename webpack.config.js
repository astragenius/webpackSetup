const path = require('path');

module.exports = {
    mode: "development",
    devtool: 'source-map',

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
        ]
    }

   
};