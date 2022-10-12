//Aula 32 - Aprendendo Sobre o Método "getElementsByClassName" - Manipulando DOM (Parte 3)

/*const all_courses = document.getElementsByClassName('curso') //Retorno: Coleção HTML.

console.log(all_courses)*/

const all_courses = [...document.getElementsByClassName('curso')]
const cursos_c1 = [...document.getElementsByClassName('c1')]
const cursos_c2 = [...document.getElementsByClassName('c2')]
const curso_especial = document.getElementsByClassName('curso')[0]

console.log(all_courses)
console.log(cursos_c1)
console.log(cursos_c2)
console.log(curso_especial)

all_courses.map((e) => {
	e.classList.add('destaque')
})
