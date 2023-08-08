var resposta = document.getElementById('resposta')

function contar(){
    var inicio = Number(document.getElementById('inicio').value)
    var passo = Number(document.getElementById('passo').value)
    var fim = Number(document.getElementById('fim').value)

    if (passo == '' || passo == 0){
        passo = 1
        alert('Passo inválido, considerando passo = 1')
    
    } else if (passo < 0){
        passo *= -1
    }

    if (inicio == "" || fim == ""){
        alert('[ ERRO] - Campo "Início" ou "Fim" vazio')
    
    } else{
        resposta.innerHTML = ''

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
