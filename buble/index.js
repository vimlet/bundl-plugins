const buble = require('buble')

module.exports = (entry, opts) => {
  entry.content = buble.transform(entry.content, opts).code
  return entry
}