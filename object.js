function obj(object, key) {
    let arr = []
    arr.push(object)
    return(typeof object.key)
}

// console.log(obj())

module.exports = {obj}