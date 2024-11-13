let valor // não inicializada - Undefined
console.log(valor)

valor = null // não tem valor, não está apontando para nenhum endereço de memória
console.log(valor)
// console.log(valor.toString()) // Erro, não pode ler ToStrind de valor nulo

const produto = {}
console.log(produto.preco)
console.log(produto) // objeto vazio

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco) // False
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

