# 介绍
todo

# 研发相关
## 如何运行
todo
npm install
启动开发的端口
npm run devServer
访问 9000 端口

## 目录结构规划
|-- public/ 公共文件目录
    |-- index.html 入口 html 的模板
    |-- style.css 样式
    |-- 图片等资源
|-- build/ 构建出来的文件
    |-- index.html
    |-- [name].[chunkhash].bundle.js
|-- node_modules/ 安装出来的软件包
|-- pages/ 各个页面（普通路由的页面
    |-- 包含嵌套路由（文件夹也可以是平级的？
|-- components/ 存放公共组件
    |-- Nav 导航
    |-- Footer 脚注
|-- layouts/ 页面模板, cli 预留
|-- utils/ 工具
    |-- i18n.js 国际化
    |-- locales/ 国际化翻译文件
    |-- theme.js (主题
    |-- axios.js (todo
|-- mock/ 假数据（预留
|-- main.js 入口
|-- router.js (入口对应路由
|-- store.js (todo
|-- reducers.js (todo
|-- webpack.config.js (生产环境的配置
|-- webpack.config.dev.js (开发时使用的配置，后续会提取出来 webpack.config.base.js 的
|-- package.json

## 备注 可能会踩的坑
+ 如果新加文件 devServer 需要重启，不然读不到这个文件的
