//Aula 27 - Funções Geradores Em Javascript - Funções Em Javascript (Parte 7)

//Uma Função Geradora tem o seu retorno adiado até que se precise desse retorno.
//Funções Geradores são um pilar na programação assíncrona em JS.
//Quando uma função comum é chamada, essa função possuem o controle dela mesma.
//No caso das Funções Geradores, ela também podem ter esse controle se preciso.
//Num primeiro momento, a Função Geradora vai retorna um iterador;
//Após isso, ela irá retornar algo sempre que houve um "yield".

//Como escrever funções geradores:

function* cores() {
	yield 'Vermelho'
	yield 'Azul'
	yield 'Verde'
}

let it = cores() //1ª chamada da função. 

console.log('1ª cor: ', it.next().value) //2ª chamada da função.
console.log('2ª cor:', it.next().value)
console.log('3ª cor:', it.next().value)
console.log('4ª cor:', it.next().value) //Retorno: "undefined".

function* perguntas() {
	const nome = yield 'Qual é o seu nome?'
	const esporte = yield 'Qual é o seu esporte favorito?'

	return `O seu nome é ${nome}; o seu esporte favorito é ${esporte}.`
}

let it_2 = perguntas()

console.log(it_2.next().value)
console.log(it_2.next('Sofia').value)
console.log(it_2.next('Vôlei').value)

function* contador() {
	let i = 1

	while (true) {
		yield i++
	}
}

let it_3 = contador()

console.log(it_3.next().value)
console.log(it_3.next().value)
console.log(it_3.next().value)

function* count() {
	let i = 0

	while (true) {
		yield ++i

		if (i >= 10) {
			break
		}
	}
}

let it_4 = count()

for (let c of it_4) {
	console.log(c)
}
