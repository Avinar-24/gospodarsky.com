const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  entry: "./server/index.tsx",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve("build"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  target: "node",
};
