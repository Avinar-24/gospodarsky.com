const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
//   devServer: {
//     host: 'localhost',
//     port: port,
//     historyApiFallback: true,
//     open: true
//   },
//   devtool: "source-map",
});