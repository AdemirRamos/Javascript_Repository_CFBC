//Aula 39 - Entendendo a Relação Dos Elementos No DOM Em Javascript (Parte 2)

const caixa_1 = document.querySelector('#caixa1')
const botões = [...document.querySelectorAll('.curso')]
const c8 = document.getElementById('c8')

console.log(caixa_1.hasChildNodes())
console.log(botões[0].hasChildNodes())
console.log(botões[0].childNodes)
console.log(botões[0].children)

if (botões[0].children.length > 0) {
	console.log('O elemento selecionado possui filhos.')
}

else {
	console.log('O elemento selecionado não possui filhos.')
}

botões[0].children.length > 0 ?
console.log('O elemento selecionado possui filhos.') :
console.log('O elemento selecionado não possui filhos.')

console.log(botões[0].children.length > 0 ? 'Possui filhos.' : 'Não possui filhos.')

caixa_1.firstElementChild.innerHTML = 'Olá, mundo!'
caixa_1.children[1].innerHTML = 'Hello, world!'

console.log(c8)
console.log(c8.parentElement)
console.log(c8.parentNode)
console.log(c8.parentNode.parentNode)
console.log(c8.parentNode.parentNode.children[0])
