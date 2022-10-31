//Aula 51 - Aprendendo Iteradores e Elementos Iteráveis Em Javascript

//Coleções iteráveis em JS:

//"arrays"; "strings"; "map"; "set".

//Uma coleção iterável retorna um iterador que facilita a manipulação dos elementos da coleção.

const valores = [10, 8, 9, 2, 15, 4, 7, 0]
const it_valores = valores[Symbol.iterator]()

const texto = 'YouTube'
const it_texto = texto[Symbol.iterator]()

console.log(valores)
console.log(it_valores.next()) //"done: false" indica que não se chegou ao final do "array".
console.log(it_valores.next().value)

console.log(texto)
console.log(it_texto.next())
console.log(it_texto.next().value)
