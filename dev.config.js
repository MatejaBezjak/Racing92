const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development", 
    entry: {
        main: "./src/index.js",
        sliderPages: "./src/js/slider-pages.js",
        homePage: "./src/js/home-page.js",
        submenu: "./src/js/submenu.js",
        pageNavigation: "./src/js/navigator.js",
        filterBar: "./src/js/filter-bar.js",
        crossPageNav: "./src/js/crosspage-navigation.js",
        searchBar: "./src/js/search-bar.js"




    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].bundle.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'css-hot-loader',
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
                        // options: {
                        //     sourceMap: true,
                        //     outputStyle: "expanded",
                        //     sourceMapContents: true
                        // }
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
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        watchContentBase: false,
        compress: true,
        port: 3300,
        stats: {
            all: false,
            errors: true,
            warnings: true
        },
        open: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/style.css"
        })
    ]
}