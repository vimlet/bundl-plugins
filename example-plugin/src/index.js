module.exports = function(entry) {
  entry.content = require("@babel/core").transformSync(entry.content, {
    presets: [require("@babel/preset-env")]
  }).code;
  return entry;
};