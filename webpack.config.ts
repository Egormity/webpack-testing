import path from "path"

import { buildWebpack } from './config/build/buildWebpack';

// 
interface IWebpackEnv {
  mode: "development" | "production",
  port: number
}

// 
export interface IWebpackOptions extends IWebpackEnv {
  isDev: boolean;
  isProd: boolean;
  paths: {
    entry: string;
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
    mode: env.mode || "development",
    port: env.port || 3000,
    isDev,
    isProd,
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      html: path.resolve(__dirname, "public", "index.html"),
      output: path.resolve(__dirname, "dist"),
      src: path.resolve(__dirname, "src"),
    },
    isAnalyzer: true
  })
};
