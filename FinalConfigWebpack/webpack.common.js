const path = require("path");

module.exports = {
  // entry chinh de bundle
  entry: ["./src/index.js", "./src/index.less"],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
    // libraryTarget: "commonjs2" // THIS IS THE MOST IMPORTANT LINE!
    //:mindblow: I wasted more than 2 days until realize
    // this was the line most important in all this guide.
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9999
  },
  module: {
    rules: [
      {
        // các file .js or .jsx được loader bởi 'babel-loader'
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: [/node_modules/] // nó sẽ không tìm trong folder /node_modules
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/,
        loader: "file-loader"
      }
    ]
  }
};
