const produto = Object.preventExtensions({
    nome: 'TH', preco: 456, tag: 'vvsdvsdv'
})
console.log(Object.isExtensible(produto))
produto.descricao = 'Bsvs'
delete produto.tag
console.log(produto)

Object.seal(produto)
delete produto.nome
console.log(produto)