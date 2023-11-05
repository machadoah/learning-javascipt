var number = 1

{
    // overwrites the old variable
    var number = 2
    console.log('inside = ', number)
}
console.log('out = ', number)