const escola = "Cod3r"
// array => C   o   d   3   r
// index => 0   1   2   3   4

// return r
console.log(escola.charAt(4))

// return void
console.log(escola.charAt(9))

// return 3 in ASCII/unicode table, so 51
console.log(escola.charCodeAt(3))

// return index of value in parameter
// so, return 0
console.log(escola.indexOf('C'))

// Substring

// Init index 1
console.log(escola.substring(1))

// index 0 to index < 3, so, 0 to 2
// second value in parameter is not including
console.log(escola.substring(0,3));

// Concat
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

// Replace
console.log(escola.replace(3, 'e'))

// String to Array
const arr = ('Ana, Maria, Pedro'.trim().split(','));
console.log(arr)