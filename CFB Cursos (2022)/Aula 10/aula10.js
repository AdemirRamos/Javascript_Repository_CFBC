//Aula 10 - Aprendendo Sobre o Operador Ternário

let número = 10

console.log(número % 2 == 0 ? 'Par.' : 'Ímpar.')

let resultado = número % 2

console.log(resultado ? 'Par.' : 'Ímpar.')

//Por ter como resto da divisão "0", o retorno do teste lógico será "false", portanto o retorno será "Ímpar".

//Possível correção (para o problema acima):

console.log(!(resultado) ? 'Par.' : 'Ímpar.')

let n1 = 5
let n2 = 10

console.log(n1 > n2 ? 'Verdadeiro.' : 'Falso.')
