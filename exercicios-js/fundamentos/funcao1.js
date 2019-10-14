function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 5)
imprimirSoma(5)
imprimirSoma(5, 5, 6, 9)

function soma(a, b = 0){
    return a + b
}
console.log(soma(2))
console.log(soma(2,5))