function bubbleSort(array) {
    
   if(array.length < 1) return []

   let Arreglo = array;
   
   for(let i = 0; i < Arreglo.length ; i++){
       for(let j = Arreglo.length -1; j > i ; j--){
           if(Arreglo[i] > Arreglo[j]) swap(Arreglo,i, j)
       }
   }
   return Arreglo

  }
  
  function swap(Arreglo,i,j) {
    let iViejo = Arreglo[i]
    Arreglo[i] = Arreglo[j]
    Arreglo[j] = iViejo
  }