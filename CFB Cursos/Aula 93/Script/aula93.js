var dv1

window.addEventListener('load', iniciar)

function iniciar() {
    dv1 = document.getElementById('dv1')
    dv1.addEventListener('click', trocar)
}

function trocar() {
    var objeto = event.target //Buscar um substituto para "event".
    objeto.sytle.backgroundImage = "url('Imagens/car3.jpg')"
}
