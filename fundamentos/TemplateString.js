const nome = 'rebeca'
const concatencao = 'Olá ' + nome + '!'

const template = `
    Olá
    ${nome}!`
console.log(concatencao, template)

// Expressões

console.log(`1 + 1 = ${1 + 1}`) // Interpolação, retorna o que está dentra das chaves

const up = texto => texto.toUpperCase() // Transfora em Maiúsculas, função arrow
console.log(`Ei... ${up('Cuidado')}!`)