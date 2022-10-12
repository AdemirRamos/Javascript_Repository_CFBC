//Aula 26 - Funções Dentro de Funções Em Javascript - Funções Em Javascript (Parte 6)

const soma = (...valores) => {
	const somar = valor => {
		let resultado = 0

		for (v of valor) {
			resultado += v
		}

		return resultado
	}

	return somar(valores)
}

console.log(soma(10, 10))

//Outra alternativa de escrita:

const somar_2 = valor => {
		let resultado = 0

		for (v of valor) {
			resultado += v
		}

		return resultado
	}

const soma_2 = (...valores) => {
	return somar_2(valores)
}

values = [10, 5, 15]

console.log(soma_2(...values))
