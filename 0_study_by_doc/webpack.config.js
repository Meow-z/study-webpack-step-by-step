const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    // 告诉服务器在哪儿找文件的
    // devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
    // 默认情况下，将使用当前工作目录作为提供内容的目录，但是你可以修改为其他目录 devServer.contentBase
    contentBase: path.join(__dirname, "dist"),
    // 也可以从多个目录提供内容
    // contentBase: [path.join(__dirname, "public"), path.join(__dirname, "assets")]
    // 所有来自 dist/ 目录的文件都做 gzip 压缩
    compress: true,
    port: 9000,
    // 热替换 http://www.css88.com/doc/webpack/guides/hot-module-replacement/
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
    title: 'Output Management'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    // 输出文件的位置的
    path: path.resolve(__dirname, 'dist')
  }
};