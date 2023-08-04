function verificar(){   
    var dataNascimento  =   window.document.getElementById('ano')
    var sexo = window.document.getElementById('sexo')
    var resposta = window.document.getElementById('resposta')
    
    
    var agora = new Date()
    var idade;

    dataNascimento = Number(dataNascimento.value)
    agora = agora.getFullYear()

    idade = agora - dataNascimento

    if (dataNascimento > agora || dataNascimento == ""){
        window.alert(`[ ERRO ] - Data de nascimento inválida ou campo vazio!`)
    
    }else if (idade > 120){
        window.alert(`Sério que você tem mais de ${idade} anos?`)   
    } 

    if (sexo.checked[0]){
        resposta.innerText = 'homem'
    }

}