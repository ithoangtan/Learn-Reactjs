const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(less)$/,
        use: [
          MiniCssExtractPlugin.loader,
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
  plugins: [
    // nó sẽ clean thư mục`dist/js & dist/css` trước khi build
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["dist/js", "dist/css"]
    }),
    // nó sẽ minify file css
    new MiniCssExtractPlugin({
      filename: "index.css"
    }),
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
      bodyHtmlSnippet: '<div id="root"></div>',
      filename: "index.html"
    })
  ]
});
