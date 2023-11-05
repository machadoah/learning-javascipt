// new recurse ES2015
// defined two variable 

const person = {
    name: 'Ana',
    age: 5,
    address: {
        publicPlace: 'Rua ABC',
        number: 1000
    }
}

const {name, age} = person
console.log(name, age)

// rename variable
const {name: n, age: a } = person
console.log(n, a)

// setter value default
const { lastName = null, happy = true } = person
console.log(lastName, happy)

// acess internal object address
// create variables pp and nn
const { address: {publicPlace: pp, number: nn }} = person
console.log(pp, nn);
