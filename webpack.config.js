const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    // 告诉服务器在哪儿找文件的
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
    title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    // 输出文件的位置的
    path: path.resolve(__dirname, 'dist')
  }
};