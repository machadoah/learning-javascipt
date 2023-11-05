// arrow
const result = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

// anonima
const resultado = function(nota){ return nota > 7 ? 'Aprovado' : 'Reprovado'}

console.log(result(7.1));
console.log(resultado(7.1));

console.log(result(5.5));
console.log(resultado(5.5));