const path = require("path");

//Caching lại để up performance
const VENDOR_LIBS = [
  "@ckeditor/ckeditor5-build-classic",
  // "@ckeditor/ckeditor5-easy-image",
  "@ckeditor/ckeditor5-react",
  "@fortawesome/fontawesome-svg-core",
  "@fortawesome/free-brands-svg-icons",
  "@fortawesome/free-solid-svg-icons",
  "@fortawesome/react-fontawesome",
  "@popperjs/core",
  "antd",
  "autoprefixer",
  "axios",
  "bootstrap",
  "exports-loader",
  // "font-awesome",
  "html-react-parser",
  "jquery",
  "js-cookie",
  "jsonwebtoken",
  "lodash",
  "moment",
  "path",
  "popper.js",
  "react",
  "react-dom",
  "react-highlight-words",
  "react-redux",
  "react-resizable",
  "react-router-dom",
  // "react-scripts",
  "react-swipeable",
  "react-toastify",
  "redux",
  "redux-form",
  "redux-thunk",
  "reqwest",
  "resize-observer-polyfill"
];

module.exports = {
  // entry chinh de bundle
  entry: {
    bundle: "./src/index.js",
    less: "./src/index.less",
    vendor: VENDOR_LIBS
  },
  output: {
    filename: "[name].[hash].js",
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
  },
  optimization: {
    //chunk các vendor ra cho nhẹ
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: "~",
      automaticNameMaxLength: 30,
      cacheGroups: {
        defaultVendors: {
          filename: "[name].[hash].js"
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
