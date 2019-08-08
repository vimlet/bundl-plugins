# @bundl/babel

[Babel](https://babeljs.io) plugin for [Bundl](https://bundljs.org).

## Installation

```sh
# npm
npm i -D @bundl/babel @babel/core
# yarn
yarn add -D @bundl/babel @babel/core
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