// char-count.test.js
const charCount = require('../src/char-count')

// Note: there is a special case for handling exceptions in tests
// Can't call the function function inside ../src/test, so need to pass anonymous function
describe('charCount input validation', () => {
  it('should throw an error for wrong number of arguments', () => {
    // no arguments
    expect(
      () => charCount()
    ).toThrow()

    // 1 argument
    expect(() => charCount('a')).toThrow() 
    // 3 arguments
    expect(() => charCount('a', 'b', 'c')).toThrow()
  })

  it('should throw an error for wrong data type of arguments', () => {
    expect(() => charCount(5, 'b')).toThrow()

    expect(() => charCount('a', undefined)).toThrow()
  })
})

describe('charCount core functionality', () => {
  it('should correctly count the instances of char in sentence', () => {
    expect(charCount('b', "big fat bubble")).toBe(4)
  })
})