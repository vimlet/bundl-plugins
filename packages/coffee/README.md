# @bundl/coffee

[CoffeeScript](https://coffeescript.org/) plugin for [Bundl](https://bundljs.org).

## Installation

```sh
# npm
npm i -D @bundl/coffee
# yarn
yarn add -D @bundl/coffee
```

## Usage

```js
const coffee = require('@bundl/coffee')

module.exports = {
  output: {
    'build/bundle.js': {
      use: coffee(),
      input: 'src/**.js'
    }
  }
}
```

### Custom options

```js
const coffee = require('@bundl/coffee')

module.exports = {
  output: {
    'build/bundle.js': {
      use: coffee({
        sourceMap: true
      }),
      input: 'src/**.js'
    }
  }
}
```
