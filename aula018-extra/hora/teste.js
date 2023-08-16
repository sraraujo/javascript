var agora = new Date()

var hora = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()

var dia = agora.getDay()

switch (dia) {
    case dia == 0:
        dia = 'Domingo'
        break

    case dia == 1:
        dia = 'Segunda-Feira'
        break

    case dia == 2:
        dia = 'Terça-Feira'
        break

    case dia == 3:
        dia = 'Quarta-Feira'
        break

    case dia == 4:
        dia = 'Quinta-Feira'
        break
    case dia == 5:
        dia = 'Sexta-Feira'
        break

    case dia == 6:
        dia = 'Sábado'
        break

    default:
        break;
}

console.log(`Hoje é dia ${dia}`)