const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server/src/index.tsx",
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
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  target: "node",
};