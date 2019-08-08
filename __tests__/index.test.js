const sass = require('../packages/sass/index')
const babel = require('../packages/babel/index')
const buble = require('../packages/buble/index')
const jsx = require('../packages/jsx/index')
const stylus = require('../packages/stylus/index')
const terser = require('../packages/terser/index')

describe('Sass', () => {
  it('should render Scss to CSS', () => {
    const entry = {
      content: `
      $color: blue;
      
      body {
        margin: 0;
        a {
          color: $color;
        }
      }
      `
    }
    const compiled = sass()(entry).content.toString()

    expect(compiled).toMatch('body{margin:0}body a{color:blue}')
  })
  it('should render Sass to CSS', () => {

    const entry = {
      content:
      `$color: blue
body
  margin: 0
  a
    color: $color`
    }

    const compiled = sass({ indentedSyntax: true })(entry).content.toString()

    expect(compiled).toMatch('body{margin:0}body a{color:blue}')
  })
})