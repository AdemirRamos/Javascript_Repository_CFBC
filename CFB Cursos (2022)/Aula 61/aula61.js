//Aula 61 - Objetos Em Javascript (Parte 5)

const pessoa = {
	nome: 'Sofia',
	idade: 26,
	get_nome: function() {
		return this.nome
	},
	set_nome: function(n) {
		this.nome = n
	},
}

const p1 = pessoa
const p2 = pessoa
let p3 = pessoa
let p4 = pessoa

p3.nome = 'Ademir'

//Outra maneira de se fazer a atribuição de um novo valor:

p4['nome'] = 'Ramos'

/*
Caso a propriedade "nome" de qualquer uma das "váriaveis p" seja modificada,
todas as outras também serão modificadas.
Isso ocorre porque todas as "variáveis p" recebem o Objeto "pessoa".
*/

console.log(` Objeto literal: ${pessoa} \n Nome: ${p1.nome} \n Idade: ${p2.idade} \n P3: ${p3.nome}`)
console.log(` Último nome: ${p4.nome} | Função do Objeto: ${pessoa.get_nome()}`)

pessoa.set_nome('Antunes')

console.log(` Função "set" do Objeto: ${pessoa.nome}`)
