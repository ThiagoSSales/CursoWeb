let a = 1, b = 0, valorTeste
const value = a ? b ? 1 : -1 : 0 // a ? (b ? 1 : -1) : 0

console.log(value)

if (!!(a)) {
    if (!!(b)) {
        valorTeste = 1
    } else {
        valorTeste = -1
    }
} else {
    valorTeste = 0
}

console.log(valorTeste)
