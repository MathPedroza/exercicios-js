const valores = [7.7, 8.9, 6.3, 9.2] // Array criado por colchetes, separados por vírgulas
console.log(valores[0], valores[3]) // pega o primeiro elemento e o último

console.log(valores[4]) // Não existe - undefined

valores[4] = 10
console.log(valores)
console.log(valores.length) // acessa a quantidade de elementos

valores.push({id: 3}, false, null, 'teste') // adicionar novos elementos
console.log(valores)

console.log(valores.pop()) // retira o último valor do Array
delete valores[0] // deleta o primeiro valoro do Array
console.log(valores)

console.log(typeof valores) // Tipo Object