const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // 入口文件 entry: {[entryChunkName: string]: string|Array<string>}
  // babel-polyfill 解决 ie9 和一些低版本的高级浏览器对 es6 新语法并不支持
  entry: {
    main: ['babel-polyfill', path.resolve(__dirname, "./app/main.js")]  // 可配置多个入口
  },
  // 输出
  output: {
    path: path.resolve(__dirname, "./public"),  // 打包后的文件存放的地方
    // 打包后输出文件的文件名
    // 使用 [name] 的占位符，使得可以根据入口有不同的名字
    // 使用 [id]、[hash] 或者 [hash:8] 的占位符，使得可以根据入口有不同的名字
    filename: 'bundle.js',
    // chunkname 未被列在 entry 中, 却又需要被打包出来的文件命名配置
    // 按需加载中需要使用 todo
    chunkFilename: "[name].[id].bundle.js"
  },
  // 开发过程中的
  devtool: 'inline-source-map',
  devServer: {
    // 告诉服务器在哪儿找文件的
    // devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
    // 默认情况下，将使用当前工作目录作为提供内容的目录，但是你可以修改为其他目录 devServer.contentBase
    contentBase: path.resolve(__dirname, "./public"),
    // 也可以从多个目录提供内容
    // contentBase: [path.join(__dirname, "public"), path.join(__dirname, "assets")]
    // 所有来自 dist/ 目录的文件都做 gzip 压缩
    compress: true,
    port: 9000,
    // 热替换 http://www.css88.com/doc/webpack/guides/hot-module-replacement/
    inline: true
  },
  module: {
    // webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'  // 在 webpack 的 module 部分的 loaders 里进行配置即可
    }, {
    //   // 用正则去匹配要用该 loader 转换的 CSS 文件
    //   test: /\.css$/,
    //   use: ExtractTextPlugin.extract({
    //     // 转换 .css 文件需要使用的 Loader
    //     use: ['css-loader?minimize'],
    //   }),
    // }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',  // http://www.css88.com/doc/webpack/loaders/css-loader/
          options: {
            modules: true,
            minimize: true,
            localIdentName: '[path][name]__[local]--[hash]'  // 配置 css 的 className 避免样式冲突 但是好像有点问题 hash 不会变化
          }
        }
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
  },
  // plugins: [
  //   new ExtractTextPlugin({
  //     // 从 .js 文件中提取出来的 .css 文件的名称
  //     filename: `[name].css`,
  //   }),
  // ]
}