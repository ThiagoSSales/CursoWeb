let a = -1, b , valorTeste
const value = a ? b ? 1 : -1 : 0

console.log(value)

if(!!(a) && !!(b)) {
    valorTeste = 1
} else 
    if(!!(a)) {
        valorTeste = -1
} else {
    valorTeste = 0
}

console.log(valorTeste)
