//Aula 11 - Operador "typeof" - Retornando o Tipo da Variável

let v1 = 10
let v2 = '10'
let v3 = v1 === v2
let v4 = {nome: 'Sofia'}

console.log(v1)
console.log(v2)
console.log(v3)
console.log(v4)

console.log(`Valor: ${v1} | Tipo: ${typeof(v1)}.`)
console.log(`Valor: ${v2} | Tipo: ${typeof(v2)}.`)
console.log(`Valor: ${v3} | Tipo: ${typeof(v3)}.`)
console.log(`Valor: ${v4} | Tipo: ${typeof(v4)}.`)

//O operador "typeof" não faz distinção entre um valor real e inteiro.
