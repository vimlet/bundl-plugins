# @bundl/sass

[Sass](https://sass-lang.com) plugin for [Bundl](https://bundljs.org).

## Installation

```sh
# npm
npm i -D @bundl/sass
# yarn
yarn add -D @bundl/sass
```

## Usage

### Scss

```js
const sass = require('@bundl/sass')

module.exports = {
  output: {
    'build/style.css': {
      use: sass(),
      input: 'src/*.sass'
    }
  }
}
```

### Sass

```js
const sass = require('@bundl/sass')

module.exports = {
  output: {
    'build/style.css': {
      use: sass({ indentedSyntax: true }),
      input: 'src/*.sass'
    }
  }
}
```