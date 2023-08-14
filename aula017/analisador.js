var numero = document.getElementById('numero')
var selecao = document.getElementById('selecao')
var resposta = document.getElementById('resposta')
var lista = []

function adicionar(){
    
    var valor = verificar(numero)

    //Caso o número não esteja na lista, executa esse código
    if (valor == -1){
        if(lista.length == 0){ selecao.innerHTML = ''}

        lista.push(numero.value)
        selecao.innerHTML += `<option value="">Valor ${numero.value} adicionado</option>`
        resposta.innerHTML = ''
        numero.value = ''
        numero.focus()
    
    // caso o número seja repetido, executa esse código
    }else if (valor > -1){
        alert("Número já cadastrado, tente outro!")
        numero.value = ''
        numero.focus()
    }

}

function verificar(numero){

    //Verifica se o número é válido
    if ( numero.value.length == 0 || numero.value < 1 || numero.value > 100){
        alert('[ ERRO ] - Digite um número entre 1 e 100.')
        numero.value = ''
        numero.focus()

    // aqui verifica a posição numero na lista e retorna essa posição.
    }else {
        var valor = lista.indexOf(numero.value)
        return valor
    } 
}

function finalizar(){
    var maior = lista[0]
    var menor = lista[0]
    var somatotal = 0

    if (lista.length == 0){
        alert('[ ERRO ] - Adicione pelo menos um número antes  de finalizar.')

    } else{
        for (var x in lista){

            somatotal += Number(lista[x])

            if (lista[x] > maior){
                maior = lista[x]
            }
            
            if (lista[x] < menor){
                menor = lista[x]
            }
        }           
    }
    
        resposta.innerHTML = `${lista}`
        resposta.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados</p>`
        resposta.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        resposta.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        resposta.innerHTML += `<p>Somando todos os valores, temos ${somatotal} </p>`
        resposta.innerHTML += `<p>A média dos valores digitados é ${(somatotal / lista.length).toFixed(2)}</p>`
}

