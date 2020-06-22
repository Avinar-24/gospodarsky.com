const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.js",
    path: path.resolve(`${__dirname}/../..`, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      custom: [
        {
          test: "main.js",
          attribute: "type",
          value: "text/jsx",
        },
      ],
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
    }),
  ],
});
