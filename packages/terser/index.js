const { minify } = require('terser')

module.exports = opts => entry => {
  const result = minify(entry.content, opts)

  if (result.error) {
    throw result.error
  } else {
    entry.content = result.code
  }

  return entry
}
