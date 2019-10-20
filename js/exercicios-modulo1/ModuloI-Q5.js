const aluno = {
    nome: 'iago',
    notas: [
        { nome: 'fisica', valor: 5 },
        { nome: 'estatistica', valor: 4 },
        { nome: 'probabilidade', valor: 1 }
    ]
}

const getNota = nota => (' ' + nota.nome + ': ' + nota.valor)
console.log('Notas: \n' + aluno.notas.map(getNota))