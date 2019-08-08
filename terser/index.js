const { minify } = require('terser')

module.exports = opts => entry => {
  entry.content = minify(entry.content, opts).code
  return entry
}