function split(wholeArray) {

    let arrelgoMayor = []
    let medio = Math.floor((wholeArray.length) / 2)
    let izquierda = wholeArray.splice(0, medio + 1)
    let derecha = wholeArray.splice(wholeArray[medio], wholeArray.length)
    
    arrelgoMayor.push(izquierda,derecha)
    
    return arrelgoMayor;
  }

function merge (array, array2){
    let arrayOrdenado = []
    for(let i = 0; i < array.length; i++){

      if(array[i] < array2[i]){
        arrayOrdenado.unshift(array[i])
        arrayOrdenado.push(array2[i])
      }
      else{
        arrayOrdenado.unshift(array2[i])
        arrayOrdenado.push(array[i])
      }
    }
    
    return arrayOrdenado

    
}






