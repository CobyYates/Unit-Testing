const {num} = require('./number.js')

test('it should reduce all numbers in an array', () => {
    expect(num([1,3,5])).toBe(9)
})