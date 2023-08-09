function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resposta = document.getElementById('resposta')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ ERRO] - Campo "Início", "Fim" ou "Passo" vazio')
        resposta.innerHTML = "Impossível contar!"
   
    } else{
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        resposta.innerHTML = "Contando: <br>"

        if (passo <= 0){
            passo = 1
            alert('Passo inválido, considerando passo = 1')
        }

        if (inicio < fim){

            while (inicio < fim){
                resposta.innerText += `${inicio}`
                inicio += passo
    
                figura(inicio, fim)
            }
        } else if (inicio > fim){
        
            while (fim < inicio){
                resposta.innerText += `${inicio}`
                inicio -= passo
    
                // as variáveis foram investida para não haver troca dos emoji.
                // aqui, a variável fim virará início, e início virará fim na função
                figura(fim, inicio)
            }
        }        
    }
}

function figura(inicio, fim){
    if (inicio < fim){
        resposta.innerHTML += ` &#x1F449 `
    } else{
        resposta.innerHTML += ' &#x1F6A7 '
    }
}
