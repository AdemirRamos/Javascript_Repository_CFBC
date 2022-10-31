//Aula 49 - Aprendendo Sobre o Método "some" Em Javascript

//"some" funciona de modo parecido com "every";
//A diferença é: "some" retorna "true" caso pelo menos um item do vetor passe no teste lógico.

const vetor = document.querySelector('#array')
const botão_verificar = document.querySelector('#botão_verificar')
const resultado = document.querySelector('#resultado')

const números = [16, 12, 10, 17, 15, 13, 11, 19]
const textos = ['HTML', 'CSS', 'Javascript']

vetor.innerHTML = `<br>[${números}]`

botão_verificar.addEventListener('click', (event) => {
	//resultado.innerHTML = '<br>O vetor não está em conformidade com a regra.'

	const retorno = números.some((e, i) => {
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
