# @bundl/terser

[Terser](https://www.npmjs.com/package/terser) plugin for [Bundl](https://bundljs.org).

## Installation

```sh
# npm
npm i -D @bundl/terser terser
# yarn
yarn add -D @bundl/terser terser
```

## Usage

```js
const terser = require('@bundl/terser')

module.exports = {
  output: {
    'build/bundle.js': {
      use: terser,
      input: 'src/*.js'
    }
  }
}
```

### Custom options

```js
const terser = require('@bundl/terser')

module.exports = {
  output: {
    'build/bundle.js': {
      use: entry => terser(entry, { toplevel: true }),
      input: 'src/*.js'
    }
  }
}
```