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
            template: path.resolve(__dirname, "src/index.html"),
            excludeChunks: ["pageNavigation", "filterBar", "crossPageNav", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "actu_page.html",
            template: path.resolve(__dirname, "src/actu_page.html"),
            excludeChunks: ["homePage", "filterBar", "crossPageNav", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "tv_page.html",
            template: path.resolve(__dirname, "src/tv_page.html"),
            excludeChunks: ["homePage", "pageNavigation", "crossPageNav", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "cgv_page.html",
            template: path.resolve(__dirname, "src/cgv_page.html"),
            excludeChunks: ["homePage", "pageNavigation", "filterBar", "crossPageNav", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "article_page.html",
            template: path.resolve(__dirname, "src/article_page.html"),
            excludeChunks: ["homePage", "pageNavigation", "filterBar", "crossPageNav", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "phototheque_page.html",
            template: path.resolve(__dirname, "src/phototheque_page.html"),
            excludeChunks: ["homePage", "pageNavigation", "crossPageNav", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "phototheque-ancienne_page.html",
            template: path.resolve(__dirname, "src/phototheque-ancienne_page.html"),
            excludeChunks: ["homePage", "pageNavigation", "crossPageNav", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "cgu_page.html",
            template: path.resolve(__dirname, "src/cgu_page.html"),
            excludeChunks: ["homePage", "pageNavigation", "filterBar", "crossPageNav", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "cookies_page.html",
            template: path.resolve(__dirname, "src/cookies_page.html"),
            excludeChunks: ["homePage", "pageNavigation", "filterBar", "crossPageNav", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "politique_page.html",
            template: path.resolve(__dirname, "src/politique_page.html"),
            excludeChunks: ["homePage", "pageNavigation", "filterBar", "crossPageNav", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "mentions_page.html",
            template: path.resolve(__dirname, "src/mentions_page.html"),
            excludeChunks: ["homePage", "pageNavigation", "filterBar", "crossPageNav", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "contact_page.html",
            template: path.resolve(__dirname, "src/contact_page.html"),
            excludeChunks: ["homePage", "pageNavigation", "filterBar", "crossPageNav", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "partenaires_page.html",
            template: path.resolve(__dirname, "src/partenaires_page.html"),
            excludeChunks: ["homePage", "filterBar", "crossPageNav", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "effectif_page.html",
            template: path.resolve(__dirname, "src/effectif_page.html"),
            excludeChunks: ["homePage", "filterBar", "crossPageNav", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "resultats_page.html",
            template: path.resolve(__dirname, "src/resultats_page.html"),
            excludeChunks: ["homePage", "sliderPages", "pageNavigation", "filterBar", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "calendrier_page.html",
            template: path.resolve(__dirname, "src/calendrier_page.html"),
            excludeChunks: ["homePage", "sliderPages", "pageNavigation", "filterBar", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "classement_page.html",
            template: path.resolve(__dirname, "src/classement_page.html"),
            excludeChunks: ["homePage", "sliderPages", "pageNavigation", "filterBar", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "fiche-joueur_page.html",
            template: path.resolve(__dirname, "src/fiche-joueur_page.html"),
            excludeChunks: ["homePage","pageNavigation", "filterBar", "crossPageNav", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "notre-histoire_page.html",
            template: path.resolve(__dirname, "src/notre-histoire_page.html"),
            excludeChunks: ["homePage", "filterBar", "crossPageNav", "searchBar"]
        }),
        new HtmlWebpackPlugin({
            filename: "resultats-recherche_page.html",
            template: path.resolve(__dirname, "src/resultats-recherche_page.html"),
            excludeChunks: ["homePage", "pageNavigation", "filterBar", "crossPageNav"]
        }),
        new CopyWebpackPlugin([{
            from: 'src/images',
            to: 'images'
        }]),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })

        
    ]
}