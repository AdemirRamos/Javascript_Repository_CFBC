//Aula 24 - Funções Anônimas Em Javascript - Funções Em Javascript (Parte 4)

//Funções Anônimas são funções que não possuem um nome associado a elas.
//Também são funções chamadas em "tempo de execução", ou seja, ela só será criada na hora de sua execução.
//Em funções comuns, a função ocupa espaço na memória do programa; funções anônimas não.
//Funções Anônimas precisam ser associadas a variáveis.

const soma = function (v1, v2) {
	return v1 + v2
}

console.log(soma(5, 6))

const soma_2 = function (...valores) {
	let tamanho = valores.length
	let resultado = 0

	for (let i = 0; i < tamanho; i++) {
		resultado += valores[i]
	}

	return resultado
}

console.log(soma_2(10, 15, 20))

//Funções Construtoras (Funções Construtoras também são funções anônimas):

const soma_3 = new Function("v1, v2", "return v1 + v2")

//O último argumento de uma Função Construtora é chamado de "corpo da função".

console.log(soma_3(10, 15))
