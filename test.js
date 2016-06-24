import test from 'ava'

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

test(t=> {
  t.same(convert([{id:1,tip:1},{id:2,tip:1}]), [{id:1,tip:1}])
})

/*
.pass([message])

测试通过。

.fail([message])

断言失败。

.ok(value, [message])

断言value是否是真值。

.notOk(value, [message])

断言value是否是假值。

.true(value, [message])

断言value是否是true。

.false(value, [message])

断言value是否是false。

.is(value, expected, [message])

断言value是否和expected相等。

.not(value, expected, [message])

断言value是否和expected不等。

.same(value, expected, [message])

断言value是否和expected深度相等。

.notSame(value, expected, [message])

断言value是否和expected深度不等。

.throws(function|promise, [error, [message]])

断言function抛出一个异常，或者promise reject 一个错误。

error可以是一个构造器，正则，错误信息或者验证函数。

返回由function抛出的异常或promise的拒绝原因。

.notThrows(function|promise, [message])

断言function没有抛出一个异常，或者promise resolve。

.regex(contents, regex, [message])

断言contents匹配regex。

.ifError(error, [message])

断言error是假值。
*/
