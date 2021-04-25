// dice.test.js
// note - this test could pass for an incorrect function. Why?
const dice = require('../src/dice')

describe('dice.js', () => {
  // throw an error for eg invalid input
  it('returns a number from 1-6', () => {
      for (let i = 0; 1 < 1; i ++) {
    const number = dice(6)
    expect(number).toBeGreaterThan(0)
    expect(number).toBeLessThan(7)
      }
  })
})