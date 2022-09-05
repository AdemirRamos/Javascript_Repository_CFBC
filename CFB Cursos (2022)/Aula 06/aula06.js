//Aula 06 - Respondendo Perguntas dos Inscritos Parte 1 (aulas de 1 a 5)

//Diferença entre "==" (comparador de igualdade / igual) e "===" (comparador de igualdade irrestrita):

let número1 = 5
let número2 = '5'

console.log(número1 == número2)

//Para o JS, apesar dos tipos diferentes, os valores das variáveis acima são iguais; resultado: "true".

console.log(número1 === número2)

//Já o "===" também verifica o tipo das variáveis (para além dos valores). - Resultado: "false".

let valor1 = {nome: "Sofia"}
let valor2 = {nome: "Sofia"}

console.log(valor1 === valor2) //Resultado: "false".

//Apesar de "valor1" e "valor2" terem os mesmos valores, são espaços (reservados), na memória RAM, diferentes;
//Por isso o resultado do teste lógico é "false". - As chamadas "posições de memória" são diferentes.

let valor3 = {nome: "Sofia"}
let valor4 = valor3

console.log(valor3 === valor4) //Resultado: "true".

//Para receber valores do usuário, em JS, só é possível através de uma interface de usuário;
//O navegador, por exemplo:

let nome = prompt('Digite o seu nome:')

console.log(`O nome digitado foi: "${nome}".`)

//Identificando se o código JS está sendo rodado em um celular ou PC:

if (navigator.userAgent.match(/Android/i) ||
	navigator.userAgent.match(/webOS/i) ||
	navigator.userAgent.match(/iPhone|iPad|/i) ||
	navigator.userAgent.match(/BlackBerry/i) ||
	navigator.userAgent.match(/Windows Phone/i) ||
	navigator.userAgent.match(/Opera Mini/i) ||
	navigator.userAgent.match(/IEMobile/i)
) {
	console.log('Celular.')
}

else {
	console.log('PC.')
}
