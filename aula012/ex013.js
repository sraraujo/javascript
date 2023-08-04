var agora = new Date()
var diaSemana = agora.getDay()

switch(diaSemana){
    case 0:
        console.log('Domingo')
        break

    case 1:
        console.log('Segunda')
        break

    case 2:
        console.log('Terça')
        break
    
    case 3:
        console.log('Quarta-feira')
        break
    
    case 4:
        console.log('quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    
    case 6:
        console.log('Sábado')
        break
    
        default:
            console.log('[ERRO] - Dia inválido!')
            break
}