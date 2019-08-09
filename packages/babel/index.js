const { transformAsync } = require('@babel/core')

module.exports = opts => async entry => {
  entry.content = (await transformAsync(entry.content, opts)).code
  return entry
}
