# @bundl/jsx

JSX Plugin for [Bundl](https://bundljs.org).

> Note that it doesn't compile using Babel. For Babel use [this](https://www.npmjs.com/package/@bundl/babel) plugin.

## Installation

```sh
# npm
npm i -D @bundl/jsx
# yarn
yarn add -D @bundl/jsx
```

## Usage

```js
const jsx = require('@bundl/jsx')

module.exports = {
  output: {
    'build/bundle.js': {
      use: jsx,
      input: 'src/*.js'
    }
  }
}
```

### Custom JSX factory

```js
const jsx = require('@bundl/jsx')

module.exports = {
  output: {
    'build/bundle.js': {
      use: entry => jsx(entry, { 
        factory: 'preact.h'
      }),
      input: 'src/*.js'
    }
  }
}
```