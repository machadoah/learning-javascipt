let valor // not init

// undefined
console.log(valor)

valor = null // ausência de valor
console.log(valor)

// acessando uma propriedade de uma variavel que não aponta para nada. gera ERRO!! 💣💣
// console.log(valor.toString())

const product = {}

// return undefined
console.log(product.price)

// return object vazio
console.log(product)

product.price = 3.5
console.log(product)

// evite fazer isso!!!!!
// não é boa pratica aplicar o undefined!!!!
product.price = undefined
console.log(!!product.price)
console.log(product)

// uma boa opção é usar:
//delete product.price

// outra opção é:
product.price = null
console.log(product)