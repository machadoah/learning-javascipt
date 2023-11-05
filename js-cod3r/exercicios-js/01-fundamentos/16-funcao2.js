// Storing a function in a variable
const printSum = function(a, b) {
    console.log(a + b)
}

printSum(2, 4)

// Storing a function arrow in a variable
const sum = (a, b) => {
    return a + b
}

console.log(sum(2,3))

// implicit return
const minus = (a, b) => a - b
console.log(minus(10, 3))

const print = a => console.log(a)
print("Sou legal")