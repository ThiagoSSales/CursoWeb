let media, total, maioresQueMedia = []
const array = [5, 6, 10, 4, 3, 7, 1]

total = array.reduce((accum, curr) => accum + curr)
media = total / array.length

maioresQueMedia = array.filter((value) => value > media)

console.log('Média: ' + media)
console.log(maioresQueMedia)