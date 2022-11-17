//Aula 60 - Objetos Em Javascript (Parte 4)

function Pessoa(n, i) {

	this.nome = n,
	this.idade = i,

	this.info = function() {
		console.log(`Nome: ${this.nome} | Idade: ${this.idade}`)
	},

	this.get_nome = function() {
		return this.nome
	},

	this.get_idade = function() {
		return this.idade
	},

	this.set_nome = function(n) {
		this.nome = n
	},

	this.set_idade = function(i) {
		this.idade = i
	}
}


let pessoas = []
const botão_adicionar = document.querySelector('#botão_adicionar')
const resultado = document.querySelector('div.resultado')

const adicionar_pessoa = (e) => {
	resultado.innerHTML = ''
	pessoas.map((e) => {
		const div = document.createElement('div')
		div.setAttribute('class', 'pessoa')
		div.innerHTML = `Nome: ${e.get_nome()} | Idade: ${e.get_idade()}.`
		resultado.appendChild(div)
	})
}

botão_adicionar.addEventListener('click', (e) => {
	const nome = document.querySelector('#nome_id')
	const idade = document.querySelector('#idade_id')

	const p = new Pessoa(nome.value, idade.value)

	pessoas.push(p)

	//Limpando os campos do formulário:

	nome.value = ''
	idade.value = ''

	//O "método focus" faz focar no elemento que o recebe.

	nome.focus()
	idade.focus()

	console.log(pessoas)

	adicionar_pessoa()
})
