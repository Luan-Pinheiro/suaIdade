let datas = {
    ano: new Date().getFullYear(),
    anoInserido: document.getElementById('txtano')
}

function verificar(){
    datas.anoInserido.value < datas.ano ? seletor() : parar();
}

function seletor(){
    let res = document.querySelector('div#res')
    let idadeAux = datas.ano - datas.anoInserido.value;
    let gen = document.getElementsByName('radsex');
    let genero = '';
    let img = document.createElement('img');
    img.setAttribute('id','imagem');
    if(gen[0].checked){
        genero = 'do sexo Masculino';
        if(idadeAux >= 0 && idadeAux<=12){
            img.setAttribute('src','homemCrianca.png')
        }
        else if(idadeAux > 12 && idadeAux<=21){
            img.setAttribute('src','homemJovem.png')
        }
        else if(idadeAux > 21 && idadeAux<= 45){
            img.setAttribute('src','homemAdulto.png')
        }
        else if(idadeAux > 45 && idadeAux<= 105){
            img.setAttribute('src','homemIdoso.png')
        }
    }else{
        genero = 'do sexo Feminino';
        if(idadeAux >= 0 && idadeAux<=12){
            img.setAttribute('src','meninaCrianca.png')
        }
        else if(idadeAux > 12 && idadeAux<=21){
            img.setAttribute('src','mulherJovem.png')
        }
        else if(idadeAux > 21 && idadeAux<= 45){
            img.setAttribute('src','mulherAdulta.png')
        }
        else if(idadeAux > 45 && idadeAux<= 105){
            img.setAttribute('src','mulherIdosa.png')
        }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Você é ${genero} e tem ${idadeAux} anos`;
    res.appendChild(img);
}

function parar(){
    alert("Insira uma data válida");
    location.reload();
}




