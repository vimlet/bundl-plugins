const { compile } = require('coffeescript')

module.exports = opts => entry => {
  entry.content = compile(entry.content, opts)
  return entry
}
