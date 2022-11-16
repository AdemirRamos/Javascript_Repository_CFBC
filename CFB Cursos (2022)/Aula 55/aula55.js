//Aula 55 - Aprendendo Sobre a Coleção "set" Em Javascript

//A "Coleção Set" não permite entradas duplicadas de valores;
//Na "Coleção Set" não pode haver dois valores iguais;
//Já em "arrays", por exemplo, se pode ter tantos valores duplicados quanto se quiser.

const caixa = document.querySelector('#caixa')

//Ao se instanciar a classe "Set", já se pode passar valores via construtor - o mesmo vale para "Map".

let músicas = new Set(['Saudade Vem', 'Temporal', 'Christian Brothers'])

//Adicionando novos elementos à coleção:

músicas.add('Mind Eraser, No Chaser')
músicas.add('Mind Eraser, No Chaser') //Esse elemento não será adicionado justamente por ser repetido.
músicas.add("3's and 7's")
músicas.add('AAA')

//Deletando um elemento da coleção:

músicas.delete('AAA')

//Limpando a coleção inteira (esse método também se aplica à "Coleção Map"):

//músicas.clear()

console.log(músicas)

let contador = 1

músicas.forEach((e) => {
	caixa.innerHTML += `${contador++} - ${e} <br>`
})

for (let m of músicas) {
	console.log(m)
}
