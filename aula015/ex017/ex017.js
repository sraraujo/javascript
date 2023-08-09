function tabuar(){
    var numero = document.getElementById('numero')
    var resposta = document.getElementById('resposta')  

    if (numero.value.length == 0){
        alert('Por favor, digite um número!')
    
    }else{
        resposta.innerText = ' '
        numero = Number(numero.value)

        for (var x = 1; x <=10; x++){
            resposta.innerHTML += `<option>${numero} x ${x} = ${numero * x}</option>`
        }
    }   
}