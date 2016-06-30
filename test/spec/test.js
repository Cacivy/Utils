(function () {
  'use strict';

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {
        Array.prototype.distinct= function(attr){
          var temp = []
          var list = []
          for(var i=0;i<this.length;i++){
                var item = this[i]
                var val = item[attr]
                if (temp.indexOf(val) == -1) {
                    temp.push(item[attr])
                    list.push(item)
                }
            }
          return list
        }

        const convert= (arr)=>{
          return arr.distinct('tip')
        }

        var result=convert([{id:1,tip:1},{id:2,tip:1}])

        expect(result).to.eql( [{id:1,tip:1}] );

      });
    });
  });
})();
