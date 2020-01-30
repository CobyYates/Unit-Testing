//Add
function add(a, b) {
    return a + b
}
console.log(add(2, 4))

//Sub
function sub(a, b) {
    return a - b
}
console.log(sub(5,3))

//Mult
function mult(a, b) {
    return a * b
}
console.log(mult(5,3))

//divide
function div(a, b) {
    return a / b
}
console.log(div(6,3))

// root
function exponent(a) {
    return a * a
}
console.log(exponent(4))

function root(a) {
    return Math.sqrt(a)
}
console.log(root(64))

module.exports = {add, sub, mult, div, exponent}