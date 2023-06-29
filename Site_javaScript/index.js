function carregar() {
    var img = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 1
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 7 && hora < 12) {
        img.src = 'pexels-dario-fernandez-ruz-6421579.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // return 'Boa tarde!'
        img.src = 'pexels-markoaim-16549119.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // return 'Boa Noite!'
        img.src = 'pexels-matheus-bertelli-2376991.jpg'
        document.body.style.background = '#515154'
    }
}

function horario() {
    var horario_1 = document.getElementById('horarios')
    if (horario => 7 && horario < 12) {
        horarios.innerHTML = 'Bom Dia!'
    } else if (horarios >= 12 && horarios <= 18){
        horarios.innerHTML = 'Boa Tarde!'
    } else {
        horarios.innerHTML = 'Boa Noite!'
    }
}