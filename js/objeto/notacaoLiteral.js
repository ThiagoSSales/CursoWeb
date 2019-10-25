const a = 1, b = 2, c = 3

const obj1 = { a, b, c}
const obj2 = {a: a, b: b, c: c}
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.85

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao: function() {

    },
    funcao2() {

    }
}

console.log(obj5)