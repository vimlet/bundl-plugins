# bundl-plugins 📦

[![Codacy grade](https://img.shields.io/codacy/grade/bdb915899bfb4959af79d12968f1461e?style=flat-square)](https://app.codacy.com/project/vimlet/bundl-plugins/dashboard) [![Travis](https://img.shields.io/travis/vimlet/bundl-plugins?style=flat-square)](https://travis-ci.org/vimlet/bundl-plugins)

Repository for officially supported packages for [Bundl](https://bundljs.org).

## Using plugins

Install the plugin you need:

```sh
# npm
npm i -D @bundl/<package>
# yarn
yarn add -D @bundl/<package>
```

And then import it in bundl.config.js:

```js
const babel = require('@bundl/babel') 

module.exports = {
  output: {
    'build/bundle.js': {
      use: babel(),
      input: 'src/**.js'
    }
  }
}
```

## Available plugins

* [Babel](https://www.npmjs.com/package/@bundl/babel)
* [Stylus](https://www.npmjs.com/package/@bundl/stylus)
* [Bublé](https://www.npmjs.com/package/@bundl/buble)
* [Terser](https://www.npmjs.com/package/@bundl/terser)
* [JSX](https://www.npmjs.com/package/@bundl/jsx)
* [Sass](https://www.npmjs.com/package/@bundl/sass)

## W.I.P plugins

* ESLint
* CoffeeScript
* LESS
