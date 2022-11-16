//Aula 54 - Aprendendo Sobre a Coleção "map" Em Javascript

const caixa = document.querySelector('#caixa')

//A "Coleção Map" tem como principal característica ser uma coleção composta por uma chave e um valor.
//Na coleção "map", para se conseguir um determinado valor, é preciso referenciar a chave desse valor.

let mapa = new Map()

//Inserindo informações na coleção "mapa":

mapa.set('curso', 'Javascript')

//Foram inseridos dois dados: a chave "curso" e o valor "javascript".

mapa.set(10, 'CFB Cursos')
mapa.set(1, 100)
mapa.set('canal', 200)

//Na "Coleção Map", se pode ter valores iguais, mas não chaves iguais.
//Caso uma chave já exista e seja novamente adicionada, ela sobrescreverá o conteúdo anterior.

//Deletando um elemento da coleção (basta indicar a chave para deletar o valor):

mapa.delete(1)

console.log(mapa)

let posição = 'canal'
let resultado = ''

//O "método has" serve para verificar a existência (ou não) de uma determinada chave.

if (mapa.has(posição)) {
	//caixa.innerHTML = `A chave buscada existe na coleção. - Chave buscada: "${posição}."`
	resultado = `A chave buscada existe na coleção. - Chave buscada: "${posição}."`
}

else {
	//caixa.innerHTML = `A chave buscada não existe na coleção. - Valor da chave buscada: "${mapa.get(posição)}".`
	resultado = `A chave buscada não existe na coleção. - Valor da chave buscada: "${mapa.get(posição)}".`
}

resultado += `<br><br> Tamanho da coleção: ${mapa.size}.`

//Adicionando um dos valores da coleção à div:

//caixa.innerHTML = mapa.get('curso')
caixa.innerHTML = resultado

//Percorrendo a coleção:

mapa.forEach((e) => {
	console.log(e)
})

//Nas posições da "Coleção Map" também se pode adicionar funções, Objetos e outros tipos de dados.
