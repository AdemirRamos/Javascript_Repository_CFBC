//Aula 23 - Parâmetro REST Em Funções Javascript - Funções Em Javascript (Parte 3)

function soma(n1 = 0, n2 = 0) {
	return n1 + n2
}

console.log(soma(5, 6))

//O parâmetro "REST" nos permite passar um número indefinido de parâmetros para uma função.
//P. S.: O "REST" é, na verdade, um "SPREAD".

function soma_2(...valores) {
	let tamanho = valores.length
	let resultado = 0

	for (let i = 0; i < tamanho; i++) {
		resultado += valores[i]
	}

	return resultado
}

console.log(soma_2(10, 5, 2, 15, 8))

function soma_3(...valores) {
	let resultado = 0

	for (let v of valores) {
		resultado += v
	}

	return resultado
}

console.log(soma_3(10, 5, 2, 8))
