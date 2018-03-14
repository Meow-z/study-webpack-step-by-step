const path = require('path');

module.exports = {
  // entry:  __dirname + "/app/main.js",  // 唯一入口文件
  // babel-polyfill 解决 ie9 和一些低版本的高级浏览器对 es6 新语法并不支持
  entry: ['babel-polyfill', __dirname + "/app/main.js"],  // 入口文件
  output: {
    path: __dirname + "/public",  // 打包后的文件存放的地方
    filename: "bundle.js"  // 打包后输出文件的文件名
  },
  devtool: 'inline-source-map',
  devServer: {
    // 告诉服务器在哪儿找文件的
    // devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
    // 默认情况下，将使用当前工作目录作为提供内容的目录，但是你可以修改为其他目录 devServer.contentBase
    contentBase: path.join(__dirname, "public"),
    // 也可以从多个目录提供内容
    // contentBase: [path.join(__dirname, "public"), path.join(__dirname, "assets")]
    // 所有来自 dist/ 目录的文件都做 gzip 压缩
    compress: true,
    port: 9000,
    // 热替换 http://www.css88.com/doc/webpack/guides/hot-module-replacement/
    inline: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',  // 在 webpack 的 module 部分的 loaders 里进行配置即可
      query: {
          presets: ['es2015', 'react']
      }
    }],
    // webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。
    rules: [{
        // 在这种情况下，以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader.
        test: /\.css$/,
        use: [
            'style-loader',  // http://www.css88.com/doc/webpack/loaders/style-loader/
            'css-loader?minimize'  // minimize 告诉 css-loader 要开启 CSS 压缩。 http://www.css88.com/doc/webpack/loaders/css-loader/
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
}