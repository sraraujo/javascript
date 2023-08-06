function contar(){
    var inicio = document.getElementById('inicio').value
    var passo = document.getElementById('passo').value
    var fim = document.getElementById('fim').value
    var resposta = document.getElementById('resposta')

    while (inicio <= fim){
        resposta.innerText = `${inicio} -> `

        inicio += passo
    }
}