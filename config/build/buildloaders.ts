import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import type { IWebpackOptions } from "../../webpack.config";

export const buildLoaders = (options: IWebpackOptions): ModuleOptions['rules'] => [
    {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    },
    {
        test: /\.scss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            { 
                loader: "css-loader",
                options: {
                    modules: {
                        localIdentName: options.isDev ? "[path][name]__[local]" : "[hash:base64:8]"
                    }
                }
            },
            "sass-loader"
        ],
    },
    {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    },
    {
        test: /\.(png|jpg|jpeg|tiff|gif)/i,
        type: 'asset/resource'
    },
    {
        test: /\svg&/,
        use: {
            loader: "@svgr/webpack",
            options: {
                icon: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: "convertColors",
                            params: {
                                currentColor: true
                            }
                        }
                    ]
                }
            }
        }
    }
];