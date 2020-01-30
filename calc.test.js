const {sum, sub} = require('./calc.js')

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
    expect(div(1,4).toBe(4))
})

// Second set

test('it should create an exponent with 2 numbers', () => {
    expect(div(4,2).toBe(4))
})

test('it should find the root of a number', () => {
    expect(div(64).toBe(8))
})
