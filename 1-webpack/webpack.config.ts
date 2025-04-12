import path from "path"

import { buildWebpack } from './config/build/buildWebpack';

// 
interface IWebpackEnv {
  port?: number
  mode?: "development" | "production",
  platform?: "mobile" | "desktop"
}

// 
export interface IWebpackOptions extends Required<IWebpackEnv> {
  isDev: boolean;
  isProd: boolean;
  paths: {
    entry: string;
    public: string;
    html: string;
    output: string;
    src: string
  }
  isAnalyzer?: boolean
}

// 
export default (env: IWebpackEnv) => {
  const isDev = env.mode === "production";
  const isProd = !isDev;

  return buildWebpack({
    port: env.port || 3000,
    mode: env.mode || "development",
    platform: env.platform || "desktop",
    isDev,
    isProd,
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      public: path.resolve(__dirname, "public"),
      html: path.resolve(__dirname, "public", "index.html"),
      src: path.resolve(__dirname, "src"),
      output: path.resolve(__dirname, "dist"),
    },
    isAnalyzer: false
  })
};
