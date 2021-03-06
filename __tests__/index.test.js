const sass = require('../packages/sass/index')
const babel = require('../packages/babel/index')
const buble = require('../packages/buble/index')
const jsx = require('../packages/jsx/index')
const stylus = require('../packages/stylus/index')
const terser = require('../packages/terser/index')
const less = require('../packages/less/index')

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
      content: `$color: blue
body
  margin: 0
  a
    color: $color`
    }

    const compiled = sass({ indentedSyntax: true })(entry).content.toString()

    expect(compiled).toMatch('body{margin:0}body a{color:blue}')
  })
})

describe('JSX', () => {
  it('should compile JSX to React.createElement', () => {
    const entry = {
      content: `<h1>Hello World</h1>`
    }

    const compiled = jsx()(entry).content

    expect(compiled).toMatch(
      `React.createElement('h1', null, [\"Hello World\"])`
    )
  })
  it('should compile JSX to Preact', () => {
    const entry = {
      content: `<h1>Hello World</h1>`
    }

    const compiled = jsx({ factory: 'preact.h' })(entry).content

    expect(compiled).toMatch(`preact.h('h1', null, [\"Hello World\"])`)
  })
})

describe('Buble', () => {
  it('should compile', () => {
    const entry = {
      content: 'const f = x => {}'
    }

    const compiled = buble()(entry).content

    expect(compiled).toMatch(`var f = function (x) {}`)
  })
})

describe('LESS', () => {
  it('should compile to CSS', () => {
    const entry = {
      content: 'body { a { text-decoration: none } }'
    }

    const compiled = less()(entry).content

    expect(compiled).toMatch('body a { text-decoration: none }')
  })
})
