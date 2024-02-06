const path = require("path");
const { merge } = require("webpack-merge");
const basic = require("./webpack.basic");

module.exports = merge(basic, {
  mode: "development",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});
