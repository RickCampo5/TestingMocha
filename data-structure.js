function charCount (str) {
  const count = {}

  for(var char of str) {
    char = char.toLowerCase()

    if(isAphaNumeric(char)) {
      count[char] = ++count[char] || 1
    }
  }

  return count
}

function isAphaNumeric(char) {
  var code = char.charCodeAt(0)
  if(!(code > 47 && code < 58) &&
     !(code > 96 && code < 123)) {

      return false
    }

    return true
}

const wish = require('wish')
const deepEqual = require('deep-equal')

describe('chardCount()', function() {
  it('return object with char count', function() {
    const result = charCount('Hello there!')
    wish(deepEqual(result, {h:2, e:3, l:2, o:1, t:1, r:1}))
  })
})

describe('isAlphanumeric()', function() {
  it('return true if is alphanumeric', function() {
    wish(isAphaNumeric('x') === true)
  })
  it('return false if is not alphanumeric', function() {
    wish(isAphaNumeric('!') === false)
  })
})