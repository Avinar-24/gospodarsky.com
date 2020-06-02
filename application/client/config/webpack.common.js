const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

module.exports = {
  entry: "./client/src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/src/index.html",
      filename: "./index.html",
    }),
    new ScriptExtHtmlWebpackPlugin({
      custom: [
        {
          test: "main.js",
          attribute: "type",
          value: "text/jsx",
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
