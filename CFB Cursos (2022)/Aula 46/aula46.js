//Aula 46 - Método "toggle" Para Gerenciar Classes CSS Em Javascript

const caixa_cursos = document.querySelector('#caixa_cursos')
const botão = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'React Native']
const botão_curso_selecionado = document.getElementById('botão_curso_selecionado')
const botão_remover_curso = document.getElementById('botão_remover_curso')
const botão_adicionar_antes = document.getElementById('adicionar_antes')
const botão_adicionar_depois = document.getElementById('adicionar_depois')
const nome_curso = document.getElementById('nome_curso_id')

let índice = 0

const tirar_seleção = () => {
	const cursos_selecionados = [...document.querySelectorAll('.selecionado')]

	cursos_selecionados.map((e) => {
		e.classList.remove('selecionado')
	})
}

const criar_novo_curso = (curso) => {
	const novo_elemento = document.createElement('div')
	novo_elemento.setAttribute('id', 'c' + índice)
	novo_elemento.setAttribute('class', 'curso c1')
	novo_elemento.innerHTML = curso

	novo_elemento.addEventListener('click', (e) => {
		tirar_seleção()
		e.target.classList.toggle('selecionado')
	})

	return novo_elemento
}

cursos.map((e, c) => {
	const novo_elemento = criar_novo_curso(e)
	caixa_cursos.appendChild(novo_elemento)
	índice++
})

const curso_selecionado = () => {
	const cursos_selecionados = [...document.querySelectorAll('.selecionado')]
	return cursos_selecionados[0]
}

botão_curso_selecionado.addEventListener('click', (event) => {
	try {
		alert(`Curso selecionado: ${curso_selecionado().innerHTML}.`)
	}

	catch (exception) {
		alert('Nenhum curso foi selecionado.')
	}
})

botão_remover_curso.addEventListener('click', (event) => {

	const cs = curso_selecionado()

	if (cs != undefined) {	
		cs.remove()
	}

	else {
		alert('Nenhum curso foi selecionado.')
	}
})

botão_adicionar_antes.addEventListener('click', (e) => {
	try {

		if (nome_curso.value != '') {
			const novo_curso = criar_novo_curso(nome_curso.value)
			caixa_cursos.insertBefore(novo_curso, curso_selecionado())
		}

		else {
			alert('Digite o nome do curso.')
		}
	}

	catch (exception) {
		alert('Nenhum curso foi selecionado.')
	}
})

botão_adicionar_depois.addEventListener('click', (e) => {
	try {

		if (nome_curso.value != '') {
			const novo_curso = criar_novo_curso(nome_curso.value)
			caixa_cursos.insertBefore(novo_curso, curso_selecionado().nextSibling)
		}

		else {
			alert('Digite o nome do curso.')
		}
	}

	catch (exception) {
		alert('Nenhum curso foi selecionado.')
	}
})
