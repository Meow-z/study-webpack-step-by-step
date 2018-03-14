module.exports = {
  // entry:  __dirname + "/app/main.js",  // 唯一入口文件
  // babel-polyfill 解决 ie9 和一些低版本的高级浏览器对 es6 新语法并不支持
  entry: ['babel-polyfill', __dirname + "/app/main.js"], // 入口文件
  output: {
    path: __dirname + "/public",  // 打包后的文件存放的地方
    filename: "bundle.js"  // 打包后输出文件的文件名
  }
}