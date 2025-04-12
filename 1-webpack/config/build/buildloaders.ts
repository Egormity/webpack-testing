import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript"

import type { IWebpackOptions } from "../../webpack.config";
import { buildBabelLoader } from "./babel/buildBabelLoader";

export const buildLoaders = (options: IWebpackOptions): ModuleOptions["rules"] => [
    {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
    // {
    //     test: /\.tsx?$/,
    //     use: [
    //         {
    //             loader: "ts-loader",
    //             options: {
    //                 transpileOnly: true,
    //                 getCustomTransformers: () => ({
    //                     before: [optionsisDev && ReactRefreshTypeScript()].filter(Boolean),
    //                 }),
    //             }
    //         }
    //     ],
    //     exclude: /node_modules/,
    // },
    buildBabelLoader(options),
    {
        test: /\.(png|jpg|jpeg|tiff|gif)/i,
        type: "asset/resource"
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