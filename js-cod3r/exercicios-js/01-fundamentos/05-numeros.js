const weight1 = 1.0
const weight2 = Number('2.0')

console.log(weight1, weight2)

// return true or false
console.log(Number.isInteger(weight1))
console.log(Number.isInteger(weight2))

const exam1 = 9.871
const exam2 = 6.871

const total = exam1 * weight1 + exam2 * weight2
const media = total / (weight1 + weight2)

// toFixed(2) -> numbers after the comma
console.log(media.toFixed(2))

// toString(2) -> conversion value to binary
console.log(media.toString(2))
