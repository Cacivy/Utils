//订阅者模式 20160719
function Events() {
  this.obj= {}
}

Events.prototype.on= function(name, fun) {
  this.obj[name] = fun
}
Events.prototype.emit= function(name, arg) {
  var fun= this.obj[name]
  if(fun){
    fun.apply(this,[arg])
  }
}

var event= new Events()
event.on('test',function(args){
  alert(args)
  console.log(this)
})
event.emit('test',1)
event.emit('test',2)