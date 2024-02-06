const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const basic = require("./webpack.basic");

module.exports = merge(basic, {
  mode: "production",
  output: {
    filename: "main.[contenthash].js",
    clean: true,
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name].[hash][ext]",
  },
  plugins: [new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
});
