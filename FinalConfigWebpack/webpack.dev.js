const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

// nó ghép với file webpack`webpack.common.js` đã cấu hình cơ bản để sử dụng.
module.exports = merge(common, {
  // môi trường : development
  mode: "development",

  // Nó sẽ hiển thị lỗi ở đâu (vì khi lỗi nó sẽ hiển thị ở file đã build trong folder dist
  // mà khi build là cú pháp Js5 cái ta cần là chính xác lỗi chỗ nào,
  // đó là lý do bạn nên để 'inline-source-map'
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  module: {
    // các file scss được loader bởi style-loader, css-loader, sass-loader
    rules: [
      {
        test: /\.(less)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              modifyVars: {
                "primary-color": "#1DA57A",
                "link-color": "#1DA57A",
                "border-radius-base": "2px"
                // or
                // hack: `true; @import "./src/index.less";` // Override with less file
              },
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader" // inject CSS to page
          },
          {
            loader: "css-loader" // translates CSS into CommonJS modules
          },
          {
            loader: "postcss-loader", // Run post css actions
            options: {
              plugins: function() {
                // post css plugins, can be exported to postcss.config.js
                return [require("precss"), require("autoprefixer")];
              }
            }
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  watch: true,
  plugins: [
    //HotModuleReplacementPlugin: nó giúp tạo ra server riêng tự động reload khi có bất kỳ thay đổi nào từ các file hệ client của project/
    new webpack.HotModuleReplacementPlugin(),
    //AntdDayjsWebpackPlugin Thay thế moment.js cho nó nhẹ hơn xí
    new AntdDayjsWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack React Example",
      inject: false,
      template: require("html-webpack-template"),
      meta: [
        {
          name: "description",
          content: "A better default template for html-webpack-plugin."
        }
      ],
      mobile: true,
      lang: "en-US",
      bodyHtmlSnippet: '<div id="root"></div>'
    }),
    //antd

    new webpack.NormalModuleReplacementPlugin(
      /node_modules\/antd\/lib\/style\/index\.less/,
      path.resolve(__dirname, "/src/index.less")
    ),
    // #antd { @import '~antd/es/style/core/index.less'; @import '~antd/es/style/themes/default.less'; }

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.$": "jquery",
      "window.jQuery": "jquery"
    })
  ]
});
