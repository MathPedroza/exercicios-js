const prod1 = {} // criando um objeto - coleção de chave-valor, atributo e identificador
prod1.nome = 'Celular ultra Mega'
prod1.preco = 4998.90

console.log(prod1)

prod1['Desconto de 20%'] = 0.20 // Evitar atributos com espaço

console.log(prod1)

const prod2 = { // tbm aceito para criar objeto
    nome: 'Camisa polo',
    preco: 79.90,
    obj: {
        teste: 1,
        obj: {
            teste2: 2
        }
    }
}

console.log(prod2)