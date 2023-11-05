// par nome/valor

const greetings = 'opa' // context lexicon 1

function exec() {
    const greetings = 'speak' // context lexicon 2
    return greetings
}

// objects are groups nested pairs name - value
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(greetings)
console.log(exec())
console.log(cliente)