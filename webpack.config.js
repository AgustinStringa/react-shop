const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },
            {
                test: /\.(s[ac]ss|css)/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Project',
            filename: './index.html',
            meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            minify: true,
            template: './public/index.html',
            inject: true,
        }),
        new MiniCssExtractPlugin(
            {
                filename: '[name].css',
            }
        ),
    ],
}