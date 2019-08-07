# @bundl/stylus

[Stylus](http://stylus-lang.com) plugin for [Bundl](https://bundljs.org).

## Installation

```sh
# npm
npm i -D @bundl/stylus stylus
# yarn
yarn add -D @bundl/stylus stylus
```

## Usage

```js
const stylus = require('@bundl/stylus')

module.exports = {
  output: {
    'build/style.css': {
      use: stylus,
      input: 'src/*.styl'
    }
  }
}
```