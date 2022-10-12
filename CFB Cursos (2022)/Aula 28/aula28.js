//Aula 28 - Aprendendo Sobre o Método "MAP" Em Javascript

const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']

//Map pode receber três parâmetros; 1ª: o elemento da coleção iterada; 2ª: índice; 3ª: a coleção em si.

cursos.map((e, i) => {
	console.log(`Curso: ${e}; Posição: ${i + 1}.`)
})

//O método "map" é indicado para quando se deseja percorrer uma coleção inteira;
//Também percorrer e trabalhar com os elementos; ou trabalhar e retornar elementos;
//Ou mesmo trabalhar ou retornar elementos (sem interrupção);
//O método "map" é mais indicado e otimizado para esse fim.

const cursos_2 = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']

let c = cursos.map((e, i) => {
	console.log(`Curso: ${e}; Posição: ${i + 1}.`)
	return `<div>e</div>`
})

console.log('\n', c)

//A coleção HTML abaixo não é iterável sem o "Parâmetro Rest" ("Spread"):

let elementos = document.getElementsByTagName('div')

elementos = [...elementos]

elementos.map((e, i) => {
	//e.innerHTML = 'CFB Cursos'

	console.log(e.innerText)
})

const el = document.getElementsByTagName('div')

const valores = Array.prototype.map.call(el, ({innerHTML}) => innerHTML)
//Parâmetros: 1ª: o vetor a ser operado; 2ª: um objeto ou método/função.

console.log(valores)

const converter_int = (e) => {
	parseInt(e) //Conversão do valor para (um número) inteiro.
}

let números = ['1', '2', '3', '4', '5']

números.map(converter_int)

console.log(números)

//Retornando a coleção já convertida para "int":

const convert_int = (e) => parseInt(e)
números = ['1', '2', '3', '4', '5'].map(convert_int)
console.log(números)

const dobrar = (e) => e * 2
números = ['1', '2', '3', '4', '5'].map(dobrar)
console.log(números)
