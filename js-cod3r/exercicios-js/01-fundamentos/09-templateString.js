const nome = 'Rebeca'
const concatenation = 'Hello ' + nome + '!'

const template = `
    Hello
    ${nome}!`

console.log(concatenation, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

// example arrow function
const up = s => s.toUpperCase()

console.log(`Ei ... ${up('danger!')}`);