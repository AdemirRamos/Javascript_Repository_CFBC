const botão_soma = document.querySelector('#botão_soma')
const botão_subtração = document.querySelector('#botão_subtração')
const botão_multiplicação = document.querySelector('#botão_multiplicação')
const botão_divisão = document.querySelector('#botão_divisão')
const resultado = document.querySelector('#resultado_id')

const operação = [

	() => {
		const valores = [document.getElementById('valor1_id').value, document.getElementById('valor2_id').value]
		resultado.value = Number(valores[0]) + Number(valores[1])
	},

	() => {
		const valores = [document.getElementById('valor1_id').value, document.getElementById('valor2_id').value]
		resultado.value = Number(valores[0]) - Number(valores[1])
	},

	() => {
		const valores = [document.getElementById('valor1_id').value, document.getElementById('valor2_id').value]
		resultado.value = Number(valores[0]) * Number(valores[1])
	},

	() => {
		const valores = [document.getElementById('valor1_id').value, document.getElementById('valor2_id').value]
		resultado.value = Number(valores[0]) / Number(valores[1])
	}

]

botão_soma.addEventListener('click', operação[0])
botão_subtração.addEventListener('click', operação[1])
botão_multiplicação.addEventListener('click', operação[2])
botão_divisão.addEventListener('click', operação[3])
