//Aula 19 - Entenda As Declarações "break" e "continue" Em Javascript

//"break" gera uma interrupção na execução do programa;
//Já "continue", quando executado dentro de um "loop", ele para somente a execução imediata/atual;
//Feito isso, "continue" segue com a execução do programa, normalmente - até achar um "break" ou outro "continue".

let número = 0
let n = 0
let max = 100
let pares = 0

while (número < max) {
	console.log(`CFB Cursos. Valor da "número": ${número}.`)

	if (número >= 50) {
		break
	}

	número += 10
}

for (let i = n; i < max; i++) {
	console.log(`CFC Cursos. Valor da "número": ${i}.`)

	if (i % 2 == 0) {
		pares++
	}
}

for (let i = 0; i < 100; i += 1) {
	if (i % 2 != 0) {
		continue
	}

	pares++
}

console.log(`Número de números pares detectados: ${pares}.`)
console.log('Fim do programa.')
