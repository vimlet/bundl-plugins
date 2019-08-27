const { renderSync } = require('node-sass')

module.exports = opts => entry => {
  entry.content = renderSync({
    data: entry.content,
    outputStyle: 'compressed',
    ...opts
  }).css

  return entry
}
