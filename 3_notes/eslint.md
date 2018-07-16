# 代码风格

我理解的「代码风格」是在开发过程中编写代码的习惯。
而良好的代码风格，使得代码整体在易读性、可维护性上更有优势。

# 编码规范

而编码规范，则是在代码风格的基础上形成的。在团队协作开发中，为了统一代码风格而出现的一个「约定」列表。

airbnb 的编码规范：
  https://github.com/airbnb/javascript

中文翻译版：
  https://github.com/libertyAlone/airbnb-javascript-style-guide-cn

# 代码检查工具
很多语言都提供了 Lint 工具来实现这样的功能，JavaScript 也有类似的工具：ESLint。
除了可以集成到构建工具中(如：webpack)在构建过程中检查代码风格以外。还可以通过将 ESLint 和代码编辑器相结合以提供代码风格的实时校验。以及在 gitlab CI 中也可以进行检查。

## eslint

### 安装

```
  npm install eslint -g
```

如果当前开发环境与 ESLint 当前的解析功能与 JavaScript ES6〜9 的持续更改不兼容，ESLint 解析会出现错误。
(摘自：https://stackoverflow.com/questions/36001552/eslint-parsing-error-unexpected-token)

添加以下配置，到 .eslintrc 文件中。
``` js
  {
    parser: "babel-eslint",
    ......
  }
```
并安装
``` sh
  npm install babel-eslint
```

### 规则配置

规则列表

http://eslint.cn/docs/rules/


初始化规则

``` sh
  ./node_modules/.bin/eslint --init
```

.eslintrc.json

``` js
  rules: {
      "规则名": [规则值, 规则配置]
  }
```

示例
``` js
  {
      "extends": "standard",
      "installedESLint": true,
      "plugins": [
          "airbnb"
      ],
      "rules": {
          // 关闭额外的分号检查
          // 0:关闭，1:警告，2:异常
          "semi": 0,
          // 字符串必须使用单引号
          "quotes": [
              "error",
              "single"
          ]
      }
  }
```

规则值：

```
  "off" 或者 0  // 关闭规则关闭
  "warn" 或者 1  // 在打开的规则作为警告（不影响退出代码）
  "error" 或者 2  // 把规则作为一个错误（退出代码触发时为1）
```

https://github.com/Meow-z/study-webpack-step-by-step/blob/master/2_new_ui/.eslintrc.js

### 运行

```
  ./node_modules/.bin/eslint yourfile.js
```

命令行工具有几个选项，你可以通过运行 `eslint -h` 查看所有选项。
(http://eslint.cn/docs/user-guide/command-line-interface)

#### 批量操作

```
  ./node_modules/.bin/eslint yourfile.js --fix
```

#### 通过代码注释进行单行规则配置

如果特殊代码一定要违反规则，如何进行特殊情况的处理

单行代码
``` js
  // eslint-disable-line
  // eslint-disable-next-line
```

多行代码
``` js
  /* eslint-disable */
    ......
  /* eslint-enable */
```

### 结合 webpack 打包工具

#### 安装 eslint-loader
```npm install --save-dev eslint-loader```

#### 配置 loader
以下是 create-react-app 中的配置
```
{
  test: /\.(js|jsx|mjs)$/,
  enforce: 'pre',
  use: [
    {
      options: {
        formatter: eslintFormatter,
        eslintPath: require.resolve('eslint'),

      },
      loader: require.resolve('eslint-loader'),
    },
  ],
  include: paths.appSrc,
},
```

当然，我们使用 create-react-app 则不需要考虑这些了。

### 结合 vscode 插件

#### 安装插件
进入 「设置－管理扩展」搜索 `eslint` 并安装完成。
(https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

#### 看到提示
1. 这时候，我们进入代码中，就能发现不符合编码规范的代码上有了明显的提醒。
2. 如果想看到一个项目中所有的提示，点击左下角的 `x ! `就能看到
