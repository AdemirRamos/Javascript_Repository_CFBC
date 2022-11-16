//Aula 53 - Aprendendo Sobre a Coleção "array" Em Javascript (Parte 2)

//Se pode adicionar qualquer tipo de dado a um "array", até mesmo funções.

let valores = [1, 2, 3, 4, 5]
const operações = [

	(valor) => {
		let resultado = 0
		for (v of valor) {
			resultado += v
		}

		return resultado
	},

	(valor) => {
		let result = 1
		for (v of valor) {
			result *= v
		}

		return result
	},

	(valor) => {

		for (v of valor) {
			console.log(v)
		}
	}
]

console.log(operações[0](valores))
console.log(operações[1](valores))
operações[2](valores)
