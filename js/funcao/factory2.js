function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('note', 5556))
console.log(criarProduto('nodsdste', 669))