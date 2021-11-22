var dv1, dv2, dv3, dv4
window.addEventListener('load', iniciar)

function iniciar() {
    dv1 = document.getElementById('dv1')
    dv2 = document.getElementById('dv2')
    dv3 = document.getElementById('dv3')
    dv4 = document.getElementById('dv4')

    dv1.addEventListener('mouseover', troca)
    dv1.addEventListener('mouseout', volta)

    dv2.addEventListener('mouseover', troca)
    dv2.addEventListener('mouseout', volta)

    dv3.addEventListener('mouseover', troca)
    dv3.addEventListener('mouseout', volta)

    dv4.addEventListener('mouseover', troca)
    dv4.addEventListener('mouseout', volta)
}

function troca() {
    var objeto = event.target //Buscar um substituto para "event".
    objeto.sytle.backgroundImage = "url('Imagens/car2.jpg')"
}

function volta() {
    var objeto = event.target
    objeto.sytle.backgroundImage = "url('Imagens/car1.jpg')"
}
