//Entendendo O Método "filter" Em Javascript (Parte 1)

//O método "filter" pode percorrer (tratar) um "array" (vetor) e permite filtragens a partir disso.
//A filtragem retorna como um novo "array".

const idades = [15, 21, 30, 17, 18, 44, 12, 50]

//Se pode usar a função direto em "filter" ou fora dele;
//Também é facultativa a escolha de função anônima ou não.

const maior_18 = (v, i, a) => {

	//Parâmetros: 1ª: valor; 2ª: posição; 3ª: "array". 
	//Não é obrigatório usar todos os três parâmetros acima.

	return v >= 18 ? v : ''
}

const maior = idades.filter(maior_18)

const maior_2 = idades.filter((v) => {
	return v >= 18 ? v : ''
})

const menor = idades.filter((v) => {
	return v <= 18 ? v : ''
})

console.log(idades)
console.log(maior)
console.log(maior_2)
console.log(menor)
