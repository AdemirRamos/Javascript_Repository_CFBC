//Aula 33 - "querySelector" e "querySelectorAll" - Manipulando DOM (Parte 4)

const all_divs = [...document.getElementsByTagName('div')]
const all_courses = [...document.getElementsByClassName('curso')]
const cursos_c1 = [...document.getElementsByClassName('c1')]
const cursos_c2 = [...document.getElementsByClassName('c2')]
const curso_especial = document.getElementById('c1')

//"querySelectorAll" seleciona todos os elementos que correspondam à referência dada;
//"querySelector" seleciona somente um elemento que corresponda à referência dada;
//Ainda no caso de "querySelector", a primeira ocorrência encontrada será a primeira selecionada.

//const query_1 = document.querySelectorAll('div') //Retorno: "NodeList".

//"NodeList" é quase igual a "HTML Collection"; a diferença é que "NodeList" é mais antigo do que "HTML Collection". 

//Convertendo uma "NodeList" Para "Array":

const query_1 = [...document.querySelectorAll('div, p')]

//Também é possível selecionar elementos a partir de mais de uma referência (div e p).

const query_2 = [...document.querySelectorAll('div.curso')]
const query_3 = [...document.querySelectorAll('.c1, p')]
const query_4 = [...document.querySelectorAll('.c2')]
const query_5 = document.querySelector('#c2')
const query_6 = [...document.querySelectorAll('div[class]')]
const query_7 = [...document.querySelectorAll('div > p')]

//Outra opção para fazer a mesma seleção acima:

//const query_5 = document.querySelectorAll('#c2')[0]

/*console.log(all_divs)
console.log(all_courses)
console.log(cursos_c1)
console.log(cursos_c2)
console.log(curso_especial)*/

console.log(query_1)
console.log(query_2)
console.log(query_3)
console.log(query_4)
console.log(query_5)
console.log(query_6)
console.log(query_7)

/*all_courses.map((e) => {
	e.classList.add('destaque')
})*/
