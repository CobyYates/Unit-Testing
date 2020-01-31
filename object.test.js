const {obj} = require('./object.js')

test('it should test that 2 parameters can be passed to a function, 1 being an object, and the other a key in that object', () => {
    expect(obj("object", "object.name")).toBe("object", "string")
})