const { inchesToCm } = require('../src/inches-to-cm')

describe('inchesToCm', () => {
    it('converts from inches to cm', () => {
        expect(inchesToCm(1)).toBe(2.54)
        expect(inchesToCm(2)).toBe(5.08)
        expect(inchesToCm(4)).toBe(10.16)
        // toBe 
        // toEqual => checks if they have the same value
    })
})