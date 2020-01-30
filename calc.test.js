const {sum, sub, mult, div, exponent, root} = require('./calc.js')

test('it should sum 2 numbers', () => {
    expect(sum(3,5)).toBe(8)
})

test('it should sub 2 numbers', () => {
    expect(sub(5,3)).toBe(2)
})

test('it should multiply 2 numbers', () => {
    expect(mult(1,4).toBe(4))
})

test('it should divide 2 numbers', () => {
    expect(div(8,2).toBe(4))
})

// Second set

test('it should give a number a square root', () => {
    expect(exponent(4).toBe(16))
})

test('it should find the root of a number', () => {
    expect(root(64).toBe(8))
})
