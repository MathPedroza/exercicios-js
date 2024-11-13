const peso1 = 1.0
const peso2 = Number('2.0') // converte a string em número

console.log(peso1, peso2)

console.log(Number.isInteger(peso1)) // verifica se é inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2

const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // arredondar casas deciamis

console.log(media.toString()) // converte o número em string

console.log(typeof media)