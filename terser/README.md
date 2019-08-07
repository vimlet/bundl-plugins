# @bundl/terser

Bundl plugin for Terser.

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
    'build/style.css': {
      use: terser,
      input: 'src/*.js'
    }
  }
}
```