var numero = 1
{
    let numero = 2 // escopo visível apenas dentro do bloco para o Let
    console.log('dentro =', numero)
}

console.log('fora =', numero)