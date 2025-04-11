import path from "path"

import HtmlWebpackPlugin from"html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
;
import type { IWebpackOptions } from "../../webpack.config";
import { Configuration } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

// 
export const buildPlugins = (options: IWebpackOptions): Configuration['plugins'] => {
    return [
        // 
        // new webpack.ProgressPlugin(),
        
        // 
        new HtmlWebpackPlugin({ template: options.paths.html }),
        
        // 
        options.isProd && new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "css/[name].[contenthash].css"
        }),

        //
        options.isAnalyzer && new BundleAnalyzerPlugin()
    ].filter(Boolean);
}