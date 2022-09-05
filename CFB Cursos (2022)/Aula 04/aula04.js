//Aula 04 - Aprenda Sobre Os Operadores Matemáticos Em Javascript

//let número1, número2

//Outra possibilidade de declaração: let número1 = 0, número2 = 0

let número1 = 0
let número2 = 0
let resultado = 0

//Diferentes variáveis com um mesmo valor:

//let número1, número2, número3
//número1 = número2 = número3 = 10

//Dica: as "boas práticas" recomendam que, ao se declarar uma variável, já se atribua imediatamente o seu valor.
//Ao invés de se declarar várias variáveis em um única linha e atribuir seus respectivos valores posteriormente.

número1 = 5
número2 = 10
resultado = número1 + número2

console.log(resultado)

//A operação também pode ser feita no "console.log()":

console.log(número2 - número1)

//As regras da matemática também são válidas:

resultado = (número1 + número2) * 2

console.log(resultado)

resultado = número1 + número2 * 2 //Resultado: 30. - A multiplicação, no JS, tem precedência sobre a soma.

console.log(resultado)

//O sinal de % (porcentagem) retorna o resto da divisão:

resultado = número2 % número1

console.log(resultado)

//Incremento e Decremento:

número1++ //Resultado: 6.
número2-- //Resultado: 9.

console.log(`Incremento: ${número1}; Decremento: ${número2}.`)

//Outra maneira (mais "livre") de se fazer incrementos e decrementos:

número1 += 2 //Resultado: 8.
número2 -= 2 //Resultado: 7.

console.log(`Incremento: ${número1}; Decremento: ${número2}.`)
