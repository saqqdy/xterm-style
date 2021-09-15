# xterm-style

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]
[![License][license-image]][license-url]

[npm-image]: https://img.shields.io/npm/v/xterm-style.svg?style=flat-square
[npm-url]: https://npmjs.org/package/xterm-style
[travis-image]: https://travis-ci.org/saqqdy/xterm-style.svg?branch=master
[travis-url]: https://travis-ci.org/saqqdy/xterm-style
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/xterm-style.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/xterm-style?branch=master
[david-image]: https://img.shields.io/david/saqqdy/xterm-style.svg?style=flat-square
[david-url]: https://david-dm.org/saqqdy/xterm-style
[snyk-image]: https://snyk.io/test/npm/xterm-style/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/xterm-style
[download-image]: https://img.shields.io/npm/dm/xterm-style.svg?style=flat-square
[download-url]: https://npmjs.org/package/xterm-style
[license-image]: https://img.shields.io/badge/License-MIT-yellow.svg
[license-url]: LICENSE

## 安装依赖

```shell
# 通过npm安装
npm install -S xterm-style
# 或者通过yarn安装
yarn add xterm-style
```

## 使用

### 配置说明

xterm-style 目前包含了下面这几套配置

-   `common`: 常规风格

### 引入方法

```js
import { Terminal } from 'xterm'
import { common as xtermTheme } from 'xterm-style'
const term = new Terminal({
    theme: xtermTheme
    // ...
})
```
