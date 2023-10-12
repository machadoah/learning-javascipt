var person1 = {
    name: 'Antonio',
    age: 19
}
var person2 = {
    name: 'Rafaela',
    age: 20
}
var person3 = {
    name: 'Isadora',
    age: 21
}

var list = ['Antonio','Rafaela','Isadora']
var peoples = [person1, person2, person3]
// index    ->    0        1         2

// console.log(list);
// console.log(peoples);
// console.log(peoples[0]);

// running down the list

for (var person of peoples) {
    // for each option do ...
    console.log(person.name);
}