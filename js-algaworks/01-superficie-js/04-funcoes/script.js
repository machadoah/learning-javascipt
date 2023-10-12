// default value is Mergulhador
function greet(name = 'Mergulhador') {
    console.log('Boa madrugada ' + name);
}

function greetReturn(name = 'Mergulhador') {
    return 'Boa madrugada ' + name;
}

// function call
greet('Antonio')
greet('Rafaela')
greet('Isadora')
greet()

var greeting = greetReturn('Damião')

console.log(greeting)