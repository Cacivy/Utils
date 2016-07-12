(function () {
  'use strict';

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {
      	//实现简单的ES6 promise
      	 
      	 // promise示例
      	 (function(){
      	 	      	function Promise(func){
      	 	      	    this.state = 'pending';
      	 	      	    this.doneList = []; 
      	 	      	    func(this.resolve.bind(this));
      	 	      	    this.promise = this; 
      	 	      	}

      	 	      	Promise.prototype = {
      	 	      	    resolve: function(){
      	 	      	        // arguments[0]是resolve的第一个参数
      	 	      	        var arg = arguments[0];
      	 	      	        while(true){
      	 	      	            if( this.doneList.length === 0 ){
      	 	      	                this.state = 'done';
      	 	      	                break;
      	 	      	            }
      	 	      	            if( arg instanceof Promise ){
      	 	      	                this.promise = arg;
      	 	      	                arg.doneList = arg.doneList.concat(this.doneList);
      	 	      	                this.doneList.length = 0;
      	 	      	                this.state = 'done';
      	 	      	                break;
      	 	      	            }
      	 	      	            // 这里是运行then里面回调函数的地方
      	 	      	            // 以数组形式传给下一个函数,然后保存新的值
      	 	      	            // 判断传递的参数是否为undefined,是的话，就不用传了
      	 	      	            if( typeof arg === 'undefined' ){
      	 	      	                arg = this.doneList.shift().apply(this);
      	 	      	            }else{
      	 	      	                arg = this.doneList.shift().apply(this, [arg]);
      	 	      	            }   
      	 	      	        }
      	 	      	        // 保存最后的arg，保证后续的回调能继续得到参数
      	 	      	        this.arg = arg;
      	 	      	    },
      	 	      	    then: function(callback){ 
      	 	      	        this.doneList.push(callback); 
      	 	      	        if( this.state === 'done'){
      	 	      	            this.state = 'pending';
      	 	      	            this.resolve(this.arg); // 注意这里也要传递参数
      	 	      	        }
      	 	      	        return this.promise; 
      	 	      	    }
      	 	      	}
      	 	      	
      	 		 var demo= new Promise(function(resolve){
      	 	      	 	setTimeout(function(msg){
      	 	      	 		resolve('promise ok')
      	 	      	 	},2000)
      	 	      	 }).then(function(msg){
      	 	      	 	console.log(msg)
      	 	      	 	return 'aa'
      	 	      	 }).then(function(msg){
      	 	      	 	console.log(msg)
      	 	      	 	return 'ccc'
      	 	      	 }).then(function(msg){
      	 	      	 	console.log(msg)
      	 	      	 })
      	 	      	})(window)

      });
    });
  });
})();
