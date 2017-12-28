开发过程中如何运行



step 1(tag 0.2):
+ 生成 bundle.js
    ``` ./node_modules/.bin/webpack --config webpack.config.js ```
    注：--config 指定配置文件，如果名称为 webpack.config.js 则不需要指定，webpack 命令将默认选择使用它。

step 0(tag 0.1):
+ 安装依赖
    ```
    npm install
    ```
+ 生成 bundle.js
    ```
    ./node_modules/.bin/webpack src/index.js dist/bundle.js
    ```
+ 访问
    在浏览器中打开 index.html