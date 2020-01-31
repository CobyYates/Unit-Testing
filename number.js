function num(arr) {
    return(arr.reduce((a, b) => a + b, 0))
}

module.exports = {num}