//Aula 25  - "Arrow Function" Em Javascript - Funções Em Javascript (Parte 5)

//O nome técnico das "Arrow Function's" é "Função Lambda".
//As funções de flecha ("Arrow Function's") são um mecanismo conciso para representar funções.

const soma = (v1, v2) => {
	return v1 + v2
}

console.log(soma(5, 6))

//Caso a função anônima tenha somente um parâmetro, não é necessário usar parênteses:

const nome = n => {
	return `O nome passado para a função foi "${n}".`
}

console.log(nome('Sofia'))

//Funções de Flecha podem trabalhar sem o "return" (nesse caso, não se usa chaves):

const adicionar = n => n + 10

console.log(adicionar(10))
