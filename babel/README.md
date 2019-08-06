# @bundl/babel

Bundl plugin to compile code using Babel.

## Installation

```sh
# npm
npm i -D @bundl/babel
# yarn
yarn add -D @bundl/babel
```

## Usage

### With `babel.config.js`

```js
const babel = require('@bundl/babel') 

module.exports = {
  output: {
    'build/bundle.js': {
      use: babel,
      input: 'src/**.js'
    }
  }
}
```

### Custom options

```js
const babel = require('@bundl/babel') 

module.exports = {
  output: {
    'build/bundle.js': {
      use: entry => babel(entry, {
        presets: ['@babel/preset-env']
      }),
      input: {
        'src/**.js': true
      }
    }
  }
}
```