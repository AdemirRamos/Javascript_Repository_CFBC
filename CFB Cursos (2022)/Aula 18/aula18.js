//Aula 18 - "While" e "Do While" Em Javascript, Entenda a Diferença

//Em "Do While", pelo menos uma execução do bloco de comandos será executada;
//Já em "while" isso só ocorre caso o teste lógico o permita.

let número = 10

while (número < 10) {
	console.log('CFB Cursos.')
	n++
}

do {
	console.log('CFB Cursos')
} while (número < 10)

console.log('Fim do programa.')
