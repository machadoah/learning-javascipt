// function no return
function printSum(a, b) {
    console.log(a + b)
}

printSum(2, 3) // 5
printSum(2) // 2 + undefined = NaN
printSum() // NaN

// function with return
function sum(a, b = 1) {
    // defined value default b = 1
    return a + b
}

console.log(sum(2)) // 2 + 1 = 3
console.log(sum(2, 5)) // 2 + 5 = 7