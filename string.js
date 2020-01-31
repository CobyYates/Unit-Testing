function reverse(str) {
  let splitString = str.split("")

  let reverseArray = splitString.reverse()

  let joinArray = reverseArray.join("")

  return joinArray
}

function upper(str) {
  return str.charAt(0).toUpperCase() + str.substring(1)
}

function vowel(str) {
    return str.replace(/[aeiou]/ig,'')
}

reverse("hello")

module.exports = { reverse, upper, vowel }
