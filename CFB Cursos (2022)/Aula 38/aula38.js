//Aula 38 - Entendendo a Relação Dos Elementos No DOM Em Javascript (Parte 1)

const caixa_1 = document.getElementById('caixa1')
const botões = [...document.querySelectorAll('.c1')]

console.log(caixa_1.children)
console.log(caixa_1.children[0])
console.log(caixa_1.children[caixa_1.children.length - 1])
console.log(caixa_1.firstElementChild)
console.log(caixa_1.lastElementChild)
console.log(document.getRootNode())
console.log(botões[0].getRootNode())
console.log(botões[0].ownerDocument)
