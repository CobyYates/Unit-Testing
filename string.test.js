const { reverse, upper, vowel } = require('./string.js')

test('it should reverse a string'), () => {
    expect(reverse("add")).teBe("dda")
}

test('it should uppercases a string'), () => {
    expect(upper("add")).teBe("Add")
}

test('it should removes all vowels'), () => {
    expect(vowel("beautiful")).teBe("btfl")
}