//Aula 07 - Operadores Lógicos Em Javascript, Aprendendo a Usar!

//Ver aula 07 para ver a "Tabela Verdade".

let n1 = 10, n2 = 5, n3 = 15, n4 = 2

console.log((n1 > n2) && (n1 > n3))
console.log((n1 > n2) || (n1 > n3))
console.log(!((n1 > n2) || (n1 > n3)))

if ((n1 > n2) && (n3 > n4)) {
	console.log('Verdadeiro.')
}

else {
	console.log('Falso.')
}
