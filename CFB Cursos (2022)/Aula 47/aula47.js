//Aula 47 - Método "find" Para Encontrar Elementos Em "Arrays" Em Javascript

//O método "find" permite pesquisar por elementos em um "array";
//Caso o elemento seja encontrado, ele será retornado (somente o primeiro elemento é retornado);
//Caso o elemento seja encontrado, o resultado será "true"; caso não, "undefined".

const vetor = document.querySelector('#array')
const pesquisar = document.querySelector('#texto_pesquisar_id')
const botão_pesquisar = document.querySelector('#botão_pesquisar')
const resultado = document.querySelector('#resultado')

const números = [10, 5, 8, 2, 9, 15, 20]
const textos = ['HTML', 'CSS', 'Javascript']

vetor.innerHTML = `<br>[${números}]`

botão_pesquisar.addEventListener('click', (event) => {
	const retorno = números.find((e, i) => {
		//Parâmetros: 1ª: elemento; 2ª: índice; 3ª: vetor ("array").
		
		resultado.innerHTML = '<br>Valor não encontrado.'

		if (e /*.toUpperCase()*/ == pesquisar.value /*.toUpperCase()*/ ) {

			resultado.innerHTML = `<br> Posição: ${e}; Índice: ${i}`

			return e
		}

	})

	console.log(retorno)

	/*const retorno_2 = textos.find((e, i) => {
		//Parâmetros: 1ª: elemento; 2ª: índice; 3ª: vetor ("array").
		
		resultado.innerHTML = '<br>Valor não encontrado.'

		if (e == pesquisar.value) {

			resultado.innerHTML = `<br> Posição: ${e}; Índice: ${i}`

			return e
		}

	})

	console.log(retorno_2)*/

})
