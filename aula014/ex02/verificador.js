function  analisar(){
    var data_nasc = Number(document.getElementById('nasc').value)
    var resposta = document.getElementById('resposta')
    var sexo = document.getElementsByName('sexo')

    var agora = new Date()
    var ano_atual = agora.getFullYear()
    var idade = ano_atual - data_nasc
    
    if (data_nasc == "" || data_nasc > ano_atual){
        alert("[ ERRO ] - Data inválida ou vazia, tente novamente!")
 
    } else if (idade > 120){
        window.alert(`Sério que você tem ${idade} anos?`)   
        resposta.innerHTML = `<strong>Detectamos</strong> um fóssil com ${idade}`
        resposta.innerHTML += `<img src="imagens/esqueleto.png">`

    } else{
        resposta.innerText = ""
        resposta.style.textAlign="center"   
 
        // Caso sexo marcado seja MASCULINO
        if (sexo[0].checked){
            resposta.innerHTML = `<strong>Detectamos:</strong> um HOMEM de ${idade} ano(s) de idade.`
            resposta.innerHTML += "<hr>"

            if (idade >= 0 && idade < 11){    
                resposta.innerHTML += `<img src="imagens/criança-m.png">`
            
            } else if (idade >= 11 & idade < 18){
                resposta.innerHTML += `<img src="imagens/adolescente-m.png">`

            } else if (idade >= 18 && idade < 65){
                resposta.innerHTML += `<img src="imagens/homem.png">`

            } else if (idade >= 65){
                resposta.innerHTML += `<img src="imagens/idoso.png">`

            }

        // Caso sexo marcado seja FEMININO
        } else if (sexo[1].checked){
            resposta.innerHTML = `<strong>Detectamos:</strong> uma MULHER de ${idade} ano(s) de idade.`
            resposta.innerHTML += "<hr>"

            if (idade >= 0 && idade < 11){    
                resposta.innerHTML += `<img src="imagens/criança-f.png">`
            
            } else if (idade >= 11 & idade < 18){
                resposta.innerHTML += `<img src="imagens/adolescente-f.png">`

            } else if (idade >= 18 && idade < 65){
                resposta.innerHTML += `<img src="imagens/mulher.png">`

            } else if (idade >= 65){
                resposta.innerHTML += `<img src="imagens/idosa.png">`

            }
        }
        
        resposta.innerHTML += "<hr>"
    }
}