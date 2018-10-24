const webpack = require('webpack');

//This file exports our project's Webpack configuration object.
module.exports = {
    // add our module loader.
    module: {
        loaders: [
            {
                //check for any file that ends with .js, we excluded any file in node_modules directory
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'latest', 'stage-0', 'react']
                }
            },
            {
                // any file that ends with .css and is not in node_modules directory
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                // any file that ends with .css and is not in node_modules directory
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader'
            }
        ]
    },
    entry: './src/index.js',
    output: {
        //get an absolute path for current directory, You can use __dirname
        path: './dist/assets',
        filename: './bundle.js',
        publicPath: 'assets'
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: '8080'
    },
    //You can configure Webpack to automatically 'watch' the project directory whenever Webpack is run.
    watch: true
};





// module.exports = {
//     entry: './src/1_helloWorld.jsx',
//     output: {
//         path: 'dist/assets',
//         filename: 'bundle.js',
//         publicPath: 'assets'
//     },
//     // devServer: {
//     //     inline: true,
//     //     contentBase: './dist',
//     //     port: 'http://sandbox.acoelho.qa'
//     // },
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 exclude: /(node_modules)/,
//                 loader: ["babel-loader"],
//                 query: {
//                     presets: ["latest", "stage-0", "react"]
//                 }
//             }
//         ]
//     }
// };