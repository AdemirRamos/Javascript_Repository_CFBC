//Aula 35 - Praticando "addEventListener" - Eventos Em Javascript (Parte 2)
 
 const caixa_1 = document.querySelector('#caixa1')
 const caixa_2 = document.getElementById('caixa2')
 const botão = document.querySelector('#botão_copiar')
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

	selecionado.map((e) => {
		caixa_2.appendChild(e)
	})
})

cursos.map((e) => {
	e.addEventListener('click', (e) => {
		elemento = e.target
		caixa_1.appendChild(elemento)
	})
})
