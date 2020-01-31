//Add
function add(a, b) {
    return a + b
}
// console.log(add(3, 5))

//Sub
function sub(a, b) {
    return a - b
}
// console.log(sub(5,3))

//Mult
function mult(a, b) {
    return a * b
}
// console.log(mult(5,3))

//divide
function divide(a, b) {
    return a / b
}
// console.log(divide(6,3))

// root
function exponent(a) {
    return a * a
}
// console.log(exponent(4))

function rooter(a) {
    return Math.sqrt(a)
}
// console.log(rooter(64))

module.exports = {add, sub, mult, divide, exponent, rooter}