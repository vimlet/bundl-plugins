# bundl-plugins 📦

Repository for officially supported packages for [Bundl](https://bundljs.org).

## Using plugins

Install the plugin you need:

```sh
# npm
npm i -D @bundl/<package> <package>
# yarn
yarn add -D @bundl/<package> <package>
```

And then import it in bundl.config.js:

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

## Available plugins

* [Babel](https://www.npmjs.com/package/@bundl/babel)
* [Stylus](https://www.npmjs.com/package/@bundl/stylus)
* [Bublé](https://www.npmjs.com/package/@bundl/buble)
* [Terser](https://www.npmjs.com/package/@bundl/terser)

## W.I.P plugins

* TypeScript
* Sass
* PostCSS
* JSX