const stylus = require('stylus')

module.exports = entry => {
  stylus(entry.content)
    .render((error, css) => {
      if (error) throw error
      entry.content = css 
    })
  return entry
}