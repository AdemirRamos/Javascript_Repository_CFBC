//Aula 43 - Entendendo O Método "filter" Em Javascript (Parte 2)

const caixa_cursos = document.querySelector('#caixa_cursos')
const botão = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'React Native']
const botão_curso_selecionado = document.getElementById('botão_curso_selecionado')

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
