//Zhihu http://localhost:3000/GET?host=news-at.zhihu.com&url=/api/4/news/latest
var config= {
    site: 'localhost:3000',
    host: 'news-at.zhihu.com',
    method: 'GET'
}

var apiZhihu= {
    startimage: '/api/4/start-image/1080*1776',
    news: '/api/4/news/latest',
    newbyid: function(id){
       return '/api/4/news/'.concat(id)
    },
    newsbydate: function(date){
       return '/api/4/news/before/'.concat(date)
    }
}