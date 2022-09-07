//Aula 13 - Comando Condicional "IF" e "IF ELSE" Em Javascript

let número = 10
let número_dois = 5
let clima = 'sol'
let energia = 100

if (número > 10) {
	console.log('Numeral maior do que dez.')
}

else if (número == 10) {
	console.log('Numeral igual a dez.')

	if (número === '10') {
		console.log('Os valores analisados são idênticos.')
	}
}

else {
	console.log('Numeral menor do que dez.')
}

if (número_dois >= 10)
	console.log('Numeral maior ou igual a dez.')
	//Quando se há somente uma linha de comando, o uso do bloco de códigos é facultativo.
	//Em caso de mais de uma linha de comando sem o uso de bloco de códigos, só o primeiro comando pertencerá ao if.

if (energia > 70 && clima == 'sol') {
	console.log('Vou à praia.')
}

else {
	console.log('Não vou à praia.')
}

console.log('Fim do programa.')
