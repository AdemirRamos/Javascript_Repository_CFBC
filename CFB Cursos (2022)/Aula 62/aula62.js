//Aula 62 - Objetos Em Javascript (Parte 6)

//Herança: é quando uma classe (filho) herda os métodos e propriedades de outra classe (pai).

class Carro { //Classe-pai/base.
	constructor(n, p) {
		this.nome = n
		this.portas = p
		this.ligado = false
		this.velocidade = 0
		this.cor = undefined
	}

	ligar = function() {
		this.ligado = true
	}

	desligar = function() {
		this.ligado = false
	}

	set_cor = function(c) {
		this.cor = c
	}
}

class Militar extends Carro { //Classe-filho.

	/*
	A palavra reservada "extends" faz com que a classe à sua esquerda
	herde o conteúdo da classe à sua direita.
	*/

	constructor(n, p, b, m) {
		super(n, p) //O "Método Super" faz invoca o Método Construtor da classe-pai/base.
		this.blindagem = b
		this.munição = m
		this.set_cor('Verde')
	}

	atirar = function() {
		if (this.munição > 0) {
			this.munição--
		}
	}
}

class Utilitário extends Carro {
	constructor(n, p, l) {
		super(n, p)
		this.lugares = l
	}
}

const c1 = new Carro('Supra', 4)

c1.ligar()
c1.set_cor('Vermelho')

const c2 = new Militar('SUV', 2, 100, 50)

c2.set_cor('Azul')
c2.atirar()

const c3 = new Utilitário('Honda', 4, 5)

console.log(`Nome: ${c1.nome} \nNúmero de portas: ${c1.portas}`)
console.log(`Estado: ${c1.ligado? 'Ligado' : 'Desligado'}`)
console.log(`Velocidade: ${c1.velocidade} \nCor: ${c1.cor}`)
console.log('\n')

console.log(`Nome: ${c2.nome} \nNúmero de portas: ${c2.portas}`)
console.log(`Estado: ${c2.ligado? 'Ligado' : 'Desligado'}`)
console.log(`Velocidade: ${c2.velocidade} \nCor: ${c2.cor}`)
console.log(`Blindagem: ${c2.blindagem} \nMunição: ${c2.munição}`)

console.log(`\nNome: ${c3.nome} | Portas: ${c3.portas} | Lugares ${c3.lugares}`)
