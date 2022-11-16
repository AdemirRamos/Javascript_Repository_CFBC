//Aula 58 - Objetos Em Javascript (Parte 2)

class Carro{

	//Criando uma Propriedade:

	canal = 'CFB Cursos'

	//Em Classes, as propriedades são as variáveis e os métodos as funções.

	constructor(n, t) {

		//A propriedade "canal" também pode ser alterada aqui (dentro do Construtor).
		//Exemplo: this.canal = 'Novo Nome'

		this.nome = n
		
		if (t == 1) {
			this.tipo = 'Esportivo'
			this.velocidade = '300 km/h'
		}

		else if (t == 2) {
			this.tipo = 'Utilitário'
			this.velocidade = '100 km/h'
		}

		else if (t == 3) {
			this.tipo = 'Passeio'
			this.velocidade = '160 km/h'
		}

		else {
			this.tipo = 'Militar'
			this.velocidade = '180 km/h'
		}

	}

	//Construindo um método:

	info() {
		console.log(`Nome: ${this.nome} | Tipo: ${this.tipo} | Velocidade: ${this.velocidade}`)

		//A propriedade "canal" também poderia ser adicionada aqui.
	}

	get_nome() {
		return this.nome
	}

	get_tipo() {
		return this.tipo
	}

	get_velocidade() {
		return this.velocidade
	}

	get_array() {
		return [this.nome, this.tipo, this.velocidade]

		//A propriedade "canal" também poderia ser adicionada aqui.
	}

	set_nome(n) {
		this.nome = n
	}

	set_tipo(t) {
		this.tipo = t
	}

	set_velocidade(v) {
		this.velocidade = v
	}

}

let c1 = new Carro('HRV', 1)
let c2 = new Carro('Mustang', 2)
let c3 = new Carro('BWM', 3)
let c4 = new Carro('SUV', 4)

/*console.log(`${c1.nome} | ${c1.tipo} | ${c1.velocidade}`)
console.log(`${c2.nome} | ${c2.tipo} | ${c2.velocidade}`)
console.log(`${c3.nome} | ${c3.tipo} | ${c3.velocidade}`)
console.log(`${c4.nome} | ${c4.tipo} | ${c4.velocidade}`)*/

c1.info()
c2.info()
c3.info()
c4.info()

console.log('\n', c1.get_nome())
console.log(c1.get_tipo())
console.log(c1.get_velocidade())
console.log(c1.get_array())

c1.set_nome('Honda')
c1.set_tipo('Utilitário')
c1.set_velocidade('200 km/h')
console.log(`Nome: "${c1.get_nome()}" | Tipo: ${c1.get_tipo()} | Velocidade: ${c1.get_velocidade()}`)

console.log('\n', c1.canal)
