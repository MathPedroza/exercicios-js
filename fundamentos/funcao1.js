// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
// pode passar apenas 1 valor
imprimirSoma(3) // Undefined + 3 = Not a Number - NaN
imprimirSoma(2, 10, 4, 8, 11, 9) // soma apenas 2 e 10
imprimirSoma() // não passar parâmetro

// Função com retorno

function soma(a, b = 1) { // 2° parâmetro tem valor inicial
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))