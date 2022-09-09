//Aula 16 - "Loops" 'For in' e 'For of' Em Javascript

let números = [10, 20, 30, 40, 50]

for (let i = 0; i < números.length; i++) {
	console.log(números[i])
}

for (n in números) {
	console.log(números[n])
}

for (n of números) {
	console.log(n)
}

//"for in" pode ser usado para os índices; "for of" para os valores correspondentes aos índices.

const objeto = document.getElementsByTagName('div')

for (o in objeto) {
	console.log(objeto[o].innerHTML)
}

for (o of objeto) {
	console.log(o)
	//console.log(o.innerHTML = "Curso")
}
