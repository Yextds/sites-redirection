const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
        util: "./src/util.js",
        analytics: "./src/analytics.js"
      },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets'),
        clean: true
    },
  //   plugins: [
  //     new HtmlWebpackPlugin({
  //       template: "./src/template.html",
  //     }),
  //     new CleanWebpackPlugin()
  // ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
            // Order is last to first
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                'postcss-loader'
            ],
          },
          {
          test: /\.(png|jpe?g|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'images/[name].[ext]'
                }
              }
            ]
          }
        ],
      }

};
