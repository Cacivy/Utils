var request = require('request')
var cheerio = require('cheerio')
var fs= require('fs')
var path = require('path')

request({
	url: 'https://www.zhihu.com/question/36390957/answer/69099395',
	method: 'GET',
}, function(error, response, body) {
	if (!error && response.statusCode === 200) {
		var arr = []
		var $ = cheerio.load(body)
		$('img').each(function(i, elem){
			var src = $(this).attr('src')
			if (src && src.indexOf('http') > -1) {
				arr.push(src)
			}
		})
		WriteImgs(arr)
	}
})

function WriteImgs(arr) {
	if (arr.length) {
		arr.forEach(url => {
			var filename = path.basename(url)
			downloadImg(url, filename, function() {
				console.log('ok')
			})
		})
	}
}

var downloadImg = function(url, filename, callback){
	request.head(url, function(err, res, body){
		if (err) {
			console.log('err: '+ err);
			callback(null, err);
		}
		try {
			request(url)
				.pipe(fs.createWriteStream('./images/'+filename))
				.on('close', function(){
					console.log('Done : ', url);
					callback(null, url);
			});
		} catch (error) {
			console.log(error)
		}
	});
};