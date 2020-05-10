const merge = require("webpack-merge");
const common = require("./webpack.common.js");

console.log({ common });

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "source-map-loader",
        enforce: "pre",
      },
    ],
  },
});
