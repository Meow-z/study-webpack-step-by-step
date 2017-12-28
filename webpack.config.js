const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // http://www.css88.com/doc/webpack/configuration/module/
  module: {
    // webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。
    rules: [{
        // 在这种情况下，以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader.
        test: /\.css$/,
        use: [
            'style-loader',  // http://www.css88.com/doc/webpack/loaders/style-loader/
            'css-loader'  // http://www.css88.com/doc/webpack/loaders/css-loader/
        ]
    }, {
        // 加载图片
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader'  // http://www.css88.com/doc/webpack/loaders/file-loader/
        ]
    }, {
        // 加载字体
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
    }, {
        // 加载数据
        test: /\.(csv|tsv)$/,
        use: [
            'csv-loader'
        ]
    }, {
        // 加载数据
        test: /\.xml$/,
        use: [
            'xml-loader'
        ]
    }]
  }
};