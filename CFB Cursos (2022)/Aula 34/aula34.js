//Aula 34 - Adicionando Eventos Com "addEventListener" - Eventos Em Javascript (Parte 1)

function mensagem() {
	alert('Você clicou em mim, DIV 2!')
}

const c3 = document.querySelector('div#c3').addEventListener('click', (e) => {
	alert('Agora você clicou na DIV 3!')

	const elemento = e.target.classList.add('destaque')

	console.log(e.target)
})

const cursos = [...document.querySelectorAll('.curso')]

cursos.map((e) => {
	e.addEventListener('click', (e) => {
		const elemento = e.target
		elemento.classList.add('destaque')

		console.log(`Elemento clicado: ${e.target.innerHTML}.`)
	})
})
