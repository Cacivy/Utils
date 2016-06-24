/**
 * 获取GET参数的值
 * @method getQueryString
 * @param  {[type]}       name [参数名]
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(unescape(r[2])); //字符编码转换
    return null;
}

/**
 * 数组对象去重
 * @method distinctArr
 * @param  {[type]} arr  [var arr=[{id:1,tip:1},{id:2,tip:1}]]
 * @param  {[type]} attr ['tips']
 * @return {[type]}      [[{id:1,tip:1}]]
 */
function distinctArr(arr, attr) {
    var temp = []
    var list = []
    arr.forEach(function (item) {
        var val = item[attr]
        if (temp.indexOf(val) == -1) {
            temp.push(item[attr])
            list.push(item)
        }
    })
    return list
}

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

/**
 * ajax.get/post 调用
 * @method
 * @param  {[type]}   url      [请求url]
 * @param  {[type]}   data     [请求参数]
 * @param  {Function} callback [success回调]
 * @param  {[type]}   err      [err回调]
 * @return {[type]}            []
 */
const ajax={}
;['get', 'post'].forEach(function(item){
    ajax[item] = (url, data, callback, err) => {
      var httpRequest = new XMLHttpRequest()
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
                    var data = JSON.parse(httpRequest.responseText)
                    if (callback) callback(data)
                }else{
                    if(err) err()
                }
            }
        }
        httpRequest.open(item, url)
        httpRequest.setRequestHeader("Accept", "application/json")
        httpRequest.send()
    }
})

const date = {
    /**
     * 获取当前时间
     * @method GetFormatDate
     * @param  {[type]}      month [true: 当前时间前一个月 false: 当前时间]
     */
    getFormatDate(month) {
        var date = new Date();
        if (month) {
            date.setMonth(date.getMonth() - 1);
        }
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        return y + "-" + m + "-" + d;
    },
    /**
     * 获取当前月的第一天
     */
    getCurrentMonthFirst() {
        var date = new Date();
        date.setDate(1);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        return y + "-" + m + "-" + d;
    },
    /**
     * 获取当前月的最后一天
     */
    getCurrentMonthLast() {
        var date = new Date();
        var currentMonth = date.getMonth();
        var nextMonth = ++currentMonth;
        var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
        var oneDay = 1000 * 60 * 60 * 24;
        date = new Date(nextMonthFirstDay - oneDay);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        return y + "-" + m + "-" + d;
    }
    /**
     * /Date()/转换
     * @method dateFormat
     * @param  {[type]}   val  [需要转换的值]
     * @param  {[type]}   type [null:返回yyyy-MM-dd 0:返回转换后的Date对象 1: yyyy-MM-dd hh:mm:ss]
     * @return {[type]}        [见type Description]
     */
    function dateFormat (val,type)=> {
      if (val != null) {
              var date = new Date(parseInt(val.replace("/Date(", "").replace(")/", ""), 10));
              if(type==0){
                return date;
              }
              //月份为0-11，所以+1，月份小于10时补个0
              var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
              var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
              if(type){
                var currentHour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                var currentMinute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                var currentSecond = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
                return date.getFullYear() + "-" + month + "-" + currentDate+" " +currentHour + ":" +currentMinute + ":" + currentSecond;
              }else{
                return date.getFullYear() + "-" + month + "-" + currentDate;
              }

          }
          return "";
    }

}

/**
 * 判断是否点击某元素
 */
$(document).on('click',function(e){
	var _con = $('.target');   // 设置目标区域
	  if(!_con.is(e.target) && _con.has(e.target).length === 0){ 	console.log('不在目标区域');
	  }else{
		console.log('在目标区域');
	  }
})
