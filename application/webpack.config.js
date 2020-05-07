const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = 8080;

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: "source-map-loader",
        enforce: "pre",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./template.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
