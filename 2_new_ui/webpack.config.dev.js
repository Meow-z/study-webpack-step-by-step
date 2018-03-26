const path = require('path');
const fs = require('fs');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// ant design theme
// https://github.com/ant-tool/atool-build/blob/a4b3e3eec4ffc09b0e2352d7f9d279c4c28fdb99/src/getWebpackCommonConfig.js#L131-L138
const pkgPath = path.join(__dirname, 'package.json');;
const pkg = fs.existsSync(pkgPath) ? require(pkgPath) : {};
let theme = {};
if (pkg.theme && typeof(pkg.theme) === 'string') {
  let cfgPath = pkg.theme;
  // relative path
  if (cfgPath.charAt(0) === '.') {
    cfgPath = path.resolve(__dirname, cfgPath);
  }
  const getThemeConfig = require(cfgPath);
  theme = getThemeConfig();
} else if (pkg.theme && typeof(pkg.theme) === 'object') {
  theme = pkg.theme;
}

module.exports = {
  // 入口文件 entry: {[entryChunkName: string]: string|Array<string>}
  // babel-polyfill 解决 ie9 和一些低版本的高级浏览器对 es6 新语法并不支持
  entry: {
    main: ['babel-polyfill', path.resolve(__dirname, "./main.js")]  // 可配置多个入口
  },
  // 输出
  output: {
    path: path.resolve(__dirname, "./build"),  // 打包后的文件存放的地方
    // 加载异步资源需要对应的 URL 地址
    // 根据实际项目添加
    publicPath: '/',
    // 打包后输出文件的文件名
    // 使用 [name] 的占位符，使得可以根据入口有不同的名字
    // 使用 [id]、[hash] 或者 [hash:8] 的占位符，使得可以根据入口有不同的名字
    filename: '[name].[chunkhash].bundle.js',
    // chunkname 未被列在 entry 中, 却又需要被打包出来的文件命名配置
    // 按需加载中需要使用 todo
    chunkFilename: "[name].[chunkhash].bundle.js"
  },
  // source-map
  devtool: 'inline-source-map',
  devServer: {
    // 告诉服务器在哪儿找文件的
    // devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
    // 默认情况下，将使用当前工作目录作为提供内容的目录，但是你可以修改为其他目录 devServer.contentBase
    contentBase: path.resolve(__dirname, "./build"),
    // 也可以从多个目录提供内容
    // contentBase: [path.join(__dirname, "public"), path.join(__dirname, "assets")]
    // 所有来自 dist/ 目录的文件都做 gzip 压缩
    compress: true,
    historyApiFallback: true,
    host: 'localhost',  // 0.0.0.0
    disableHostCheck: true,  // 允许自己设置 host
    port: 9000,
    // 自动刷新网页实现实时预览 http://www.css88.com/doc/webpack/guides/hot-module-replacement/
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
      include: /node_modules/,
      use: ['style-loader', 'css-loader?minimize'],
    }, {
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
      test: /\.less$/,
      use: [{
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      }, {
          loader: "less-loader", // compiles Less to CSS
          options: { javascriptEnabled: true, modifyVars: theme}
      }]
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
  plugins: [
    // new ExtractTextPlugin({
    //   // 从 .js 文件中提取出来的 .css 文件的名称
    //   filename: `[name].css`,
    // }),

    // 生成 index.html http://www.css88.com/doc/webpack/plugins/html-webpack-plugin/
    // 更多配置项 https://github.com/jantimon/html-webpack-plugin#configuration
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
      title: "this is a title",
      filename: 'index.html'  // 输出文件的文件名称
    }),
  ]
}