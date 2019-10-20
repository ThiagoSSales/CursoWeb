const joao = {
    nome: 'João',
    saudacao() {
        console.log(`Olá ${this.nome}!`)
    }
}

joao.saudacao()

function saudacaoMaria() {
    const maria = {
        nome: 'Maria'
    }
    joao.saudacao.bind(maria)()
}

saudacaoMaria()