//Aula 31 - Aprendendo Sobre o Método "getElementsByTagName" - Manipulando DOM (Parte 2)

const coleção_HTML = document.getElementsByTagName('div')

console.log(coleção_HTML) //Retorno: Coleção HTML.

const c1 = document.getElementById('c1')
const c2 = document.getElementById('c2')

const vetor = [c1, c2]

console.log(vetor) //Retorno: "Array" (Vetor).

//Convertendo a coleção de itens "coleção_HTML2" em um "array":

//1ª maneira:

let coleção_HTML2 = document.getElementsByTagName('div')
coleção_HTML2 = [...coleção_HTML2]

//2ª maneira:

//const coleção_HTML2 = [...document.getElementsByTagName('div')]

console.log(coleção_HTML2)
