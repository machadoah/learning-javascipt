console.log(Math.ceil(6.1)) // 6
console.log(Math.floor(6.1)) // 7

// defined object
const obj1 = {}

// defined name
obj1.nome = 'Bola'

// defined age
obj1['idade'] = '2'
console.log(obj1)

function Obj(nome) {
    // defined atribute public
    this.nome = nome
    this.exec = function() {
        console.log('Exec ...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()