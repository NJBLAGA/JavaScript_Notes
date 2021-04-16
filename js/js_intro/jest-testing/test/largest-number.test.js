// largest.test.js

const largestNumber = require('../src/largest-number.js')

describe("largestNumber", () => {
    it("returns the largest number", () =>{
        expect(largestNumber([2,5,9])).toBe(9)
    })
    
    it('returns null if passed empty array', () => {
        expect(largestNumber([])).toBe(null)
    })
    
    it('returns largest negative when passed all negative', () =>{
        expect(largestNumber([-2,-8,-100])).toBe(-2)
    })

    it('ignores non numeric items in array', () => {
        expect(largestNumber([1,50, "apples",true])).toBe(50)
    })

    it('throws error when passed anything but array', () => {
        expect(() => {
            largestNumber(50)
        }).toThrow("Function must take array")
    })
})