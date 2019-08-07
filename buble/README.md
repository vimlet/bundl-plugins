# @bundl/buble

[Bundl](https://bundljs.org) plugin for [Bublé](https://buble.surge.sh)

## Installation

```sh
# npm
npm i -D @bundl/buble
# yarn
yarn add -D @bundl/buble
```

## Usage

```js
const buble = require('@bundl/buble') 

module.exports = {
  output: {
    'build/bundle.js': {
      use: buble,
      input: 'src/**.js'
    }
  }
}
```