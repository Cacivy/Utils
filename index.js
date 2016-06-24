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

var arr= [{id:1,tip:1},{id:2,tip:1}]
arr.distinct('tip')

