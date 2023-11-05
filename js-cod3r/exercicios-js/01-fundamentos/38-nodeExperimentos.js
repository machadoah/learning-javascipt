let a = 3

globalThis.b = 4
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(globalThis.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando variavel MALUCA
abc = 3
console.log(globalThis.abc)



