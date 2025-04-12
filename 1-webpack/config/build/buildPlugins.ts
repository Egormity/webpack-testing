import path from "path";

import HtmlWebpackPlugin from"html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { Configuration, DefinePlugin } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import CopyPlugin from 'copy-webpack-plugin'

import type { IWebpackOptions } from "../../webpack.config";

// 
export const buildPlugins = (options: IWebpackOptions): Configuration['plugins'] => {
    return [
        // 
        // new webpack.ProgressPlugin(),
        
        // 
        new DefinePlugin({ __PLATFORM__: JSON.stringify(options.platform) }),

        // 
        new HtmlWebpackPlugin({ template: options.paths.html, favicon: path.resolve(options.paths.public, "favicon.ico") }),
        
        // 
        new ForkTsCheckerWebpackPlugin(),

        // 
        options.isDev && new ReactRefreshWebpackPlugin(),
        
        // 
        options.isProd && new CopyPlugin({
            patterns: [
              { from: path.resolve(options.paths.public, "locales"), to: path.resolve(options.paths.output, "locales") },
            ],
          }),

        // 
        options.isProd && new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "css/[name].[contenthash].css"
        }),

        //
        options.isAnalyzer && new BundleAnalyzerPlugin()
    ].filter(Boolean);
}