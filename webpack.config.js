const webpack = require("webpack");
const {resolve} = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
module.exports = {

    entry: [
        resolve(__dirname, "js", "index.js")
    ],

    output: {
        filename: "app.bundle.js",
        path: resolve(__dirname, "dist"),
        publicPath: "/"
    },

    resolve: {
        extensions: [".js"]
    },

    devtool: "#source-map",

    devServer: {
        hot: true,
        contentBase: resolve(__dirname, "dist"),
        stats: "errors-only",
        open: true,
        publicPath: "/"
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        [
                            "env", {
                                "modules": false
                            }
                        ],
                        "stage-3",
                        "react"
                    ],
                    plugins: ["react-hot-loader/babel"]
                }
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test:/\.(jpe?g|png|gif|svg)$/i,
                use: [
                    "url-loader?limit=10000"
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(["dist"])
    ]
};