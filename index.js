const {edGalho, edFolha } = require('./arrays')


function juntaListas(lista1, lista2){
    let listaFinal = []

  
    let posicaoLista1 = 0
    let posicaoLista2 = 0



    while(posicaoLista1 < lista1.length && posicaoLista2 < lista2.length){
        if(lista1[posicaoLista1].preco < lista2[posicaoLista2].preco){
            listaFinal.push(lista1[posicaoLista1])
            posicaoLista1++
        } else if(lista2[posicaoLista2].preco < lista1[posicaoLista1].preco){
            listaFinal.push(lista2[posicaoLista2])
            posicaoLista2++
        }
    }

    

    let maior = posicaoLista1 + 1 === lista1.length ? lista1 : lista2
    let posicaoM = maior === lista1 ? posicaoLista1 : posicaoLista2

    console.log(maior)

    while(posicaoM < maior.length){
        listaFinal.push(maior[posicaoM])
        posicaoM++
    }
    


    return listaFinal
}


console.log(juntaListas(edGalho,edFolha ))