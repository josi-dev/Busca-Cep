

async function buscar() {
    
    var input = document.getElementById("input").value
    
    
    
      let Api = await fetch('https://viacep.com.br/ws/' + input + '/json/').then(response => response.json())
    
    
    var tagRes = [...document.querySelectorAll("#boxResultados p")]
    
    tagRes[0].innerHTML = "Cep: " + Api.cep
    tagRes[1].innerHTML = "Logradouro: " + Api.logradouro
    tagRes[2].innerHTML = "Complemento: " + Api.complemento
    tagRes[3].innerHTML = "Bairro: " + Api.bairro
    tagRes[4].innerHTML = "Localidade: " + Api.localidade
    tagRes[5].innerHTML = "UF: " + Api.uf
    
    
    tagRes[8].innerHTML = "DDD: " + Api.ddd
    
    
    
    console.log(Api.cep)
    console.log(Api.logradouro)
    console.log(Api.complemento)
    console.log(Api.bairro)
    console.log(Api.localidade)
    console.log(Api.uf)
    console.log(Api.ibge)
    console.log(Api.gia)
    console.log(Api.ddd)
    console.log(Api.siafi)
    
    
}




function escrever() {
    
    var input = document.getElementById("input").value 
    
    
    if (input.length < 8) {
        document.getElementsByTagName("small")[0].innerHTML = 'o cep tem que ter no mínimo 8 dígitos'
        document.getElementById("botao").removeAttribute("onclick")
    }else if (input.length > 8){
        document.getElementsByTagName("small")[0].innerHTML = 'o cep tem que ter menos que 9 digito'
        document.getElementById("botao").removeAttribute("onclick")
        
    } else {
        document.getElementById("botao").setAttribute("onclick","buscar()")
        document.getElementsByTagName("small")[0].innerHTML = ''
    }
    
    
}



