const Escola = "Cod3r"

console.log(Escola.charAt(4)) // Retorna a 4° letra da String
console.log(Escola.charAt(5)) // Retorna vazio
console.log(Escola.charCodeAt(3)) // pega o valor na tabela Unicode ou ASCII
console.log(Escola.indexOf('3')) // Saber em que índice ovalor está na String

console.log(Escola.substring(1)) // retira o índice 1, ou seja, a letra C
console.log(Escola.substring(0, 3)) // Vá até índice 0, e retorne 3 caracteres, sem incluir o índice final

console.log('Escola '.concat(Escola).concat("!")) // Juntar strings, literal + constante

console.log(Escola.replace(/\d/, 'e')) // Substitua todos os dígitos pela letra 'e' 
console.log(Escola.replace(/\w/g, 'e')) // Substitua todos os caracteres pela letra 'e'

console.log('Ana,Maria,Pedro'.split(',')) // Quebra a string e gera um Array com 03 elementos distintos

