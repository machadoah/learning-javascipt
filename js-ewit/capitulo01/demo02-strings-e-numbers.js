let salarioDoAmigo = 1000
let meuSalario = "2999.9"

let meuSalarioCorrigido = Number(meuSalario)

console.log(salarioDoAmigo + meuSalario); // 10002999 realizou a concatenação dos valores

console.log(
    typeof(salarioDoAmigo), salarioDoAmigo
);

console.log(
    typeof(meuSalario), meuSalario
);

console.log(
    typeof(meuSalarioCorrigido), meuSalarioCorrigido
);

console.log(
    isNaN(meuSalario)
);

let minhaString = 'Ola mundo!'
let minhaOutraString = "Olá mundo2!"

let minhaStringComVariaveis = `${minhaString} - ${minhaOutraString}`

console.log(minhaStringComVariaveis);
