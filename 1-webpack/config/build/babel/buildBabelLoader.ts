import type { IWebpackOptions } from "../../../webpack.config";
import { removeDataTestIdBabelPlugin } from "./removeDataTestIdBabelPlugin";

export const buildBabelLoader = (options: IWebpackOptions) => (
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
                "@babel/preset-env",
                "@babel/preset-typescript",
                [ "@babel/preset-react", { runtime: options.isDev ? "automatic" : "classic" } ]
            ],
            plugins: [
                options.isDev && [
                    removeDataTestIdBabelPlugin,
                    {
                        props: ["data-testid"]
                    }
                ]
            ].filter(Boolean)
          }
       }
    }
)