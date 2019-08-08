const { minify } = require('terser')

module.exports = (entry, opts) => {
  entry.content = minify(entry.content, opts).code
  return entry
}