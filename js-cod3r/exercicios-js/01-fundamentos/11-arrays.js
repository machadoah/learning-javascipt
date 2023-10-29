const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(`O estado atual do array é ...`)
console.log(valores)
console.log(`O tamanho do array é de ${valores.length} elementos`)

// em js um array aceita varios elementos

// method push add item final the array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// pop() remove final element
valores.pop()
console.log(valores)

// delete
// remove value in index
delete valores[0]
console.log(valores)

valores[0] = 'Antonio'
console.log(valores)

// typeof
console.log(`Um array em JS é do tipo ${typeof valores}`)
