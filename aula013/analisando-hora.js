function analisandoHora(){
    var frase = document.getElementById('mostrar-hora')
    var foto = document.getElementById('foto')

    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()

    if (minutos < 10){ minutos = `0${minutos}`}

    frase.innerHTML = `Agora são <strong>${hora}h${minutos}</strong>.`

    if (hora > 0 && hora < 6){
        foto.innerHTML = `<img src="imagens/madrugada.jpg">`
        window.document.body.style.backgroundColor = "#252422"      
        
    } else if (hora >= 6 && hora < 12){
        foto.innerHTML = `<img src="imagens/amanhecer.jpg">`
        window.document.body.style.backgroundColor = "#7291a3"
    
    } else if (hora >=12 && hora < 18){
        foto.innerHTML = `<img src="imagens/tarde.jpg">`
        window.document.body.style.backgroundColor = '#c5c1b6'

    } else if (hora >= 18 ){
        foto.innerHTML = `<img src="imagens/noite.jpg">`
        window.document.body.style.backgroundColor = "#0d1009"

    }
}