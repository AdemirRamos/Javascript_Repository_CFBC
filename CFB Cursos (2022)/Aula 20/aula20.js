//Aula 20 - Funções Em Javascript (Parte 1)

//Uma função é um bloco de comando (s) a ser executado em um dado momento do programa.

function nome() { //Declaração da função.
	console.log('CFB Cursos.')
}

nome() //Chamada tradicional de função.

function soma(a, b) {
	return console.log(`Valor da soma: ${a + b}.`)
}

soma(10, 15)

function mudar_texto(id) {
	if (id == 1) {
		document.getElementById('d1').innerHTML = "Novo texto."
	}

	else if (id == 2) {
		document.getElementById('d2').innerText = 'Texto novo.'
	}

	else if (id == 3) {
		document.getElementById('d3').innerHTML = "Novo texto."
	}
}

mudar_texto(2)

function mudarTextoDiv() {
	document.querySelector('div#d1').innerHTML = "Novo texto."
	document.querySelector('div#d2').innerText = "Novo texto."
	document.querySelector('div#d3').innerHTML = "Novo texto."
}
