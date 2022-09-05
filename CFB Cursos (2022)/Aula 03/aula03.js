//Aula 03 - Diferença entre LET, VAR e CONST em Javascript

"use strict"

var nome = "Sofia"

//Uma variável é uma posição na memória RAM do computador;
//Variáveis ocupam espaço (memória RAM)! Quanto mais variáveis, mais espaço será ocupado;
//A memória RAM está ligada ao desempenho da máquina, logo, quanto menos memória RAM disponível, menos desempenho;
//Ao declarar uma variável com "var", o JS a eleva ao topo do escopo onde ela foi declarada;
//Em razão disso, essa variável estará disponível para todos os escopos abaixo do escopo da variável em questão.
//P. S.: Em funções, variáveis "var" só podem ser acessadas dentro do escopo da função (e não fora).

if (true) {
	var nome2 = "Ademir"
}

console.log(nome2) //A variável "nome2" ainda pode ser acessada de fora do escopo do "if".

//Caso a variável "nome2" seja declarada como "let", ela não mais poderá ser acessada no "console.log" fora do "if".

//Já variáveis declaradas com "let" fazem com que essas variáveis sejam acessíveis somente do seu respectivo escopo.
//P. S.: Essas variáveis também podem ser acessadas a partir dos escopos conseguintes.
//Variáveis declaradas com "let" são elevadas ao topo do escopo onde foram declaradas;
//Variáveis "let" também pode ter o seu valor alterado.

function teste() {
	let nome3 = "Sofia"

	if (true) {
		console.log(`Este é o conteúdo da variável (do tipo "let") "nome3": "${nome3}".`)
	}

	console.log(`A variável "nome3" também é acessível daqui: ${nome3}.`)
}

//console.log(`A variável "nome3" não pode ser acessada deste escopo.`)

teste()

let dado = "Ademir"
console.log(dado)

dado = 10
console.log(dado)

//O JS realiza o "casting" (conversão de tipo de variável) automaticamente.

//Já variáveis declaradas com "const" não podem ter o seu valor alterado.

const curso = "Javascript"
console.log(curso)
