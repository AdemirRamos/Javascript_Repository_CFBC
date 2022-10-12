//Aula 29 - Usando o Operador "THIS" Dentro de Funções Em Javascript

function aluno(nome, nota) {
	//Criando váriaveis (para a função "aluno") e aplicando-nas os valores passados para os parâmetros: 

	this.nome = nome
	this.nota = nota

	return `O nome do (a) aluno (a) é: ${nome}; e sua nota é: ${nota}.`
}

console.log(aluno('Sofia', 10))

console.log('\n')

function student(nome, nota) {
	this.nome = nome
	this.nota = nota

	this.dados_anônimos = function() {
		setTimeout(function() {
			//"setTimeout" cria uma nova instância para o "this".
			//Para resolver esse problema, entre outras soluções, basta usar uma "arrow function".

			console.log(`O nome do (a) aluno (a) é: ${this.nome}; e sua nota é: ${this.nota}.`)
		}, 1000)
	}
}

const alun = new student('Sofi', 10)
alun.dados_anônimos()

function student_2(nome, nota) {
	this.nome = nome
	this.nota = nota

	this.dados_arrow_anônimos = function() {
		setTimeout(() => {
			console.log(`O nome do (a) aluno (a) é: ${this.nome}; e sua nota é: ${this.nota}.`)
		}, 1000)
	}
}

const alu = new student_2('Sofi', 10)
alu.dados_arrow_anônimos()
