开发过程中如何运行

step 6(tag 0.6):
+ 配置了 webpack-dev-server
+ 启动 ``` npm run start ```
+ 访问 ``` http://localhost:8080/ ```

step 5(tag 0.5):
+ 配置了 html-webpack-plugin(https://github.com/jantimon/html-webpack-plugin), 自动生成入口 html(不需要写了的)
+ 配置了 clean-webpack-plugin(https://www.npmjs.com/package/clean-webpack-plugin), 构建前清理 /dist

step 4(tag 0.4):
+ 配置了 loader，见 webpack.config.js

step 3(tag 0.3):
+ 生成 ``` npm run build```

step 2(tag 0.2):
+ 生成 bundle.js
    ``` ./node_modules/.bin/webpack --config webpack.config.js ```
    注：--config 指定配置文件，如果名称为 webpack.config.js 则不需要指定，webpack 命令将默认选择使用它。

step 1(tag 0.1):
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
