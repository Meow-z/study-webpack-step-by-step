module.exports = {
  "parser": "babel-eslint",
  // 0: off, 1: warning, 2: error
  "rules": {
    /* Possible Errors */
    "no-empty": [1, { "allowEmptyCatch": true }],  // http://eslint.cn/docs/rules/no-empty#options
    /* Best Practices */
    "no-multi-spaces": [2],  // 禁止多个空格
    /* Strict Mode */
    "strict": [2],  // http://eslint.cn/docs/rules/strict
    /* Variables */
    "no-unused-vars": [0],  // 定义未使用, 这个太多了，暂时去掉
    /* Node.js and CommonJS */
    /* Stylistic Issues */
    "indent": [2, 2, {"SwitchCase": 1}],  // 缩进
    "comma-spacing": [2, { "before": false, "after": true }],  // 逗号后空格
    "no-trailing-spaces": [2],  // 禁止行尾空格
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],  // 键值之间的空格
    /* ECMAScript 6 */
    "arrow-spacing": [2],  // 箭头函数两边的空格
    "jsx-quotes": ["error", "prefer-double"],  // jsx 中使用 “”
    "quotes": ["error", "single"],  // 除 jsx 外，使用 ''
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  }
};
