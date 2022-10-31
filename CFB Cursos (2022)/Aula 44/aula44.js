//Aula 44 - Removendo Elementos Do DOM Em Javascript - Função "remove()"

const caixa_cursos = document.querySelector('#caixa_cursos')
const botão = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'React Native']
const botão_curso_selecionado = document.getElementById('botão_curso_selecionado')
const botão_remover_curso = document.getElementById('botão_remover_curso')

cursos.map((e, c) => {
	const novo_elemento = document.createElement('div')
	novo_elemento.setAttribute('id', 'c' + c)
	novo_elemento.setAttribute('class', 'curso c1')
	novo_elemento.innerHTML = e

	const comandos = document.createElement('div')
	comandos.setAttribute('class', 'comandos')

	const rb = document.createElement('input')
	rb.setAttribute('type', 'radio')
	rb.setAttribute('name', 'rb_curso')

	comandos.appendChild(rb)
	novo_elemento.appendChild(comandos)
	caixa_cursos.appendChild(novo_elemento)
})

const radio_selecionado = () => {
	const todos_radios = [...document.querySelectorAll('input[type=radio]')]

	const radio_selecionado = todos_radios.filter((e, i, a) => {
		return e.checked
	})

	return radio_selecionado[0]
}

botão_curso_selecionado.addEventListener('click', (event) => {
	const rs = radio_selecionado()

	try {
		const curso_selecionado = rs.parentNode.previousSibling.textContent
		console.log(curso_selecionado)
		alert(`Curso selecionado: ${curso_selecionado}.`)
	}

	catch (exception) {
		alert('Nenhum curso foi selecionado.')
	}
})

botão_remover_curso.addEventListener('click', (event) => {

	const rs = radio_selecionado()

	if (rs != undefined) {
		const curso_selecionado = rs.parentNode.parentNode	
		curso_selecionado.remove()
	}

	else {
		alert('Nenhum curso foi selecionado.')
	}
})
