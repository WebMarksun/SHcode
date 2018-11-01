const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
module.exports = {
  //entry:'./src/app.js',
  entry: {
    app: './src/app.js',
    tools: './src/tools.js'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].[chunkhash:5].min.js'
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  resolve:{
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'miaov$': __dirname + '/src/img/miaov.js'
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'miaov.html',
      template: 'abc.html',
      inject: true,
      chunksSortMode: 'dependency',
      //chunks: ['app']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),

    /*new HtmlWebpackPlugin({
      filename: 'ketang.html',
      template: 'abc.html',
      inject: true,
      chunksSortMode: 'dependency',
      chunks: ['tools']
    }),
     new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: false,
      parallel: true
    }) ,*/
    new OptimizeCSSPlugin(),
    new ExtractTextPlugin({
      filename: "/style/styles.css"
    }),
  ]
}