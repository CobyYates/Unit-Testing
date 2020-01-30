const {} = require("./fizzbuzz.js");

test("number divisible by 3", () => {
  expect(fizzbuzz(6)).toBe("fizz");
});

test("number divisible by 5", () => {
  expect(fizzbuzz(10)).toBe("buzz");
});

test("number divisible by 3 and 5", () => {
  expect(fizzbuzz(30)).toBe("fizzbuzz");
});

test("number divisible by 3 and 5 at once", () => {
  expect(fizzbuzz(4)).toBe(4);
});
