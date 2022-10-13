//Aula 40 - Criando Novos Elementos e Adicionando-os No DOM Em Javascript

const caixa_1 = document.getElementById('caixa1')
const botões = [...document.querySelectorAll('.curso')]
const c2 = document.querySelector('#c2')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'Python']

//const novo_elemento = document.createElement("div")
//Se indica, entre aspas, qual elemento deve ser criado.

cursos.map((e, i) => {
	const novo_elemento = document.createElement("div")
	novo_elemento.setAttribute('id', 'c' + i)
	novo_elemento.setAttribute('class', 'curso c1')
	novo_elemento.innerHTML = e
	caixa_1.appendChild(novo_elemento)

})
