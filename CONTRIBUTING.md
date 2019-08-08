# Contribute

## Adding a new plugin

* Create a directory for your plugin which is named what this is plugin for.

Examples:

`@bundl/stylus` should have a directory **stylus**

`@bundl/sass` should have a directory **sass**

* Add `@vimlet/bundl` as a peer dependency (and optionally dev) to your plugin.

```json
  "peerDependencies": {
    "@vimlet/bundl": ">=1.1"
  }
```

* Install API for the plugin you want to create, for example `stylus`. Put it into devDependencies and peerDependencies (in package.json file):

```json
"peerDependencies": {
  "@vimlet/bundl": "latest",
  "stylus": "latest"
},
"devDependencies": {
  "stylus": "^0.54.5"
}
```

* Create `index.js` file with your plugin. It should be an exported function that returns another function.

First function has opts argument

`opts` - Optional argument in case plugin's API has some options, for example Babel has options for presets / plugins.

Second function has entry argument

`entry` - Bundl's entry, e.g. code you want to transform. The code itself is accessible via `entry.content`

Example:

```js
const someCoolAPI = require('...')

module.exports = opts => entry => {
  entry.content = someCoolAPI(entry.content, opts)
  return entry
}
```

Function can be both sync and async.

* Add license (MIT), version, keywords and description to package info.

Example `package.json`:
```json
{
  "name": "@bundl/stylus",
  "description": "Stylus plugin for Bundl",
  "version": "0.0.1",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "stylus": "^0.54.5"
  },
  "peerDependencies": {
    "@vimlet/bundl": ">=1.1",
    "stylus": ">=0.54.5"
  }
}
```

After writing a plugin you can submit a Pull Request and wait until we review it. Add a link to a tool you made plugin for.

## Fixing / extending existing plugin

* Make a fix
* Update version, for example v0.0.1 becomes v.0.0.2
* Submit a Pull Request and describe what doesn't work / what should be added
