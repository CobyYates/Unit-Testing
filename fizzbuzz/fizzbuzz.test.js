const {fizzBuzz} = require("./fizzbuzz.js");

test("number divisible by 3", () => {
  expect(fizzBuzz(2)).toBe("fizz");
});

test("number divisible by 5", () => {
  expect(fizzBuzz(9)).toBe("buzz");
});

test("number divisible by 3 and 5", () => {
  expect(fizzBuzz(14)).toBe("fizzbuzz");
});

test("number divisible by 3 and 5 at once", () => {
  expect(fizzBuzz(3)).toBe(4);
});
