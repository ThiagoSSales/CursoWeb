function Pessoa(nome) {
    this.nome = nome

    this.falar = () => console.log('Nome:' + this.nome)
}

const p1 = new Pessoa('Jose')
p1.falar()