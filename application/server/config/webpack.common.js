const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server/src/index.tsx",
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
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
  target: "node", // in order to ignore built-in modules like path, fs, etc.
};
