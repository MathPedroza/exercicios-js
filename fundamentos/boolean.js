let isAtivo = false
console.log(isAtivo) // False

isAtivo = true
console.log(isAtivo) // True

isAtivo = 1 // pode usar para representar um valor Booleano, usando a negação na frente do valor
console.log(!!isAtivo) // !! - Não Não = Verdadeiro


console.log("Os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // Espaco vazio
console.log(!![]) // Array vazio = true
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log("Os Falsos...")
console.log(!!0) // zero retorna false
console.log(!!'') // string vazia é falso
console.log(!!null) // Null é falso
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Para finalizar...")
console.log(!!('' || null || 0 || 'epa')) // retorna somente 'epa', único verdadeiro