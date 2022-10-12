//Aula 30 - Aprendendo Sobre o Método "getElementById" - Manipulando DOM (Parte 1)

const c1 = document.getElementById('c1')

console.log(c1)
console.log(`"ID" do elemento selecionado: ${c1.id}.`)
console.log(` Conteúdo do elemento selecionado: ${c1.innerHTML}.`)

c1.innerHTML = 'Curso de HTML'

const c2 = document.getElementById('c2')

//Criando um "array" com os elementos selecionados:

const vetor = [c1, c2]

console.log(vetor)

/*Alterando o conteúdo dos elementos selecionados:

for (let i = 0; i < vetor.length; i++) {
	console.log(vetor[i].innerHTML = 'Olá, mundo!')
}

Com "For of":

for (c of vetor) {
	console.log(c.innerHTML = 'Olá, mundo!')
}

Com "Map":

vetor.map((e) => {

	1ª opção:

	console.log(e.innerHTML = 'Olá, mundo!')

	2ª opção:

	e.innerHTML = 'Olá, mundo!'

	console.log(e)
})*/
