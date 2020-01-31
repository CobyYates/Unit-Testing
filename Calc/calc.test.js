const {add, sub, mult, divide, exponent, rooter} = require('./calc.js')

test('it should sum 2 numbers', () => {
    expect(add(3,5)).toBe(8)
})

test('it should sub 2 numbers', () => {
    expect(sub(5,3)).toBe(2)
})

test('it should multiply 2 numbers', () => {
    expect(mult(5,3)).toBe(15)
})

test('it should divide 2 numbers', () => {
    expect(divide(8,2)).toBe(4)
})

// Second set

test('it should give a number a square root', () => {
    expect(exponent(4)).toBe(16)
})

test('it should find the root of a number', () => {
    expect(rooter(64)).toBe(8)
})
