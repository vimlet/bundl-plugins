# @bundl/buble

[Buble](https://buble.surge.sh) plugin for [Bundl](https://bundljs.org).

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
      use: buble(),
      input: 'src/**.js'
    }
  }
}
```

### Custom options

```js
const buble = require('@bundl/buble') 

module.exports = {
  output: {
    'build/bundle.js': {
      use: buble(),
      input: 'src/**.js'
    }
  }
}
```