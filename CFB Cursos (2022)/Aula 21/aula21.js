//Aula 21 - Funções Em Javascript (Parte 2)

//Usando o comando "return" para retornar resultados para o usuário (através de uma função):

function canal() {
	return "CFB Cursos."
}

//A função "canal" retorna uma "string" com o valor "CFB Cursos";
//Para que esse valor seja mostrado no console, é preciso imprimir a própria função.

console.log(canal())

function multiplicação(a, b) {
	n1 = a
	n2 = b
	resultado = n1 * n2
	return resultado
}

//Adicionando o retorno da função "multiplicação" a uma variável:

let número = multiplicação(5, 5)

console.log(número)

function par_ímpar(a, b) {
	n1 = a
	n2 = b
	resultado = n1 + n2

	if (resultado % 2 == 0) {
		return `Par. Valor de "resultado": ${resultado}.`
	}

	else {
		return `Ímpar. Valor de "resultado": ${resultado}.`
	}

	//Há de se garantir que somente um dos "return's" será executado - e não os dois ao mesmo tempo.
	//Uma função sempre acaba após retornar algo (com "return").
	//Tudo o que vier após o "return" não mais será executado.
}

console.log(par_ímpar(3, 10))
