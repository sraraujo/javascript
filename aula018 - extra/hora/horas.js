var resultado = document.getElementById('resultado')

function hoje(){
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    var segundps = agora.getSeconds()

    if (minutos < 10){
        minutos = `0${minutos}`
    }

    if (segundps < 9){
        segundps = `0${segundps}`
    }
    resultado.innerHTML = `<p id="p-relogio">${hora}:${minutos}:${segundps}</p>`
    
    setInterval(() => hoje(), 1000)
    setInterval(() => analisandoHora(), segundos * 1000)
}
