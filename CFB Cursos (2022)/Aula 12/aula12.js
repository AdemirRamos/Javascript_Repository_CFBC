//Aula 12 - Operador Spread, Aprendendo Sobre o Espalhador Em Javascript

let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44, 55]
let n3 = [n1, n2]
let n4 = [...n1, ...n2]

console.log(`n1: ${n1} \nn2: ${n2} \nn3: ${n3} | Tipo: ${typeof(n3)} \nn4: ${n4}`)

const jogador = {nome: 'Sofia', energia: 100, vidas: 3, magia: 150}
const jogador_dois = {nome: 'Ademir', energia: 100, vidas: 5, velocidade: 80}
const jogador_três = {...jogador, ...jogador_dois}

console.log(jogador_três)

const soma = (v1, v2, v3) => {
	return (v1 + v2 + v3)
}

console.log(soma(1, 5, 4))

let valores = [1, 5, 4, 10]

//Mesmo que a quantidade de itens do vetor seja maior, o "spread" continuará os espalahando normalmente.

console.log(soma(...valores))

const div = document.getElementsByTagName('div')

console.log(div)

//Uma coleção HTML recebe somente elementos HTML; já um "array" pode receber diferentes itens.
//As funções que podem ser aplicadas a uma coleção HTML e um "array" também diferem.
//Uma das vantagens de se usar o "spread" aqui se dá em razão da profusa quantidade de funções para "arrays".

const div_dois = [...document.getElementsByTagName('div')]

//O retorno de "spread" deve vir dentro de um "array" ou objeto.

console.log(div_dois)

div_dois.forEach(element => {
	console.log(element) //Reproduzindo cada item de "div_dois", através de "forEach()", no "console.log()".

	//element.innerText = "Curso" -> Esse comando altera o texto de todos os elementos de "div_dois".
})

//Em razão de manipulação do DOM, o recurso "document" não pode ser executado no Node, mas sim no console do browser.
