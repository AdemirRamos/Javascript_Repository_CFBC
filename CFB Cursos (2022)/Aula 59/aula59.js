//Aula 59 - Objetos Em Javascript (Parte 3)

class Pessoa{
	//Em Classes, as propriedades são as variáveis e os métodos as funções.

	constructor(n, i) {
		this.nome = n
		this.idade = i
	}

	//Construindo um método:

	info() {
		console.log(`Nome: ${this.nome} | Idade: ${this.idade}`)
	}

	get_nome() {
		return this.nome
	}

	get_idade() {
		return this.idade
	}

	set_nome(n) {
		this.nome = n
	}

	set_idade(i) {
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
