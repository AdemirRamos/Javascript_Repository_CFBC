//Aula 15 - "Loop For" Em Javascript

//Nas "Estruturas de Repetições" ('loops'), as repetições são chamadas de "iterações".
//"loops definidos": sabemos quantas vezes vão (ou queremos) que sejam repetidos;
//"loops indefnidos": não sabemos quantas vezes vão ser repetidos.

for (let i = 0; i < 5; i++) {
	console.log('CFB Cursos.')
}

for (let i = 0; i <= 10; i++) {
	if (i % 2 == 0) {
		console.log(`Valor (par) de "i": ${i}.`)
	}

	else {
		console.log(`Valor (ímpar) de "i": ${i}.`)
	}
}
