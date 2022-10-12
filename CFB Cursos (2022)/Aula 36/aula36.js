//Aula 36 - Praticando "addEventListener" - Eventos Em Javascript (Parte 3)
 
 const caixa_1 = document.querySelector('#caixa1')
 const caixa_2 = document.getElementById('caixa2')
 const botão = document.querySelector('#botão_transferir')
 const cursos = [...document.querySelectorAll('.curso')]

cursos.map((e) => {
	e.addEventListener('click', (e) => {
		const elemento = e.target
		elemento.classList.toggle('selecionado')

		console.log(elemento)
	})
})

botão.addEventListener('click', () => {
	const selecionado = [...document.querySelectorAll('.selecionado')]

	//A chave ":not()." funciona para selecionar os elementos que não possuem a referência apresentada.

	const não_selecionado = [...document.querySelectorAll('.curso:not(.selecionado)')]

	selecionado.map((e) => {
		caixa_2.appendChild(e)
	})

	não_selecionado.map((e) => {
		caixa_1.appendChild(e)
	})
})
