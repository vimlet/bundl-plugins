const { fromString } = require('jsx-transform')

module.exports = opts => entry => {
  entry.content = fromString(entry.content, opts || {
    factory: 'React.createElement'
  })
  return entry
}