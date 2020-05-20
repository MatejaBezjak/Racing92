const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "production", 
    entry: {
        main: "./src/index.js",
        sliderPages: "./src/js/slider-pages.js",
        homePage: "./src/js/home-page.js",
        submenu: "./src/js/submenu.js"



    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].bundle.js"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                defaultVendors: {
                    filename: "[name].bundle.js"
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            url: false
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/style.css"
        }),
        new HtmlWebpackPlugin({
            // title: "Nesto",
            filename: "index.html",
            template: path.resolve(__dirname, "src/index.html")
        }),
        new HtmlWebpackPlugin({
            filename: "actu_page.html",
            template: path.resolve(__dirname, "src/actu_page.html"),
            excludeChunks: ["homePage"]
        }),
        new HtmlWebpackPlugin({
            filename: "tv_page.html",
            template: path.resolve(__dirname, "src/tv_page.html"),
            excludeChunks: ["homePage"]
        }),
        new HtmlWebpackPlugin({
            filename: "cgv_page.html",
            template: path.resolve(__dirname, "src/cgv_page.html"),
            excludeChunks: ["homePage", "sliderPages"]
        }),
        new HtmlWebpackPlugin({
            filename: "article_page.html",
            template: path.resolve(__dirname, "src/article_page.html"),
            excludeChunks: ["homePage"]
        }),
        new CopyWebpackPlugin([{
            from: 'src/images',
            to: 'images'
        }]),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })

        
    ]
}