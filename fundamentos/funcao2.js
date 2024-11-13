// Armazenando uma função em uma variável

const imprimeSoma = function (a, b) { // função anônima - sem nome
    console.log(a + b)

}

imprimeSoma(2, 3)

// Armazenando uma função arrow em uma variável

const soma = (a, b) => {
    return (a + b)

}

console.log(soma(2, 3))

// Retorno implícito

const subtracao = (a, b) => a - b // expressão, não precisa colocar "return"
console.log(subtracao(2, 3))