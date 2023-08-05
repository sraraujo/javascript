function verificar(){   
    var dataNascimento  =   window.document.getElementById('ano')
    var sexo = window.document.getElementsByName('sexo')
    var resposta = window.document.getElementById('resposta')
    
    
    var agora = new Date()
    var idade;

    dataNascimento = Number(dataNascimento.value)
    agora = agora.getFullYear()

    idade = agora - dataNascimento

    if (dataNascimento > agora || dataNascimento == ""){
        window.alert(`[ ERRO ] - Data de nascimento inválida ou campo vazio!`)
    
    }else if (idade > 120){
        window.alert(`Sério que você tem ${idade} anos?`)   

    } else{

        // Caso sexo escolhido seja MASCULINO
        if (sexo[0].checked){
            resposta.innerHTML = `Detectamos um <strong>Homem</strong> de <strong>${idade} anos</strong>.`

            // CRIANÇA
            if (idade >= 0 && idade < 11){    
                resposta.innerHTML += `<img src="imagens/criança-m.png">`
            
            // ADOLESCENTE
            } else if (idade >= 11 & idade < 18){
                resposta.innerHTML += `<img src="imagens/adolescente-m.png">`
            
            // ADULTO
            } else if (idade >= 18 && idade < 65){
                resposta.innerHTML += `<img src="imagens/homem.png">`
            
            //IDOSO
            } else if (idade >= 65){
                resposta.innerHTML += `<img src="imagens/idoso.png">`
            }
        
        // Caso sexo escolhido seja FEMININO
        } else if (sexo[1].checked){
            resposta.innerHTML = `Detectamos uma <strong>mulher</strong> de <strong>${idade} anos</strong>.`

            // CRIANÇA
            if (idade >= 0 && idade < 11){
                resposta.innerHTML += `<img src="imagens/criança-f.png">`
            
            // ADOLESCENTE
            } else if (idade >= 11 && idade < 18){
                resposta.innerHTML += `<img src="imagens/adolescente-f.png">`
            
            // ADULTA
            } else if (idade >= 18 && idade < 65){
                resposta.innerHTML += `<img src="imagens/mulher.png">`

            // IDOSA
            }else if (idade >= 65){
                resposta.innerHTML += `<img src="imagens/idosa.png">`
            }
        }
    }
}