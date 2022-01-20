describe('Split Array function', function() {
    it('es capaz de dividir el arreglo en dos partes', function() {
        expect( split([1,2,3,4,5]) ).toEqual([[1,2,3],[4,5]] )
    });
  });

  describe('Merge', function(){
    it('es capaz de combinar dos Arreglos ordenados en uno solo ordenado', function(){
        expect(merge([3,4,5,8],[1,3,4,5])).toEqual([1,3,3,4,4,5,5,8])
    });
  });


