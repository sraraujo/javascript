function hoje(){
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()

    if (minutos < 10){
        minutos = `0${minutos}`
    }
    return `Agora são ${hora}h${minutos}`
}
