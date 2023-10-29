const productOne = {}

productOne.nome = 'Celular Ultra Mega'
productOne.preco = 4998.90
productOne['desconto'] = 0.10

console.log(productOne)

const productTwo = {
    nome: 'Camisa Polo',
    preco: 79.90,
    desconto: 0.05
}

console.log(productTwo) 

// JSON

// convertendo do Objeto para Json
const productTwoJson = JSON.stringify(productTwo)
const productOneJson = JSON.stringify(productOne)

console.log(productOneJson)
console.log(productTwoJson)