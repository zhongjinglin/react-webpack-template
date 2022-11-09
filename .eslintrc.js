module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint/eslint-plugin',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [''],
  rules: {
    // "error"/"off" 开启/关闭prettier
    'prettier/prettier': 'error',
    // 取消 { a, b, c } 多个变量需要换行
    'object-curly-newline': [0],
    // 禁止出现未使用的变量
    '@typescript-eslint/no-unused-vars': [2],
    // 箭头函数，箭头前后空格
    'arrow-spacing': [2, { before: true, after: true }],
    // 单行代码/字符串最大长度
    'max-len': [2, { code: 120 }],

    // react配置
    // jsx缩进2个空格
    'react/jsx-indent': [2, 2],
    // 强制组件方法顺序
    'react/sort-comp': [2],
    // 结束标签，组件省略闭合标签，html不省略闭合标签
    'react/self-closing-comp': [2, { component: true, html: false }],
    // 检查 Hook 的规则，不允许在if for里面使用
    'react-hooks/rules-of-hooks': [2],
    // 检查 effect 的依赖
    'react-hooks/exhaustive-deps': [2],
    // jsx不可使用未声明变量
    'react/jsx-no-undef': [2],
    // 遍历元素需加key
    'react/jsx-key': [2],
    // 不使用废弃方法
    'react/no-deprecated': [2]
  }
}
