const path = require("path");

module.exports = {
  // entry chinh de bundle
  entry: ["./src/index.js", "./src/index.scss"],
  output: {
    filename: "./index.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        // các file .js or .jsx được loader bởi 'babel-loader'
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: [/node_modules/] // nó sẽ không tìm trong folder /node_modules
      }
    ]
  }
};
