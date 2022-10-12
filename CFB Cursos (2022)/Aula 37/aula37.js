//Aula 37 - Parando a Propagação do Evento Com o Método "stopPropagation" - Eventos Em Javascript (Parte 4)
 
const caixa_1 = document.getElementById('caixa1')
const botão_c1 = document.querySelector('#c1')
const stop = [...document.getElementsByClassName('curso')]

caixa_1.addEventListener('click', (e) => {
	console.log('Clicou!')
	console.log(e.target)
})

//Ao se disparar um evento, esse evento será passado para a função atralada ao escutador do evento.

botão_c1.addEventListener('click', (e) => {
	e.stopPropagation()
})

stop.map((e) => {
	e.addEventListener('click', (e) => {
		e.stopPropagation()
	})
})

//"addEventListener" só funciona caso um único elemento seja selecionado;
//Caso se selecionem vários elementos de uma só vez, se deve usar "map" ou outros métodos/funções.
