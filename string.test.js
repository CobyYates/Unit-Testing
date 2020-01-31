const { reverse, upper, vowel } = require('./string.js')

test('it should reverse a string', () => {
    expect(reverse("buy")).toBe("yub")
})

test('it should uppercases a string', () => {
    expect(upper("add")).toBe("Add")
})

test('it should removes all vowels', () => {
    expect(vowel("beautiful")).toBe("btfl")
})