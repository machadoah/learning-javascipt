var person = {
    age: 14,
    name: 'Antonio'
}

// Pure function!! not alter the object in parameter
function getYearsToMajorty(person) {
    return 18 - person.age;
}

// Impure function!! alter the object in parameter
function increasePersonAge(person) {
    person.age++
}

increasePersonAge(person)

var remainingYears = getYearsToMajorty(person)
console.log(remainingYears);