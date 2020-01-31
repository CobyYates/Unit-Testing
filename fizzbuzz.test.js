const {fizzBuzz} = require("./fizzbuzz.js");

test("number divisible by 3", () => {
  expect(fizzBuzz(6)).toBe("fizz");
});

test("number divisible by 5", () => {
  expect(fizzBuzz(10)).toBe("buzz");
});

test("number divisible by 3 and 5", () => {
  expect(fizzBuzz(30)).toBe("fizzbuzz");
});

test("number divisible by 3 and 5 at once", () => {
  expect(fizzBuzz(4)).toBe(4);
});
