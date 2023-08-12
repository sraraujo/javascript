function analisandoHora(){
    var frase = document.getElementById('mostrar-hora')
    var saudação = document.getElementById('atualizar')
    var foto = document.getElementById('foto')

    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    var segundos = agora.getSeconds()

    // aqui ao rodar o código, verificamos os segundos, pois usaremos para 
    if (segundos < 59){
        segundos -= 60

    }else{
        segundos = 0
    }

    // tratamneto para colocar um "zero" do lado esquerdo, caso "minuto" seja menor que dez.
    if (minutos < 10){ minutos = `0${minutos}`}
 
    frase.innerHTML = `Agora são <strong>${hora}h${minutos}</strong>`

    if (hora >= 0 && hora < 6){
        saudação.innerText = '- Boa Madrugada'
        foto.innerHTML = `<img src="imagens/madrugada.jpg">`
        window.document.body.style.backgroundColor = "#252422"      
        
    } else if (hora >= 6 && hora < 12){
        saudação.innerText = '- Bom Dia'
        foto.innerHTML = `<img src="imagens/amanhecer.jpg">`
        window.document.body.style.backgroundColor = "#7291a3"
    
    } else if (hora >=12 && hora < 18){
        saudação.innerText = '- Boa Tarde'
        foto.innerHTML = `<img src="imagens/tarde.jpg">`
        window.document.body.style.backgroundColor = '#c5c1b6'

    } else if (hora >= 18 ){
        saudação.innerText = '- Boa Noite'
        foto.innerHTML = `<img src="imagens/noite.jpg">`
        window.document.body.style.backgroundColor = "#0d1009"
    }

    setInterval(() => analisandoHora(), segundos * 1000)
}