
//El primer test en bubblesort.spec.js comprobará que bubblesort.js pueda manejar un Arreglo vacío:
describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  });

  describe('Bubble Sort ', function(){
    it('order the array', function(){
      expect( bubbleSort([13,23,5,34,14,65,1]) ).toEqual( [1,5,13,14,23,34,65] );
    });
  });


  describe('Bubble Sort ', function(){
    it('hold the same order', function(){
      expect( bubbleSort([12,27,32,63,81]) ).toEqual( [12,27,32,63,81] );
    });
  });