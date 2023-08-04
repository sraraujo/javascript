var agora = new Date()

var hora = agora.getHours()
var minutos = agora.getMinutes()

if (minutos < 10){
    minutos = `0${minutos}`
}

console.log(`Agora são exatamente ${hora}h${minutos}`)
if (hora > 0 && hora <12){
    console.log('Bom dia!')

} else if (hora >= 12 && hora <= 18){
    console.log('Boa tarde!')

} else{
    console.log('Boa noite!')
}