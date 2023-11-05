function rand({min = 0, max = 1000}){
    const value = Math.random() * (max-min) + min
    return Math.floor(value)
}

const object = {nome: 'Numerador', min: 0, max: 50}

console.log(rand(object))
console.log(rand({}))
