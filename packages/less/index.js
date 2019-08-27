const less = require('less')

module.exports = opts => entry => {
  less
    .render(entry.content.toString('utf8'), opts)
    .then(output => (entry.content = output.css))
  return entry
}
