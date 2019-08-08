const buble = require('buble')

module.exports = opts => {
  return entry => {
    entry.content = buble.transform(entry.content, opts).code
    return entry
  }
}