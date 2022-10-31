//Aula 48 - Aprendendo Sobre o Método "every" Em Javascript

//"every" busca por equivalências dentro do "array";
//Se estabelece uma "regra" e "every" retorno todos os elementos adequados a ela.

const vetor = document.querySelector('#array')
const botão_verificar = document.querySelector('#botão_verificar')
const resultado = document.querySelector('#resultado')

const números = [21, 25, 23, 20, 18, 19, 22]
const textos = ['HTML', 'CSS', 'Javascript']

vetor.innerHTML = `<br>[${números}]`

botão_verificar.addEventListener('click', (event) => {
	//resultado.innerHTML = '<br>O vetor não está em conformidade com a regra.'

	const retorno = números.every((e, i) => {
		//Parâmetos do vetor: 1ª: elemento; 2ª índice; 3ª: vetor ("array").

		if (e < 18) {
			resultado.innerHTML = `<br>Posição em não conformidade: ${i}.`
		}

		return e >= 18
	})

	if (retorno == true) {
		resultado.innerHTML = '<br>O vetor está em conformidade com a regra.'
	}

	console.log(retorno)

})
