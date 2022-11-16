//Aula 57 - Objetos Em Javascript (Parte 1)

class Pessoa{

	//O "Método Construtor" é automaticamente chamado ao se instanciar uma determinada classe.

	/*constructor() {
		this.nome = 'Sofia'
	}*/

	//Usando parâmetros no "Método Construtor":

	constructor(n) {
		this.nome = n
	}

}

//let person = new Pessoa()

//Caso o "Método Construtor" receba parâmetros, ao instanciar a classe, se deve passar tais parâmetros.

let p1 = new Pessoa('Sofia')
let p2 = new Pessoa('Natália')
let p3 = new Pessoa('Roseli')

//Se pode passar qualquer valor para o Método Construtor ("strings", números, variáveis, et cetera).

//Também se pode fazer assim: "let person = new Pessoa().nome".

//Esses parênteses fazem referencia direta aos parênteses do "Método Construtor".
//Toda vez que "new" for usado, significa que uma nova instância de uma determinada classe foi criada.
//Além disso, o "new" também executa (automaticamente) o Construtor da classe instanciada.

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)
