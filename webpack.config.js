/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");

module.exports = {
  target: "web",
  devtool: "source-map",
  entry: "./dev/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
        /*  options: {
          transpileOnly: true,
        }, */
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".tsx", ".ts", ".json"] },
  output: {
    path: path.resolve(__dirname, "dist/dev/"),
    publicPath: "/dist/dev/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dev/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/dev/",
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
