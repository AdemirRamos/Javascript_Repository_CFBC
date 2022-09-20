//Aula 22 - Funções Parametrizadas Em Javascript - Funções Em Javascript (Parte 3)

//Se pode indicar "valores-padrão" para os parâmetros de uma função (exemplo: p1 = 0):

const valor_padrão = 0

function soma(p1 = 1, p2 = 2) {
	let soma = p1 + p2
	console.log(`A soma dos valores é igual a: ${soma}.`)
}

soma(2, 4)

function soma_dois(n1, n2 = valor_padrão) {
	return n1 + n2
}

//Lembrando que a função também poderia ser armazenada em uma variável:

//let resultado = soma_dois(5, 5)

console.log(`Resultado da soma: ${soma_dois(5, 5)}.`) //Aqui, se poderia usar a variável "resultado": ${resultado}.

//Alterando uma variável, fora da função, dentro da função: 

let valor = 5
console.log(`Valor da variável "valor" (antes da função): ${valor}.`)

function adicionar(v) {
	return valor += v
}

valor = adicionar(10)
console.log(`Valor da variável "valor" (depois da função): ${valor}.`)

valor = adicionar(5)
console.log(`Valor da variável "valor" (após mais um incremento): ${valor}.`)

let value = 0
console.log(`Valor inicial da variável "value": ${value}.`)

function add(v) {
	value += v
}

add(20)
console.log(`Valor da variável "value" (1ª incremento): ${value}`)

add(20)
console.log(`Valor da variável "value" (2ª incremento): ${value}.`)
