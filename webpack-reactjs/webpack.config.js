const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { use: "babel-loader", test: /\.js$/ },
      {
        use: ExtractTextPlugin.extract({
          use: "css-loader",
          fallback: "style-loader"
        }),
        test: /\.css$/
      }
    ]
  },
  plugins: [new ExtractTextPlugin("style.css")]
};
