//Aula 50 - Aprendendo Sobre o Método "reduce" Em Javascript

//O método "reduce" nos permite reduzir o tamanho do "array".

const vetor = document.querySelector('#array')
const botão_reduzir = document.querySelector('#botão_reduzir')
const resultado = document.querySelector('#resultado')

const números = [1, 2, 3, 4, 5]
let previous = []
let current = []
let dobro = []

vetor.innerHTML = `<br>[${números}]`

botão_reduzir.addEventListener('click', () => {
	resultado.innerHTML = '<br>'
	resultado.innerHTML += 'Resultado da operação: '

	dobro.push(números[0] * 2)

	resultado.innerHTML += números.reduce((anterior, atual, posição, vetor) => {
		//Parâmetros: 1ª: valor anterior; 2ª: valor atual; 3ª: posição/índice; 4ª: vetor ("array").
		//O "valor anterior" representa o retorno da função.

		previous.push(anterior)
		current.push(atual)
		dobro.push(atual * 2)

		return atual + anterior

		//A soma é feita para cada item do "array" sempre somando o valor anterior mais o atual;
		//Essa soma acontece por ser a regra definida para operar em "reduce".
	})

	resultado.innerHTML += `<br><br> Dobro do primeiro valor do vetor: ${números[0] * 2}
							<br><br> Anterior: ${previous}
							<br><br> Atual: ${current}
							<br><br> Dobro: ${dobro}`
})
