//Aula 14 - Comando "Switch Case" Em Javascript

let colocação = 1

switch (colocação) {
	case 1: {
		console.log('Colocação: 1ª.')
		break
	}

	case 2:
		console.log('Colocação: 2ª.')
		break

	case 3: {
		console.log('Colocação: 2ª.')
		break
	}

	//Vários casos compartilhando um mesmo comando:

	case 4: case 5: case 6: 
		console.log('Você ganhou um prêmio pela sua posição.')
		break

	default: {
		console.log('Não há colocação.')
		break
	}
}

//Os blocos de comandos podem ser usados facultativamente com o "Switch Case".
//Se usa o "Switch Case" quando se sabe (ou se espera) um resultado específico de um teste lógico.
