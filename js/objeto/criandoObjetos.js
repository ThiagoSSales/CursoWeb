const obj1 = {}
console.log(obj1)

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

function Produto(nome, preco, desc) {
    this.nome
    this.getPrecoComdesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Note', 5699, 0.2)

console.log(p1.getPrecoComdesconto(), p2.getPrecoComdesconto())

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7922, 4)
const f2 = criarFuncionario('Maria', 11225, 1)
console.log(f1.getSalario(), f2.getSalario())