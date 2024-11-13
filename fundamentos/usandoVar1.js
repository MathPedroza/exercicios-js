{
    {
        {
            {
                var sera = 'Será ???'
                console.log(sera) // fica visível
            }
        }
    }
}

console.log(sera) // visível tbm

function teste() {
    var local = 123 // definida dentro do escopo, visível somente aqui
}

teste() // chama variável
console.log(local) // não está visível fora do escopo

