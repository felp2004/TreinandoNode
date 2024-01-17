const listaLivros = require('./array')


function ordena(parte1, parte2){
    let posicaoAtual1 = 0
    let posicaoAtual2 = 0
    const resultado = []

    while(posicaoAtual1 < parte1.length && posicaoAtual2 < parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtual1]
        let produtoAtualParte2 = parte2[posicaoAtual2]

        if(produtoAtualParte1.preco < produtoAtualParte2.preco){
            resultado.push(parte1[posicaoAtual1])
            posicaoAtual1++
        }else{
            resultado.push(parte2[posicaoAtual2])
            posicaoAtual2++ 
        }
    }

    return resultado.concat(posicaoAtual1 < parte1.length ? parte1.slice(posicaoAtual1): parte2.slice(posicaoAtual2))



}



function mergeSort(array){
    if(array.length > 1){
        const meio = Math.floor(array.length/2)
        const parte2 = mergeSort(array.slice(meio, array.length))
        const parte1 = mergeSort(array.slice(0, meio))
        array = ordena(parte1, parte2)
    }

    return array
}


console.log(mergeSort(listaLivros))



