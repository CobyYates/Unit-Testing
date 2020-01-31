function fizzBuzz(index) {
    let arr = []
    for(i = 1; i < 101; i++) {  
      if(i % 3 === 0) {
          if(i % 5 === 0) {
              arr.push('fizzbuzz')
          }
          else {
              arr.push("fizz")
          }
      }
      else if(i % 5 === 0) {
          arr.push("buzz")
      }
      else {
          arr.push(i)
      }
    }
    return(arr[index])
  }
  
fizzBuzz()


module.exports = { fizzBuzz };
