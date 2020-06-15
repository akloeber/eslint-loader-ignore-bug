"use strict";

const path = require("path");

module.exports = (env = {}) => ({
  mode: "production",
  context: __dirname,
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        enforce: "pre",
        //exclude: /node_modules/,
        use: [
          {
            loader: "eslint-loader",
            options: {
              // ignorePath: "/Users/aske/Repos/tr8/.eslintignore",
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                noEmit: false,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
});
