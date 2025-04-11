import type { Configuration } from "webpack-dev-server";

import type { IWebpackOptions } from "../../webpack.config";

// 
export const buildDevServer = (options: IWebpackOptions): Configuration => options.isDev ? {
    port: options.port,
    open: true,
    historyApiFallback: true
  } : undefined
