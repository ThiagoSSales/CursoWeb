const aluno = {
    nome: 'iago',
    notas: [
        {nome: 'fisica', valor: 5},
        {nome: 'estatistica', valor: 4},
        {nome: 'probabilidade', valor: 1}
    ]
}

const getNota = aluno => aluno.notas.valor

console.log(getNota(aluno))