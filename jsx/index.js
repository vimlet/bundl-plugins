const { fromString } = require('jsx-transform')

module.exports = (entry, opts) => {
  entry.content = fromString(entry.content, opts || {
    factory: 'React.createElement'
  })
  return entry
}