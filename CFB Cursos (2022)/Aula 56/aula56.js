//Aula 56 - "Template Strings" Em Javascript

const caixa = document.querySelector('#caixa')
const curso = 'Javascript'
const canal = 'CFB Cursos'
const frase = `Este é o curso de ${curso} do canal ${canal}.` //Essa é uma "template string".

//Para gerar quebras de linha, se pode usar "\n" (com "alert" ou "console.log");
//A "tag" '<br/>' para o HTML;
//Ou mesmo só dar enter na frase.

caixa.innerHTML = frase

//Se pode quebrar linha (no código) com as "template strings":

/*caixa.innerHTML = Esta é outra frase.
Esta também.`*/

const carros = ['Polo', 'Golf', 'T-Cross', 'HRV']

let ul = `<ul>`

carros.map((e) => {
	ul += `<li>${e}</li>`
})

ul += `</ul>`

caixa.innerHTML += '<br/><br/>'

caixa.innerHTML += ul
