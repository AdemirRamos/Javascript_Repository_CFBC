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

botão_curso_selecionado.addEventListener('click', (event) => {
	const todos_radios = [...document.querySelectorAll('input[type=radio]')]
	
	let radio_selecionado = todos_radios.filter((e, i, a) => {
		//Parâmetros: 1ª: elemento; 2ª índice; 3ª "array".

		return e.checked
	})

	radio_selecionado = radio_selecionado[0]

	//1ª Possibilidade:
	const curso_selecionado = radio_selecionado.parentNode.parentNode.firstChild.textContent


	//2ª Possibilidade:
	const curso_selecionado_2 = radio_selecionado.parentNode.previousSibling.textContent	

	console.log(todos_radios)
	console.log(radio_selecionado)
	console.log(curso_selecionado)
	console.log(curso_selecionado_2)

	alert(`Curso selecionado: ${curso_selecionado}.`)

})
