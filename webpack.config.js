const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },

  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react", "stage-3"]
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',  // if this plugins fails it will use style loader to load styles
          use: [
            'css-loader', 'sass-loader'
          ]
        })
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js'}), // this plugin is to make, common imports like (jquery, lodash) to bundle to vendor.js 
  ],
  devtool: "source-map", // we need to give this so that it maps the source code to bundled file during debugging
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, "dist"),
  },
 }
