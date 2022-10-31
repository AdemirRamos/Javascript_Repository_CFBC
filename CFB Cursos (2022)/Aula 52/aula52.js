//Aula 52 - Aprendendo Sobre a Coleção "array" Em Javascript (Parte 1)

//Um "array" é uma coleção de dados/variáveis.
//Em JS, no "front-end", se pode criar "arrays" mistos (com tipos diferentes de dados).

const caixa = document.getElementById('caixa')

//Se pode adicionar outros veteroes dentro de um vetor - a isso se dá o nome de "matriz";
//Também é possível adicionar objetos e outras coleções.

let cores = ['Azul', ' Verde', ' Vermelho', ['Claro', ' Médio', ' Escuro']]

let cursos = ['HTML', ' CSS', ' Javascript', cores]

//cursos[0] = 'C++' -> Substituindo o elemento de uma posição do "array".

//Métodos de inserção para "arrays":

cursos.push('C++') //"push()" adiciona o novo elemento à última posição do "array".
cursos.push('Python')
cursos.pop() //"pop" remove o elemento na última posição do "array".
cursos.unshift('Python') //"unshift()" adiciona o novo elemento ao começo do "array".
cursos.shift() //"shift" remove o elemento na primeira posição do "array".

console.log(cursos[0])
console.log(cursos[3])
console.log(cursos[4])
console.log(cursos[3][2]) //Obtendo a "string" 'Vermelho'.
console.log(cursos[3][3])
console.log(cursos[3][3][2]) //Obtendo a "string" 'Escuro'

cursos.map((e) => {
	let p = document.createElement('p')
	p.innerHTML = e
	caixa.appendChild(p)
})

console.log('\n', cursos)
