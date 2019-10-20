const aluno = {
    nome: 'iago',
    notas: [
        {nome: 'fisica', valor: 5},
        {nome: 'estatistica', valor: 4},
        {nome: 'probabilidade', valor: 1}
    ]
}

const getNota = nota => nota.valor

console.log(aluno.notas.map(getNota))