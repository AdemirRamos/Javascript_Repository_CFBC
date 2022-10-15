//Aula 41 - Removendo Elementos Do DOM Em Javascript Com "removeChild"

const caixa_1 = document.getElementById('caixa1')
const botões = [...document.querySelectorAll('.curso')]
const c2 = document.querySelector('#c2')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'Python']

cursos.map((e, i) => {
	const novo_elemento = document.createElement("div")
	novo_elemento.setAttribute('id', 'c' + i)
	novo_elemento.setAttribute('class', 'curso c1')
	novo_elemento.innerHTML = e

	const botão_lixeira = document.createElement('img')
	botão_lixeira.setAttribute('src', './trash.png')
	botão_lixeira.setAttribute('class', 'lixeira')

	novo_elemento.addEventListener('click', (e) => {
		console.log(e.target.parentElement)
		caixa_1.removeChild(e.target.parentElement)
		//caixa_1.removeChild(e.target.parentNode)
	})

	novo_elemento.appendChild(botão_lixeira)

	caixa_1.appendChild(novo_elemento)
})
