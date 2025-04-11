import type { WebpackConfiguration } from "webpack-dev-server";

import type { IWebpackOptions } from "../../webpack.config";

import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildloaders";
import { buildPlugins } from "./buildPlugins";

export const buildWebpack = (options: IWebpackOptions): WebpackConfiguration => ({
  plugins: buildPlugins(options),

  // 
  mode: options.mode,
  entry: options.paths.entry,
  
  // 
  module: { rules: buildLoaders(options) },
  resolve: { 
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@/": options.paths.src
    }
   },
  
  // 
  devtool: options.isDev ? "inline-source-map" : undefined,
  devServer: buildDevServer(options),
  
  // 
  output: {
    path: options.paths.output,
    filename: "bundle.[contenthash].js",
    clean: true,
    publicPath: "/"
  },
})